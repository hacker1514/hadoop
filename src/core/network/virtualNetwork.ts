import { NetworkLink, NodeId } from '../domain/types';

export class VirtualNetwork {
  private links: Map<string, NetworkLink> = new Map();
  private nodeRacks: Map<NodeId, string> = new Map();

  public registerNode(nodeId: NodeId, rackId: string): void {
    this.nodeRacks.set(nodeId, rackId);
  }

  public getRackDistance(nodeA: NodeId, nodeB: NodeId): number {
    if (nodeA === nodeB) return 0;
    const rackA = this.nodeRacks.get(nodeA);
    const rackB = this.nodeRacks.get(nodeB);
    if (rackA && rackB && rackA === rackB) return 1;
    return 2;
  }

  public getLinkKey(nodeA: NodeId, nodeB: NodeId): string {
    const sorted = [nodeA, nodeB].sort();
    return `${sorted[0]}<->${sorted[1]}`;
  }

  public setLink(link: NetworkLink): void {
    const key = this.getLinkKey(link.sourceNodeId, link.targetNodeId);
    this.links.set(key, link);
  }

  public getLink(nodeA: NodeId, nodeB: NodeId): NetworkLink {
    const key = this.getLinkKey(nodeA, nodeB);
    const existing = this.links.get(key);
    if (existing) return existing;

    // Default network properties based on rack distance
    const dist = this.getRackDistance(nodeA, nodeB);
    const defaultLink: NetworkLink = {
      sourceNodeId: nodeA,
      targetNodeId: nodeB,
      latencyMs: dist === 0 ? 0 : dist === 1 ? 2 : 15,
      bandwidthMbps: dist === 0 ? 10000 : dist === 1 ? 1000 : 100,
      packetLossPercent: 0,
      status: 'ONLINE'
    };
    this.links.set(key, defaultLink);
    return defaultLink;
  }

  public calculateTransferTimeMs(nodeA: NodeId, nodeB: NodeId, sizeBytes: number): { transferTimeMs: number; isFailed: boolean } {
    const link = this.getLink(nodeA, nodeB);
    if (link.status === 'DISCONNECTED') {
      return { transferTimeMs: Infinity, isFailed: true };
    }

    // Check packet loss failure simulation
    if (link.packetLossPercent > 0 && Math.random() * 100 < link.packetLossPercent) {
      return { transferTimeMs: link.latencyMs * 5, isFailed: true };
    }

    const bandwidthBps = (link.bandwidthMbps * 1000000) / 8;
    const transferMs = (sizeBytes / bandwidthBps) * 1000;
    const totalMs = link.latencyMs + transferMs;
    return { transferTimeMs: Math.max(1, Math.round(totalMs)), isFailed: false };
  }

  public disconnectNode(nodeId: NodeId): void {
    this.links.forEach((link) => {
      if (link.sourceNodeId === nodeId || link.targetNodeId === nodeId) {
        link.status = 'DISCONNECTED';
      }
    });
  }

  public reconnectNode(nodeId: NodeId): void {
    this.links.forEach((link) => {
      if (link.sourceNodeId === nodeId || link.targetNodeId === nodeId) {
        link.status = 'ONLINE';
      }
    });
  }

  public disconnectRack(rackId: string): void {
    const rackNodes = Array.from(this.nodeRacks.entries())
      .filter(([_, r]) => r === rackId)
      .map(([n, _]) => n);
    
    rackNodes.forEach((nodeId) => this.disconnectNode(nodeId));
  }

  public restoreRack(rackId: string): void {
    const rackNodes = Array.from(this.nodeRacks.entries())
      .filter(([_, r]) => r === rackId)
      .map(([n, _]) => n);

    rackNodes.forEach((nodeId) => this.reconnectNode(nodeId));
  }
}
