import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Apache Kyuubi SQL Gateway, YARN SCM & HDFS Block Locations Test', () => {
  it('should start Apache Kyuubi SQL Gateway', () => {
    const backend = new SimulatorBackend();
    const kyuubiOut = backend.executeCLI('kyuubi start');
    expect(kyuubiOut).toContain('Apache Kyuubi SQL Gateway');
    expect(kyuubiOut).toContain('thrift server port 10009');
  });

  it('should execute YARN Shared Cache Manager (SCM)', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const scmOut = backend.executeCLI('yarn scm -run');
    expect(scmOut).toContain('YARN Shared Cache Manager');
  });

  it('should inspect HDFS Block IDs and DataNode host locations via fsck', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const fsckOut = backend.executeCLI('hdfs fsck /file.txt -files -blocks -locations');
    expect(fsckOut).toContain('blk_1073741825_1001');
    expect(fsckOut).toContain('datanode1.hadoop.local:9866');
  });
});
