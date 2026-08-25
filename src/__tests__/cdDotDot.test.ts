import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('cd .. Navigation Test', () => {
  it('should navigate up one directory when running cd ..', () => {
    const backend = new SimulatorBackend();
    expect(backend.executeCLI('pwd')).toBe('/home/Hacker');

    backend.executeCLI('mkdir mydir');
    backend.executeCLI('cd mydir');
    expect(backend.executeCLI('pwd')).toBe('/home/Hacker/mydir');

    backend.executeCLI('cd ..');
    expect(backend.executeCLI('pwd')).toBe('/home/Hacker');
  });
});
