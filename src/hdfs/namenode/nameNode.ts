import { HDFSNamespace } from './namespace';
import { BlockPlacementPolicyDefault } from './placementPolicy';
import { Block, BlockId, INodeFile, NodeId, Replica, VirtualNode, NameNodeState } from '../../core/domain/types';
import { transitionNameNode } from '../../core/fsm/stateMachines';
import { SimulationEngine } from '../../core/simulation/engine';
import { VirtualStorageEngine } from '../datanode/storageEngine';

export interface FSCKReport {
  totalFiles: number;
  totalBlocks: number;
  totalReplicas: number;
  underReplicatedBlocks: number;
  corruptBlocks: number;
  missingBlocks: number;
  isHealthy: boolean;
  details: string[];
}

export class NameNode {
  private state: NameNodeState = 'STARTING';
  private namespace: HDFSNamespace;
  private placementPolicy: BlockPlacementPolicyDefault;
  private blockMap: Map<BlockId, Block> = new Map();
  private fileContentMap: Map<string, string> = new Map();
  private dataNodes: Map<NodeId, VirtualNode> = new Map();
  private engine: SimulationEngine;
  private storageEngine: VirtualStorageEngine;
  private heartbeatTimeoutMs = 10000;

  constructor(engine: SimulationEngine) {
    this.engine = engine;
    this.namespace = new HDFSNamespace();
    this.placementPolicy = new BlockPlacementPolicyDefault();
    this.storageEngine = new VirtualStorageEngine();

    this.state = transitionNameNode('STARTING', 'SAFE_MODE');

    this.engine.scheduleEvent('NAMENODE_ENTER_SAFEMODE', 'HDFS', 'NameNode', 0, () => {});

    this.engine.scheduleEvent('NAMENODE_LEAVE_SAFEMODE', 'HDFS', 'NameNode', 1000, () => {
      this.state = transitionNameNode('SAFE_MODE', 'ACTIVE');
    });

    this.scheduleHeartbeatAudit();
  }

  public getState(): NameNodeState {
    return this.state;
  }

  public getNamespace(): HDFSNamespace {
    return this.namespace;
  }

