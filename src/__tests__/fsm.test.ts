import { describe, it, expect } from 'vitest';
import { transitionDataNode, transitionNameNode, transitionTask, FSMError } from '../core/fsm/stateMachines';

describe('Finite State Machines', () => {
  it('should allow valid DataNode state transitions', () => {
    expect(transitionDataNode('NEW', 'STARTING')).toBe('STARTING');
    expect(transitionDataNode('STARTING', 'RUNNING')).toBe('RUNNING');
    expect(transitionDataNode('RUNNING', 'UNHEALTHY')).toBe('UNHEALTHY');
    expect(transitionDataNode('UNHEALTHY', 'DEAD')).toBe('DEAD');
    expect(transitionDataNode('DEAD', 'RECOVERING')).toBe('RECOVERING');
    expect(transitionDataNode('RECOVERING', 'RUNNING')).toBe('RUNNING');
  });

  it('should reject invalid DataNode state transitions', () => {
    expect(() => transitionDataNode('NEW', 'DEAD')).toThrow(FSMError);
    expect(() => transitionDataNode('DEAD', 'RUNNING')).toThrow(FSMError);
  });

  it('should validate NameNode state transitions', () => {
    expect(transitionNameNode('STARTING', 'SAFE_MODE')).toBe('SAFE_MODE');
    expect(transitionNameNode('SAFE_MODE', 'ACTIVE')).toBe('ACTIVE');
    expect(transitionNameNode('ACTIVE', 'SAFE_MODE')).toBe('SAFE_MODE');
  });

  it('should validate Map/Reduce Task state transitions', () => {
    expect(transitionTask('PENDING', 'SCHEDULED')).toBe('SCHEDULED');
    expect(transitionTask('SCHEDULED', 'RUNNING')).toBe('RUNNING');
    expect(transitionTask('RUNNING', 'SUCCEEDED')).toBe('SUCCEEDED');
  });
});
