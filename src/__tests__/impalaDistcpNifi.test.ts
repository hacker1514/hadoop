import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Impala SQL, Hadoop DistCp, Apache NiFi & DataNode Maintenance Mode Test', () => {
  it('should execute Impala MPP SQL queries', () => {
    const backend = new SimulatorBackend();
    const impOut = backend.executeCLI('impala-shell -q "SELECT * FROM sales"');
    expect(impOut).toContain('Impala Shell v3.4.0');
    expect(impOut).toContain('Laptop');
  });

  it('should execute hadoop distcp for inter-cluster data replication', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-all.sh');

    const distOut = backend.executeCLI('hadoop distcp hdfs://cluster1/src hdfs://cluster2/dst');
    expect(distOut).toContain('DistCp Engine');
    expect(distOut).toContain('Inter-cluster dataset replication completed');
  });

  it('should support Apache NiFi flow engine daemon', () => {
    const backend = new SimulatorBackend();
    const nifiOut = backend.executeCLI('nifi.sh start');
    expect(nifiOut).toContain('Apache NiFi Flow Engine');
    expect(nifiOut).toContain('NiFi Web UI initialized');
  });

  it('should support DataNode maintenance mode entry and exit', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const enterOut = backend.executeCLI('hdfs dfsadmin -enterMaintenance datanode1.hadoop.local');
    expect(enterOut).toContain('placed in Maintenance Window');

    const exitOut = backend.executeCLI('hdfs dfsadmin -exitMaintenance datanode1.hadoop.local');
    expect(exitOut).toContain('exited maintenance mode');
  });
});
