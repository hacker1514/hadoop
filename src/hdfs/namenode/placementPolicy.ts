import { NodeId, VirtualNode } from '../../core/domain/types';

export class BlockPlacementPolicyDefault {
  /**
   * Hadoop Default Block Placement Policy:
   * 1st Replica: Local Node (or random node on writer's rack).
   * 2nd Replica: Different Node on a Remote Rack.
   * 3rd Replica: Different Node on the Same Remote Rack as the 2nd replica.
   */
  public chooseTargets(
    nodes: VirtualNode[],
    writerNodeId: NodeId | undefined,
    replicationFactor: number,
    excludedNodeIds: Set<NodeId> = new Set()
  ): VirtualNode[] {
    const availableNodes = nodes.filter(
      (n) => n.state === 'RUNNING' && n.type === 'DATANODE' && !excludedNodeIds.has(n.id)
    );

    if (availableNodes.length === 0) {
      return [];
    }

    const chosen: VirtualNode[] = [];
    const targetCount = Math.min(replicationFactor, availableNodes.length);

    // Group nodes by rack
    const rackMap = new Map<string, VirtualNode[]>();
    availableNodes.forEach((node) => {
      if (!rackMap.has(node.rackId)) {
        rackMap.set(node.rackId, []);
      }
      rackMap.get(node.rackId)!.push(node);
    });

    const rackIds = Array.from(rackMap.keys());

    // 1st Replica
    let firstNode: VirtualNode;
    const writerNode = availableNodes.find((n) => n.id === writerNodeId);
    if (writerNode) {
      firstNode = writerNode;
    } else {
      // Pick random node from a random rack
      const randomRack = rackMap.get(rackIds[Math.floor(Math.random() * rackIds.length)])!;
      firstNode = randomRack[Math.floor(Math.random() * randomRack.length)];
    }
    chosen.push(firstNode);

    if (chosen.length >= targetCount) return chosen;

    // 2nd Replica: Pick node on a remote rack
    const remoteRackIds = rackIds.filter((r) => r !== firstNode.rackId);
    let secondNode: VirtualNode | undefined;

    if (remoteRackIds.length > 0) {
      const targetRemoteRackId = remoteRackIds[Math.floor(Math.random() * remoteRackIds.length)];
      const remoteRackNodes = rackMap.get(targetRemoteRackId)!;
      secondNode = remoteRackNodes[Math.floor(Math.random() * remoteRackNodes.length)];
      chosen.push(secondNode);
    } else {
      // Single rack cluster fallback: pick another node from same rack
      const sameRackNodes = rackMap.get(firstNode.rackId)!.filter((n) => n.id !== firstNode.id);
      if (sameRackNodes.length > 0) {
        secondNode = sameRackNodes[Math.floor(Math.random() * sameRackNodes.length)];
        chosen.push(secondNode);
      }
    }

    if (chosen.length >= targetCount) return chosen;

    // 3rd Replica: Same remote rack as 2nd replica, different node
    if (secondNode) {
      const sameRemoteRackNodes = (rackMap.get(secondNode.rackId) || []).filter(
        (n) => !chosen.some((c) => c.id === n.id)
      );

      if (sameRemoteRackNodes.length > 0) {
        const thirdNode = sameRemoteRackNodes[Math.floor(Math.random() * sameRemoteRackNodes.length)];
        chosen.push(thirdNode);
      }
    }

    // Fill remaining replicas if targetCount > chosen.length
    while (chosen.length < targetCount) {
      const remaining = availableNodes.filter((n) => !chosen.some((c) => c.id === n.id));
      if (remaining.length === 0) break;
      chosen.push(remaining[Math.floor(Math.random() * remaining.length)]);
    }

    return chosen;
  }
}
