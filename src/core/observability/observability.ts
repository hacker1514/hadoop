import { NameNode } from '../../hdfs/namenode/nameNode';
import { ResourceManager } from '../../yarn/resourcemanager/resourceManager';
import { SimulationEngine } from '../simulation/engine';

export interface HealthScoreDetails {
  score: number; // 0 to 100
  nodeAvailabilityPercent: number;
  blockHealthPercent: number;
  yarnCapacityPercent: number;
  status: 'EXCELLENT' | 'GOOD' | 'DEGRADED' | 'CRITICAL';
  factors: string[];
}

export class ObservabilityService {
  private nameNode: NameNode;
  private resourceManager: ResourceManager;
  public engine: SimulationEngine;

  constructor(nameNode: NameNode, resourceManager: ResourceManager, engine: SimulationEngine) {
    this.nameNode = nameNode;
    this.resourceManager = resourceManager;
    this.engine = engine;
  }

  public calculateHealthScore(): HealthScoreDetails {
    const dns = this.nameNode.getDataNodes();
    if (dns.length === 0) {
      return { score: 100, nodeAvailabilityPercent: 100, blockHealthPercent: 100, yarnCapacityPercent: 100, status: 'EXCELLENT', factors: ['Cluster initializing'] };
    }

    const liveNodes = dns.filter((n) => n.state === 'RUNNING').length;
    const nodeAvailabilityPercent = Math.round((liveNodes / dns.length) * 100);

    const fsck = this.nameNode.runFSCK('/');
    const blockHealthPercent = fsck.totalBlocks === 0 ? 100 : Math.round(((fsck.totalBlocks - fsck.corruptBlocks - fsck.missingBlocks - fsck.underReplicatedBlocks) / fsck.totalBlocks) * 100);

    const queues = this.resourceManager.getQueues();
    const avgQueueUsage = queues.reduce((acc, q) => acc + q.usedCapacityPercent, 0) / (queues.length || 1);
    const yarnCapacityPercent = Math.round(100 - avgQueueUsage);

    const score = Math.round(nodeAvailabilityPercent * 0.4 + blockHealthPercent * 0.4 + yarnCapacityPercent * 0.2);

    const factors: string[] = [];
    if (nodeAvailabilityPercent < 100) factors.push(`${dns.length - liveNodes} DataNode(s) offline`);
    if (fsck.underReplicatedBlocks > 0) factors.push(`${fsck.underReplicatedBlocks} under-replicated block(s)`);
    if (fsck.corruptBlocks > 0) factors.push(`${fsck.corruptBlocks} corrupt block(s)`);
    if (fsck.missingBlocks > 0) factors.push(`${fsck.missingBlocks} missing block(s)`);

    let status: HealthScoreDetails['status'] = 'EXCELLENT';
    if (score < 50) status = 'CRITICAL';
    else if (score < 75) status = 'DEGRADED';
    else if (score < 90) status = 'GOOD';

    return { score, nodeAvailabilityPercent, blockHealthPercent, yarnCapacityPercent, status, factors };
  }

  public explainDecision(topic: string, entityId: string): string {
    if (topic === 'BLOCK_PLACEMENT') {
      const block = this.nameNode.getBlock(entityId);
      if (!block) return `Block metadata for '${entityId}' not found.`;
      const reps = block.replicas.map((r) => `${r.nodeId} (Rack: ${r.rackId})`).join(', ');
      return `Block '${entityId}' replica placement decision:\nSelected ${block.replicas.length} target DataNodes based on Hadoop Default Block Placement Policy:\n1st Replica: Local node\n2nd Replica: Remote rack\n3rd Replica: Same remote rack\nPlaced on: ${reps}`;
    }

    if (topic === 'DATA_LOCALITY') {
      return `Task '${entityId}' was scheduled using NODE_LOCAL preference to avoid network transfer overheads by running on the DataNode holding the target HDFS block replica.`;
    }

    return `No detailed decision trace recorded for ${topic} on ${entityId}.`;
  }
}
