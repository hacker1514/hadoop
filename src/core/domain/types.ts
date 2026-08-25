// Core Domain Types for Browser-Based Hadoop Simulator

export type NodeId = string;
export type BlockId = string;
export type JobId = string;
export type TaskId = string;
export type ContainerId = string;
export type AppId = string;
export type PathString = string;

// Finite State Machine State Enums
export type DataNodeState = 'NEW' | 'STARTING' | 'RUNNING' | 'UNHEALTHY' | 'DEAD' | 'RECOVERING';
export type NameNodeState = 'STARTING' | 'SAFE_MODE' | 'ACTIVE' | 'STOPPED';
export type TaskState = 'PENDING' | 'SCHEDULED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'KILLED';
export type ContainerState = 'REQUESTED' | 'ALLOCATED' | 'ACQUIRED' | 'RUNNING' | 'RELEASED' | 'EXPIRED';
export type BlockState = 'CREATING' | 'FINALIZED' | 'RBW' | 'CORRUPTED';
export type DataLocality = 'NODE_LOCAL' | 'RACK_LOCAL' | 'OFF_RACK';

export interface Rack {
  id: string;
  name: string;
  nodes: NodeId[];
}

export interface VirtualNode {
  id: NodeId;
  hostname: string;
  rackId: string;
  type: 'NAMENODE' | 'DATANODE' | 'RESOURCEMANAGER' | 'NODEMANAGER' | 'HYBRID';
  state: DataNodeState;
  storageCapacityBytes: number;
  storageUsedBytes: number;
  memoryCapacityMb: number;
  memoryUsedMb: number;
  vCoresCapacity: number;
  vCoresUsed: number;
  lastHeartbeatTime: number;
  blocks: BlockId[];
  containers: ContainerId[];
}

export interface Block {
  id: BlockId;
  filePath: PathString;
  blockIndex: number;
  sizeBytes: number;
  checksum: string;
  checksumStatus: 'VALID' | 'CORRUPTED' | 'UNKNOWN';
  generationStamp: number;
  replicas: Replica[];
  state: BlockState;
}

export interface Replica {
  blockId: BlockId;
  nodeId: NodeId;
  rackId: string;
  state: BlockState;
  storagePath: string;
  updatedAt: number;
}

export interface INodeBase {
  name: string;
  path: PathString;
  owner: string;
  group: string;
  permissions: string;
  createdAt: number;
  modifiedAt: number;
}

export interface INodeFile extends INodeBase {
  type: 'FILE';
  sizeBytes: number;
  replicationFactor: number;
  blockSizeBytes: number;
  blocks: BlockId[];
}

export interface INodeDirectory extends INodeBase {
  type: 'DIRECTORY';
  children: Map<string, INodeFile | INodeDirectory>;
  quotaNamespace?: number;
  quotaStorageBytes?: number;
}

export type INode = INodeFile | INodeDirectory;

export interface YARNContainer {
  id: ContainerId;
  appId: AppId;
  nodeId: NodeId;
  memoryMb: number;
  vCores: number;
  state: ContainerState;
  assignedTaskId?: TaskId;
  allocatedAt: number;
}

export interface YARNQueue {
  name: string;
  capacityPercent: number;
  maxCapacityPercent: number;
  usedCapacityPercent: number;
  usedMemoryMb: number;
  usedVCores: number;
  runningApplications: AppId[];
}

export interface MapReduceTask {
  id: TaskId;
  jobId: JobId;
  type: 'MAP' | 'REDUCE';
  taskIndex: number;
  state: TaskState;
  inputBlockId?: BlockId;
  inputSplitPath?: PathString;
  assignedNodeId?: NodeId;
  assignedContainerId?: ContainerId;
  locality?: DataLocality;
  progressPercent: number;
  recordsProcessed: number;
  bytesProcessed: number;
  spillCount: number;
  attempts: TaskAttempt[];
  startTime?: number;
  finishTime?: number;
}

export interface TaskAttempt {
  attemptId: string;
  taskId: TaskId;
  attemptNumber: number;
  nodeId: NodeId;
  containerId: ContainerId;
  state: TaskState;
  isSpeculative: boolean;
  startTime: number;
  finishTime?: number;
  failureReason?: string;
}

export interface MapReduceJob {
  id: JobId;
  name: string;
  user: string;
  queue: string;
  inputPath: PathString;
  outputPath: PathString;
  mapperClass: string;
  reducerClass: string;
  numMapTasks: number;
  numReduceTasks: number;
  state: 'SUBMITTED' | 'INITIALIZING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'KILLED';
  mapProgressPercent: number;
  reduceProgressPercent: number;
  submitTime: number;
  startTime?: number;
  finishTime?: number;
  mapTasks: MapReduceTask[];
  reduceTasks: MapReduceTask[];
  counters: Record<string, number>;
}

export interface NetworkLink {
  sourceNodeId: NodeId;
  targetNodeId: NodeId;
  latencyMs: number;
  bandwidthMbps: number;
  packetLossPercent: number;
  status: 'ONLINE' | 'THROTTLED' | 'DISCONNECTED';
}

export interface Metric {
  name: string;
  category: 'HDFS' | 'YARN' | 'MAPREDUCE' | 'NETWORK' | 'SYSTEM';
  value: number;
  timestamp: number;
  unit: string;
}

export interface Counter {
  group: string;
  name: string;
  value: number;
}

export interface TraceSpan {
  spanId: string;
  traceId: string;
  name: string;
  component: 'NAMENODE' | 'DATANODE' | 'RESOURCEMANAGER' | 'NODEMANAGER' | 'MAPPER' | 'SHUFFLE' | 'REDUCER';
  startTime: number;
  durationMs: number;
  nodeId?: NodeId;
  details: Record<string, unknown>;
}
