import { AppId, ContainerId, NodeId, YARNContainer, YARNQueue, VirtualNode } from '../../core/domain/types';
import { transitionContainer } from '../../core/fsm/stateMachines';
import { SimulationEngine } from '../../core/simulation/engine';

export class ResourceManager {
  private queues: Map<string, YARNQueue> = new Map();
  private containers: Map<ContainerId, YARNContainer> = new Map();
  private nodes: Map<NodeId, VirtualNode> = new Map();
  private engine: SimulationEngine;
  private containerCounter = 0;

  constructor(engine: SimulationEngine) {
    this.engine = engine;
    this.initDefaultQueues();
  }

  private initDefaultQueues(): void {
    const defaultQueues: YARNQueue[] = [
      { name: 'root.default', capacityPercent: 50, maxCapacityPercent: 100, usedCapacityPercent: 0, usedMemoryMb: 0, usedVCores: 0, runningApplications: [] },
      { name: 'root.analytics', capacityPercent: 30, maxCapacityPercent: 70, usedCapacityPercent: 0, usedMemoryMb: 0, usedVCores: 0, runningApplications: [] },
      { name: 'root.research', capacityPercent: 20, maxCapacityPercent: 50, usedCapacityPercent: 0, usedMemoryMb: 0, usedVCores: 0, runningApplications: [] }
    ];

    defaultQueues.forEach((q) => this.queues.set(q.name, q));
  }

  public registerNodeManager(node: VirtualNode): void {
    this.nodes.set(node.id, node);
  }

  public getQueues(): YARNQueue[] {
    return Array.from(this.queues.values());
  }

  public requestContainer(appId: AppId, memoryMb: number, vCores: number, queueName: string = 'root.default', preferredNodeId?: NodeId): YARNContainer | undefined {
    const queue = this.queues.get(queueName) || this.queues.get('root.default')!;

    // Find a node with sufficient available vCores and memory
    const availableNodes = Array.from(this.nodes.values()).filter(
      (n) => n.state === 'RUNNING' && n.memoryCapacityMb - n.memoryUsedMb >= memoryMb && n.vCoresCapacity - n.vCoresUsed >= vCores
    );

    if (availableNodes.length === 0) {
      this.engine.getEventStore().record(
        this.engine.getEventStore().createEvent(
          'CONTAINER_REJECTED',
          'YARN',
          'ResourceManager',
          { appId, memoryMb, vCores, reason: 'Insufficient cluster resources' },
          this.engine.getClock().getTime()
        )
      );
      return undefined;
    }

    // Prefer node matching data locality if specified
    let selectedNode: VirtualNode;
    if (preferredNodeId && availableNodes.some((n) => n.id === preferredNodeId)) {
      selectedNode = availableNodes.find((n) => n.id === preferredNodeId)!;
    } else {
      selectedNode = availableNodes[Math.floor(Math.random() * availableNodes.length)];
    }

    this.containerCounter++;
    const containerId = `container_${appId}_${this.containerCounter.toString().padStart(4, '0')}`;

    const container: YARNContainer = {
      id: containerId,
      appId,
      nodeId: selectedNode.id,
      memoryMb,
      vCores,
      state: 'REQUESTED',
      allocatedAt: this.engine.getClock().getTime()
    };

    container.state = transitionContainer('REQUESTED', 'ALLOCATED');
    this.containers.set(containerId, container);

    // Deduct resources
    selectedNode.memoryUsedMb += memoryMb;
    selectedNode.vCoresUsed += vCores;
    selectedNode.containers.push(containerId);

    queue.usedMemoryMb += memoryMb;
    queue.usedVCores += vCores;
    if (!queue.runningApplications.includes(appId)) {
      queue.runningApplications.push(appId);
    }

    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'CONTAINER_ALLOCATED',
        'YARN',
        'ResourceManager',
        { containerId, appId, nodeId: selectedNode.id, memoryMb, vCores },
        this.engine.getClock().getTime()
      )
    );

    return container;
  }

  public releaseContainer(containerId: ContainerId): void {
    const container = this.containers.get(containerId);
    if (!container || container.state === 'RELEASED') return;

    container.state = transitionContainer(container.state, 'RELEASED');
    const node = this.nodes.get(container.nodeId);
    if (node) {
      node.memoryUsedMb = Math.max(0, node.memoryUsedMb - container.memoryMb);
      node.vCoresUsed = Math.max(0, node.vCoresUsed - container.vCores);
      node.containers = node.containers.filter((c) => c !== containerId);
    }

    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'CONTAINER_RELEASED',
        'YARN',
        'ResourceManager',
        { containerId },
        this.engine.getClock().getTime()
      )
    );
  }
}
