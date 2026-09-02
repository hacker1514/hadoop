import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Vim Multi-line Preservation & Re-editing Test', () => {
  it('should preserve multiline content when saving and re-editing in Vim', () => {
    const backend = new SimulatorBackend();
    const initialContent = 'Line 1: Hello Hadoop\nLine 2: Multi-line test\nLine 3: Preservation verified\n';

    
    backend.executeCLI(`echo "${initialContent}" > myfile.txt`);

    
    const catOutput = backend.executeCLI('cat myfile.txt');
    expect(catOutput).toContain('Line 1: Hello Hadoop');
    expect(catOutput).toContain('Line 2: Multi-line test');
    expect(catOutput).toContain('Line 3: Preservation verified');

    
    const appendedContent = initialContent + 'Line 4: Newly added line\n';
    backend.executeCLI(`echo "${appendedContent}" > myfile.txt`);

    const reCatOutput = backend.executeCLI('cat myfile.txt');
    expect(reCatOutput).toContain('Line 4: Newly added line');
  });
});
