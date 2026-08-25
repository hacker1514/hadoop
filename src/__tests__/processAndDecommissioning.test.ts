import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Linux Process Management & HDFS/YARN Node Refresh Test', () => {
  it('should list Linux processes (ps -ef) and handle process kill (kill, killall)', () => {
    const backend = new SimulatorBackend();
    const psOut = backend.executeCLI('ps -ef');
    expect(psOut).toContain('java -Dproc_namenode');
    expect(psOut).toContain('NameNode');

    const killOut = backend.executeCLI('kill -9 1042');
    expect(killOut).toContain('Process 1042 terminated');

    const killAllOut = backend.executeCLI('killall java');
    expect(killAllOut).toContain('All java processes terminated');
  });

  it('should support hdfs dfsadmin -refreshNodes for DataNode decommissioning', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const refOut = backend.executeCLI('hdfs dfsadmin -refreshNodes');
    expect(refOut).toContain('Re-reading dfs.hosts');
    expect(refOut).toContain('DataNode membership & decommissioning list refreshed');
  });

  it('should support yarn node -list -states DECOMMISSIONED', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const yarnOut = backend.executeCLI('yarn node -list -states DECOMMISSIONED');
    expect(yarnOut).toContain('Total Decommissioned Nodes');
  });
});
