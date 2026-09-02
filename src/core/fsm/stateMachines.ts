import { DataNodeState, NameNodeState, TaskState, ContainerState, BlockState } from '../domain/types';

export class FSMError extends Error {
  constructor(public entity: string, public from: string, public to: string) {
    super(`Invalid FSM state transition for ${entity}: ${from} -> ${to}`);
    this.name = 'FSMError';
  }
}


const DATANODE_TRANSITIONS: Record<DataNodeState, DataNodeState[]> = {
  NEW: ['STARTING'],
  STARTING: ['RUNNING', 'UNHEALTHY', 'DEAD'],
  RUNNING: ['UNHEALTHY', 'DEAD'],
  UNHEALTHY: ['RUNNING', 'DEAD'],
  DEAD: ['RECOVERING'],
  RECOVERING: ['RUNNING', 'DEAD']
};

export function transitionDataNode(current: DataNodeState, next: DataNodeState): DataNodeState {
  if (current === next) return current;
  const allowed = DATANODE_TRANSITIONS[current] || [];
  if (!allowed.includes(next)) {
    throw new FSMError('DataNode', current, next);
  }
  return next;
}


const NAMENODE_TRANSITIONS: Record<NameNodeState, NameNodeState[]> = {
  STARTING: ['SAFE_MODE'],
  SAFE_MODE: ['ACTIVE', 'STOPPED'],
  ACTIVE: ['SAFE_MODE', 'STOPPED'],
  STOPPED: ['STARTING']
};

export function transitionNameNode(current: NameNodeState, next: NameNodeState): NameNodeState {
  if (current === next) return current;
  const allowed = NAMENODE_TRANSITIONS[current] || [];
  if (!allowed.includes(next)) {
    throw new FSMError('NameNode', current, next);
  }
  return next;
}


const TASK_TRANSITIONS: Record<TaskState, TaskState[]> = {
  PENDING: ['SCHEDULED', 'KILLED'],
  SCHEDULED: ['RUNNING', 'KILLED', 'FAILED'],
  RUNNING: ['SUCCEEDED', 'FAILED', 'KILLED'],
  SUCCEEDED: [],
  FAILED: ['SCHEDULED', 'KILLED'],
  KILLED: []
};

export function transitionTask(current: TaskState, next: TaskState): TaskState {
  if (current === next) return current;
  const allowed = TASK_TRANSITIONS[current] || [];
  if (!allowed.includes(next)) {
    throw new FSMError('Task', current, next);
  }
  return next;
}


const CONTAINER_TRANSITIONS: Record<ContainerState, ContainerState[]> = {
  REQUESTED: ['ALLOCATED', 'EXPIRED'],
  ALLOCATED: ['ACQUIRED', 'EXPIRED', 'RELEASED'],
  ACQUIRED: ['RUNNING', 'RELEASED'],
  RUNNING: ['RELEASED', 'EXPIRED'],
  RELEASED: [],
  EXPIRED: []
};

export function transitionContainer(current: ContainerState, next: ContainerState): ContainerState {
  if (current === next) return current;
  const allowed = CONTAINER_TRANSITIONS[current] || [];
  if (!allowed.includes(next)) {
    throw new FSMError('Container', current, next);
  }
  return next;
}


const BLOCK_TRANSITIONS: Record<BlockState, BlockState[]> = {
  CREATING: ['RBW', 'FINALIZED'],
  RBW: ['FINALIZED', 'CORRUPTED'],
  FINALIZED: ['CORRUPTED'],
  CORRUPTED: ['FINALIZED']
};

export function transitionBlock(current: BlockState, next: BlockState): BlockState {
  if (current === next) return current;
  const allowed = BLOCK_TRANSITIONS[current] || [];
  if (!allowed.includes(next)) {
    throw new FSMError('Block', current, next);
  }
  return next;
}
