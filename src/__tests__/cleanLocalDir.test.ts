import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Clean Local Home Directory Test', () => {
  it('should display about.txt when running ls in home directory', () => {
    const backend = new SimulatorBackend();
    const lsOut = backend.executeCLI('ls');
    expect(lsOut).toContain('about.txt');
    expect(lsOut).not.toContain('data.txt');
    expect(lsOut).not.toContain('sales.csv');
  });
});
