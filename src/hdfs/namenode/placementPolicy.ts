import { NodeId, VirtualNode } from '../../core/domain/types';

export class BlockPlacementPolicyDefault {
  
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

    
    const rackMap = new Map<string, VirtualNode[]>();
    availableNodes.forEach((node) => {
      if (!rackMap.has(node.rackId)) {
        rackMap.set(node.rackId, []);
      }
      rackMap.get(node.rackId)!.push(node);
    });

    const rackIds = Array.from(rackMap.keys());

    
    let firstNode: VirtualNode;
    const writerNode = availableNodes.find((n) => n.id === writerNodeId);
    if (writerNode) {
      firstNode = writerNode;
    } else {
      
      const randomRack = rackMap.get(rackIds[Math.floor(Math.random() * rackIds.length)])!;
      firstNode = randomRack[Math.floor(Math.random() * randomRack.length)];
    }
    chosen.push(firstNode);

    if (chosen.length >= targetCount) return chosen;

    
    const remoteRackIds = rackIds.filter((r) => r !== firstNode.rackId);
    let secondNode: VirtualNode | undefined;

    if (remoteRackIds.length > 0) {
      const targetRemoteRackId = remoteRackIds[Math.floor(Math.random() * remoteRackIds.length)];
      const remoteRackNodes = rackMap.get(targetRemoteRackId)!;
      secondNode = remoteRackNodes[Math.floor(Math.random() * remoteRackNodes.length)];
      chosen.push(secondNode);
    } else {
      
      const sameRackNodes = rackMap.get(firstNode.rackId)!.filter((n) => n.id !== firstNode.id);
      if (sameRackNodes.length > 0) {
        secondNode = sameRackNodes[Math.floor(Math.random() * sameRackNodes.length)];
        chosen.push(secondNode);
      }
    }

    if (chosen.length >= targetCount) return chosen;

    
    if (secondNode) {
      const sameRemoteRackNodes = (rackMap.get(secondNode.rackId) || []).filter(
        (n) => !chosen.some((c) => c.id === n.id)
      );

      if (sameRemoteRackNodes.length > 0) {
        const thirdNode = sameRemoteRackNodes[Math.floor(Math.random() * sameRemoteRackNodes.length)];
        chosen.push(thirdNode);
      }
    }

    
    while (chosen.length < targetCount) {
      const remaining = availableNodes.filter((n) => !chosen.some((c) => c.id === n.id));
      if (remaining.length === 0) break;
      chosen.push(remaining[Math.floor(Math.random() * remaining.length)]);
    }

    return chosen;
  }
}
