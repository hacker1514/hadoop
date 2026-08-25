import { BlockId, NodeId, VirtualNode } from '../../core/domain/types';
import { transitionDataNode } from '../../core/fsm/stateMachines';
import { SimulationEngine } from '../../core/simulation/engine';
import { NameNode } from '../namenode/nameNode';
import { VirtualStorageEngine } from './storageEngine';

export class DataNodeInstance {
  public node: VirtualNode;
  private nameNode: NameNode;
  private engine: SimulationEngine;
  private storageEngine: VirtualStorageEngine;
  private heartbeatIntervalMs = 3000;

  constructor(
    nodeId: NodeId,
    hostname: string,
    rackId: string,
    storageCapacityBytes: number,
    nameNode: NameNode,
    engine: SimulationEngine
  ) {
    this.nameNode = nameNode;
    this.engine = engine;
    this.storageEngine = new VirtualStorageEngine();

    this.node = {
      id: nodeId,
      hostname,
      rackId,
      type: 'DATANODE',
      state: 'NEW',
      storageCapacityBytes,
      storageUsedBytes: 0,
      memoryCapacityMb: 8192,
      memoryUsedMb: 0,
      vCoresCapacity: 4,
      vCoresUsed: 0,
      lastHeartbeatTime: engine.getClock().getTime(),
      blocks: [],
      containers: []
    };

    // Transition state
    this.node.state = transitionDataNode('NEW', 'STARTING');
    this.node.state = transitionDataNode('STARTING', 'RUNNING');

    // Register with NameNode
    this.nameNode.registerDataNode(this.node);

    // Schedule heartbeats
    this.scheduleHeartbeats();
  }

  public getStorageEngine(): VirtualStorageEngine {
    return this.storageEngine;
  }

  public async storeBlock(blockId: BlockId, data: Uint8Array): Promise<void> {
    await this.storageEngine.writeBlockData(blockId, data);
    if (!this.node.blocks.includes(blockId)) {
      this.node.blocks.push(blockId);
    }
    this.node.storageUsedBytes += data.length;
  }

  public corruptBlockChecksum(blockId: BlockId): void {
    const block = this.nameNode.getBlock(blockId);
    if (block) {
      block.checksumStatus = 'CORRUPTED';
      this.engine.getEventStore().record(
        this.engine.getEventStore().createEvent(
          'BLOCK_CORRUPTED',
          'FAILURE',
          this.node.id,
          { blockId },
          this.engine.getClock().getTime()
        )
      );
    }
  }

  public kill(): void {
    this.node.state = transitionDataNode(this.node.state, 'DEAD');
    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'DATANODE_FAILED',
        'FAILURE',
        this.node.id,
        { reason: 'Manual kill' },
        this.engine.getClock().getTime()
      )
    );
  }

  public restart(): void {
    if (this.node.state === 'DEAD') {
      this.node.state = transitionDataNode('DEAD', 'RECOVERING');
      this.node.state = transitionDataNode('RECOVERING', 'RUNNING');
      this.node.lastHeartbeatTime = this.engine.getClock().getTime();
      this.nameNode.receiveHeartbeat(this.node.id, this.node.storageUsedBytes, this.node.blocks);
      this.engine.getEventStore().record(
        this.engine.getEventStore().createEvent(
          'DATANODE_RECOVERED',
          'HDFS',
          this.node.id,
          {},
          this.engine.getClock().getTime()
        )
      );
    }
  }

  private scheduleHeartbeats(): void {
    this.engine.scheduleEvent('HEARTBEAT_SEND', 'HDFS', this.node.id, this.heartbeatIntervalMs, () => {
      if (this.node.state === 'RUNNING') {
        this.node.lastHeartbeatTime = this.engine.getClock().getTime();
        this.nameNode.receiveHeartbeat(this.node.id, this.node.storageUsedBytes, this.node.blocks);
        this.scheduleHeartbeats();
      }
    });
  }
}
