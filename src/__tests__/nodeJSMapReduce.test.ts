import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Node.js Runtime & Hadoop Polyglot Streaming Test', () => {
  it('should inspect Node.js runtime version', () => {
    const backend = new SimulatorBackend();
    const verOut = backend.executeCLI('node -v');
    expect(verOut).toContain('v18.16.0');
  });

  it('should evaluate inline JavaScript code with math (node -e)', () => {
    const backend = new SimulatorBackend();
    const evalOut = backend.executeCLI('node -e "console.log(10 + 20)"');
    expect(evalOut).toBe('30');
  });

  it('should execute JavaScript files (node k.js) with console output', () => {
    const backend = new SimulatorBackend();
    backend.saveLocalFile('k.js', 'console.log(100);');

    const runOut = backend.executeCLI('node k.js');
    expect(runOut).toContain('100');
  });

  it('should execute Hadoop Streaming MapReduce using Node.js scripts', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-all.sh');

    const streamOut = backend.executeCLI('hadoop jar hadoop-streaming.jar -mapper "node mapper.js" -reducer "node reducer.js" -input /in -output /out');
    expect(streamOut).toContain('Hadoop Streaming Engine');
    expect(streamOut).toContain('Node.js / Polyglot mapper script');
  });
});
