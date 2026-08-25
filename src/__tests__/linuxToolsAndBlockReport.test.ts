import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Linux System Tools & DataNode Block Report Test', () => {
  it('should execute Linux system monitoring commands (top, df, free, uname)', () => {
    const backend = new SimulatorBackend();
    const topOut = backend.executeCLI('top');
    expect(topOut).toContain('Tasks: 180 total');
    expect(topOut).toContain('NameNode');

    const dfOut = backend.executeCLI('df -h');
    expect(dfOut).toContain('/dev/sda1');

    const freeOut = backend.executeCLI('free -m');
    expect(freeOut).toContain('16384');

    const unameOut = backend.executeCLI('uname -a');
    expect(unameOut).toContain('Linux hadoop.local');
  });

  it('should trigger full DataNode block report to Active NameNode', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const reportOut = backend.executeCLI('hdfs dfsadmin -triggerBlockReport datanode1.hadoop.local');
    expect(reportOut).toContain('Triggering full block report');
    expect(reportOut).toContain('Full block report sent to Active NameNode');
  });
});
