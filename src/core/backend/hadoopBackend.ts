import { SimulationEngine } from '../simulation/engine';
import { NameNode } from '../../hdfs/namenode/nameNode';
import { DataNodeInstance } from '../../hdfs/datanode/dataNode';
import { ResourceManager } from '../../yarn/resourcemanager/resourceManager';
import { MapReduceEngine } from '../../mapreduce/engine/mapReduceEngine';
import { VirtualNetwork } from '../network/virtualNetwork';
import { FailureInjector } from '../../cluster/failures/failureInjector';
import { ObservabilityService } from '../observability/observability';
import { HadoopShellExecutor } from '../../shell/commands/commandRegistry';
import { HadoopDB } from '../../storage/hadoopDB';

export interface HadoopBackend {
  getBackendType(): 'SIMULATOR' | 'REAL_HADOOP';
  getEngine(): SimulationEngine;
  getNameNode(): NameNode;
  getResourceManager(): ResourceManager;
  getMapReduceEngine(): MapReduceEngine;
  getNetwork(): VirtualNetwork;
  getFailureInjector(): FailureInjector;
  getObservability(): ObservabilityService;
  executeCLI(command: string): string;
  saveLocalFile(filePath: string, content: string): void;
  readLocalFile(filePath: string): string | undefined;
  getWorkingDir(): string;
  initFromDB(): Promise<void>;
}

export class SimulatorBackend implements HadoopBackend {
  private engine: SimulationEngine;
  private nameNode: NameNode;
  private dataNodes: Map<string, DataNodeInstance> = new Map();
  private resourceManager: ResourceManager;
  private network: VirtualNetwork;
  private mapReduceEngine: MapReduceEngine;
  private failureInjector: FailureInjector;
  private observability: ObservabilityService;
  private shellExecutor: HadoopShellExecutor;
  private db: HadoopDB;

  constructor(numDataNodes: number = 3, numRacks: number = 2, seed: number = 12345) {
    this.engine = new SimulationEngine(seed);
    this.network = new VirtualNetwork();
    this.nameNode = new NameNode(this.engine);
    this.resourceManager = new ResourceManager(this.engine);
    this.db = new HadoopDB();

    for (let i = 1; i <= numDataNodes; i++) {
      const dnId = `dn-${i.toString().padStart(2, '0')}`;
      const rackIndex = ((i - 1) % numRacks) + 1;
      const rackId = `/rack-0${rackIndex}`;
      const hostname = `datanode${i}.hadoop.local`;

      this.network.registerNode(dnId, rackId);
      const dnInstance = new DataNodeInstance(
        dnId,
        hostname,
        rackId,
        10 * 1024 * 1024 * 1024,
        this.nameNode,
        this.engine
      );

      this.dataNodes.set(dnId, dnInstance);
      this.resourceManager.registerNodeManager(dnInstance.node);
    }

    this.mapReduceEngine = new MapReduceEngine(this.engine, this.nameNode, this.resourceManager, this.network);
    this.failureInjector = new FailureInjector(this.nameNode, this.dataNodes, this.network, this.engine);
    this.observability = new ObservabilityService(this.nameNode, this.resourceManager, this.engine);
    this.shellExecutor = new HadoopShellExecutor(this.nameNode, this.resourceManager, this.mapReduceEngine, this.db);
  }

  public async initFromDB(): Promise<void> {
    await this.shellExecutor.loadFromDB();
  }

  public getBackendType(): 'SIMULATOR' | 'REAL_HADOOP' {
    return 'SIMULATOR';
  }

  public getEngine(): SimulationEngine {
    return this.engine;
  }

  public getNameNode(): NameNode {
    return this.nameNode;
  }

  public getResourceManager(): ResourceManager {
    return this.resourceManager;
  }

  public getMapReduceEngine(): MapReduceEngine {
    return this.mapReduceEngine;
  }

  public getNetwork(): VirtualNetwork {
    return this.network;
  }

  public getFailureInjector(): FailureInjector {
    return this.failureInjector;
  }

  public getObservability(): ObservabilityService {
    return this.observability;
  }

  public executeCLI(command: string): string {
    return this.shellExecutor.execute(command);
  }

  public saveLocalFile(filePath: string, content: string): void {
    this.shellExecutor.saveLocalFileContent(filePath, content);
  }

  public readLocalFile(filePath: string): string | undefined {
    return this.shellExecutor.getLocalFileContent(filePath);
  }

  public getWorkingDir(): string {
    return this.shellExecutor.getWorkingDirDisplay();
  }
}
