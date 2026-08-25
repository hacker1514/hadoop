import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('HDFS Snapshots, Balancer & YARN Queue Status Test', () => {
  it('should support HDFS snapshots allow, create, and delete', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    const allowOut = backend.executeCLI('hdfs dfs -allowSnapshot /Hacker');
    expect(allowOut).toContain('Allowing snapshot');

    const snapOut = backend.executeCLI('hdfs dfs -createSnapshot /Hacker s1');
    expect(snapOut).toContain('Created snapshot /Hacker/.snapshot/s1');

    const delOut = backend.executeCLI('hdfs dfs -deleteSnapshot /Hacker s1');
    expect(delOut).toContain('Deleted snapshot s1');
  });

  it('should support hdfs balancer and diskbalancer', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const balOut = backend.executeCLI('hdfs balancer -threshold 10');
    expect(balOut).toContain('Rebalancing block allocation');

    const diskBalOut = backend.executeCLI('hdfs diskbalancer -plan datanode1');
    expect(diskBalOut).toContain('DiskBalancer Plan generated');
  });

  it('should support yarn queue status', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const qOut = backend.executeCLI('yarn queue -status root.default');
    expect(qOut).toContain('Queue Name: root.default');
    expect(qOut).toContain('State: RUNNING');
  });
});
