import { NodeId, BlockId } from '../../core/domain/types';
import { NameNode } from '../../hdfs/namenode/nameNode';
import { DataNodeInstance } from '../../hdfs/datanode/dataNode';
import { VirtualNetwork } from '../../core/network/virtualNetwork';
import { SimulationEngine } from '../../core/simulation/engine';

export class FailureInjector {
  private nameNode: NameNode;
  private dataNodes: Map<NodeId, DataNodeInstance>;
  private network: VirtualNetwork;
  private engine: SimulationEngine;

  constructor(
    nameNode: NameNode,
    dataNodes: Map<NodeId, DataNodeInstance>,
    network: VirtualNetwork,
    engine: SimulationEngine
  ) {
    this.nameNode = nameNode;
    this.dataNodes = dataNodes;
    this.network = network;
    this.engine = engine;
  }

  public killNode(nodeId: NodeId): void {
    const dn = this.dataNodes.get(nodeId);
    if (dn) {
      dn.kill();
    }
  }

  public restartNode(nodeId: NodeId): void {
    const dn = this.dataNodes.get(nodeId);
    if (dn) {
      dn.restart();
    }
  }

  public corruptBlock(blockId: BlockId): void {
    const block = this.nameNode.getBlock(blockId);
    if (block && block.replicas.length > 0) {
      const targetNodeId = block.replicas[0].nodeId;
      const dn = this.dataNodes.get(targetNodeId);
      if (dn) {
        dn.corruptBlockChecksum(blockId);
      }
    }
  }

  public disconnectRack(rackId: string): void {
    this.network.disconnectRack(rackId);
    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'RACK_DISCONNECTED',
        'FAILURE',
        'FailureInjector',
        { rackId },
        this.engine.getClock().getTime()
      )
    );
  }

  public restoreRack(rackId: string): void {
    this.network.restoreRack(rackId);
    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'RACK_RESTORED',
        'FAILURE',
        'FailureInjector',
        { rackId },
        this.engine.getClock().getTime()
      )
    );
  }
}
