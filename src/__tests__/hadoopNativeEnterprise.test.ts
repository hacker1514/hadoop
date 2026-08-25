import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Hadoop-Native Enterprise Ecosystem & Cluster Administration Test', () => {
  it('should start Hive LLAP in-memory query acceleration daemon', () => {
    const backend = new SimulatorBackend();
    const llapOut = backend.executeCLI('hive --service llap');
    expect(llapOut).toContain('Hive LLAP Engine');
    expect(llapOut).toContain('Allocated 16GB off-heap memory cache');
  });

  it('should check Storage Policy Satisfier daemon status', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const spsOut = backend.executeCLI('hdfs storagepolicies -isSatisfierRunning');
    expect(spsOut).toContain('Storage Policy Satisfier (SPS) daemon is RUNNING');
  });

  it('should enable and disable Erasure Coding policies', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const enableOut = backend.executeCLI('hdfs ec -enablePolicy -policy RS-6-3-1024k');
    expect(enableOut).toContain('Erasure Coding policy RS-6-3-1024k enabled successfully');

    const disableOut = backend.executeCLI('hdfs ec -disablePolicy -policy RS-6-3-1024k');
    expect(disableOut).toContain('Erasure Coding policy RS-6-3-1024k disabled successfully');
  });

  it('should refresh superuser proxy group configurations in YARN RMAdmin', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const rmOut = backend.executeCLI('yarn rmadmin -refreshSuperUserGroupsConfiguration');
    expect(rmOut).toContain('Re-reading core-site.xml superuser');
  });
});
