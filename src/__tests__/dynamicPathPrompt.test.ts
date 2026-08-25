import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Dynamic Path Prompt Display Test', () => {
  it('should display ~ for home directory and ~/mydir for subdirectories', () => {
    const backend = new SimulatorBackend();
    expect(backend.getWorkingDir()).toBe('~');

    backend.executeCLI('mkdir mydir');
    backend.executeCLI('cd mydir');
    expect(backend.getWorkingDir()).toBe('~/mydir');

    backend.executeCLI('cd ..');
    expect(backend.getWorkingDir()).toBe('~');
  });
});
