import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Clean File Saving without Artifact Quotes', () => {
  it('should save and cat files without extra trailing quotes', () => {
    const backend = new SimulatorBackend();
    backend.saveLocalFile('k.txt', 'Hello');

    const catOutput = backend.executeCLI('cat k.txt');
    expect(catOutput).toBe('Hello');
    expect(catOutput).not.toContain('"');
  });
});
