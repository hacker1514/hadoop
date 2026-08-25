import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Quotas, SaveNamespace & YARN Application Kill Test', () => {
  it('should support hdfs dfs -stat and hdfs dfsadmin -saveNamespace', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    const statOut = backend.executeCLI('hdfs dfs -stat "%F %u:%g" /Hacker');
    expect(statOut).toContain('directory');

    const saveNsOut = backend.executeCLI('hdfs dfsadmin -saveNamespace');
    expect(saveNsOut).toContain('Saved namespace image');
  });

  it('should support HDFS file quotas and space quotas', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const qOut = backend.executeCLI('hdfs dfsadmin -setQuota 1000 /Hacker');
    expect(qOut).toContain('Set file count quota 1000');

    const sqOut = backend.executeCLI('hdfs dfsadmin -setSpaceQuota 10g /Hacker');
    expect(sqOut).toContain('Set space quota 10g');
  });

  it('should support yarn application -kill', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const killOut = backend.executeCLI('yarn application -kill application_1700000000_0001');
    expect(killOut).toContain('Killing application application_1700000000_0001');
    expect(killOut).toContain('killed by user Hacker');
  });
});
