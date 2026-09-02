import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('New Linux & Real Hadoop YARN Logs Features', () => {
  it('should support grep, wc, head, tail, and history', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('pwd');
    backend.executeCLI('whoami');

    
    const histOut = backend.executeCLI('history');
    expect(histOut).toContain('pwd');
    expect(histOut).toContain('whoami');

    
    const grepOut = backend.executeCLI('grep HDFS about.txt');
    expect(grepOut).toContain('HDFS');

    
    const wcOut = backend.executeCLI('wc about.txt');
    expect(wcOut).toContain('about.txt');
  });

  it('should support yarn logs after starting yarn services', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const logsOut = backend.executeCLI('yarn logs -applicationId app_1234');
    expect(logsOut).toContain('YARN CONTAINER LOG ENGINE');
    expect(logsOut).toContain('Mapper Task 0');
  });
});