  public registerDataNode(node: VirtualNode): void {
    this.dataNodes.set(node.id, node);
    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'DATANODE_REGISTERED',
        'HDFS',
        node.id,
        { rackId: node.rackId, capacity: node.storageCapacityBytes },
        this.engine.getClock().getTime()
      )
    );
  }

  public getDataNodes(): VirtualNode[] {
    return Array.from(this.dataNodes.values());
  }

  public receiveHeartbeat(nodeId: NodeId, usedBytes: number, blockIds: BlockId[]): void {
    const dn = this.dataNodes.get(nodeId);
    if (!dn) return;

    dn.lastHeartbeatTime = this.engine.getClock().getTime();
    dn.storageUsedBytes = usedBytes;
    dn.blocks = [...blockIds];

    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'DATANODE_HEARTBEAT',
        'HDFS',
        nodeId,
        { usedBytes, blockCount: blockIds.length },
        this.engine.getClock().getTime()
      )
    );
  }

  public createAndWriteFile(
    pathStr: string,
    content: string | Uint8Array,
    replicationFactor: number = 3,
    blockSizeBytes: number = 134217728,
    writerNodeId?: NodeId
  ): INodeFile {
    const encoder = new TextEncoder();
    const data = typeof content === 'string' ? encoder.encode(content) : content;
    const textContent = typeof content === 'string' ? content : new TextDecoder().decode(content);
    const totalSize = data.length;

    const file = this.namespace.createFile(pathStr, totalSize, replicationFactor, blockSizeBytes);
    this.fileContentMap.set(file.path, textContent);

    const numBlocks = Math.max(1, Math.ceil(totalSize / blockSizeBytes));
    const allDataNodes = this.getDataNodes();

    for (let i = 0; i < numBlocks; i++) {
      const blockId = `blk_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
      const start = i * blockSizeBytes;
      const end = Math.min(start + blockSizeBytes, totalSize);
      const blockChunk = data.slice(start, end);
      const checksum = this.storageEngine.calculateChecksum(blockChunk);

      const targets = this.placementPolicy.chooseTargets(allDataNodes, writerNodeId, replicationFactor);

      const replicas: Replica[] = targets.map((target) => ({
        blockId,
        nodeId: target.id,
        rackId: target.rackId,
        state: 'FINALIZED',
        storagePath: `/data/${blockId}`,
        updatedAt: this.engine.getClock().getTime()
      }));

      const block: Block = {
        id: blockId,
        filePath: file.path,
        blockIndex: i,
        sizeBytes: blockChunk.length,
        checksum,
        checksumStatus: 'VALID',
        generationStamp: 1000 + i,
        replicas,
        state: 'FINALIZED'
      };

      this.blockMap.set(blockId, block);
      file.blocks.push(blockId);

      targets.forEach((targetNode) => {
        targetNode.blocks.push(blockId);
        targetNode.storageUsedBytes += blockChunk.length;
        this.storageEngine.writeBlockData(blockId, blockChunk);
      });

      this.engine.getEventStore().record(
        this.engine.getEventStore().createEvent(
          'BLOCK_CREATED',
          'HDFS',
          'NameNode',
          { blockId, filePath: file.path, replicas: targets.map((t) => t.id) },
          this.engine.getClock().getTime()
        )
      );
    }

    return file;
  }

  public readFileContent(pathStr: string): string | undefined {
    const norm = this.namespace.normalizePath(pathStr);
    return this.fileContentMap.get(norm);
  }

  public getBlock(blockId: BlockId): Block | undefined {
    return this.blockMap.get(blockId);
  }

  public runFSCK(pathStr: string = '/'): FSCKReport {
    const report: FSCKReport = {
      totalFiles: 0,
      totalBlocks: 0,
      totalReplicas: 0,
      underReplicatedBlocks: 0,
      corruptBlocks: 0,
      missingBlocks: 0,
      isHealthy: true,
      details: []
    };

    const targetNode = this.namespace.resolvePath(pathStr);
    if (!targetNode) {
      report.isHealthy = false;
      report.details.push(`Path not found: ${pathStr}`);
      return report;
    }

    const filesToScan: INodeFile[] = [];
    const collectFiles = (node: any) => {
      if (node.type === 'FILE') {
        filesToScan.push(node);
      } else if (node.type === 'DIRECTORY') {
        node.children.forEach((child: any) => collectFiles(child));
      }
    };
    collectFiles(targetNode);

    report.totalFiles = filesToScan.length;

    for (const file of filesToScan) {
      for (const blockId of file.blocks) {
        report.totalBlocks++;
        const block = this.blockMap.get(blockId);

        if (!block) {
          report.missingBlocks++;
          report.details.push(`Missing metadata for block ${blockId} in file ${file.path}`);
          continue;
        }

        const liveReplicas = block.replicas.filter((r) => {
          const dn = this.dataNodes.get(r.nodeId);
          return dn && dn.state === 'RUNNING';
        });

        report.totalReplicas += liveReplicas.length;

        if (block.checksumStatus === 'CORRUPTED') {
          report.corruptBlocks++;
          report.details.push(`CORRUPT block ${blockId} in file ${file.path}`);
        }

        if (liveReplicas.length === 0) {
          report.missingBlocks++;
          report.details.push(`MISSING block ${blockId} (0 live replicas) in file ${file.path}`);
        } else if (liveReplicas.length < file.replicationFactor) {
          report.underReplicatedBlocks++;
          report.details.push(
            `Under-replicated block ${blockId} in file ${file.path}. Expected: ${file.replicationFactor}, Found: ${liveReplicas.length}`
          );
        }
      }
    }

    report.isHealthy = report.corruptBlocks === 0 && report.missingBlocks === 0 && report.underReplicatedBlocks === 0;
    return report;
  }

  public triggerReReplication(): number {
    let reReplicatedCount = 0;
    const allDataNodes = this.getDataNodes();

    this.blockMap.forEach((block) => {
      const liveReplicas = block.replicas.filter((r) => {
        const dn = this.dataNodes.get(r.nodeId);
        return dn && dn.state === 'RUNNING';
      });

      const fileINode = this.namespace.resolvePath(block.filePath) as INodeFile;
      const targetRepFactor = fileINode ? fileINode.replicationFactor : 3;

      if (liveReplicas.length > 0 && liveReplicas.length < targetRepFactor) {
        const existingNodeIds = new Set(liveReplicas.map((r) => r.nodeId));
        const needed = targetRepFactor - liveReplicas.length;
        const newTargets = this.placementPolicy.chooseTargets(allDataNodes, undefined, needed, existingNodeIds);

        newTargets.forEach((target) => {
          const newReplica: Replica = {
            blockId: block.id,
            nodeId: target.id,
            rackId: target.rackId,
            state: 'FINALIZED',
            storagePath: `/data/${block.id}`,
            updatedAt: this.engine.getClock().getTime()
          };
          block.replicas.push(newReplica);
          target.blocks.push(block.id);
          reReplicatedCount++;

          this.engine.getEventStore().record(
            this.engine.getEventStore().createEvent(
              'BLOCK_REPLICATED',
              'HDFS',
              'NameNode',
              { blockId: block.id, targetNodeId: target.id },
              this.engine.getClock().getTime()
            )
          );
        });
      }
    });

    return reReplicatedCount;
  }

  private scheduleHeartbeatAudit(): void {
    this.engine.scheduleEvent('HEARTBEAT_AUDIT', 'HDFS', 'NameNode', 5000, () => {
      const now = this.engine.getClock().getTime();
      let failedNodesCount = 0;

      this.dataNodes.forEach((dn) => {
        if (dn.state === 'RUNNING' && now - dn.lastHeartbeatTime > this.heartbeatTimeoutMs) {
          dn.state = 'DEAD';
          failedNodesCount++;
          this.engine.getEventStore().record(
            this.engine.getEventStore().createEvent(
              'DATANODE_FAILED',
              'FAILURE',
              dn.id,
              { reason: 'Heartbeat timeout' },
              now
            )
          );
        }
      });

      if (failedNodesCount > 0) {
        this.triggerReReplication();
      }

      this.scheduleHeartbeatAudit();
    });
  }
}
