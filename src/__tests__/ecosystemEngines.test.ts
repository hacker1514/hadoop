import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Hadoop Ecosystem Engines Test (Hive, HBase, Spark, Sqoop, Kerberos, NameNode HA)', () => {
  it('should execute Hive SQL queries', () => {
    const backend = new SimulatorBackend();
    const showOut = backend.executeCLI('hive -e "SHOW TABLES"');
    expect(showOut).toContain('sales');

    const selectOut = backend.executeCLI('hive -e "SELECT * FROM sales WHERE amount > 500"');
    expect(selectOut).toContain('Laptop');
    expect(selectOut).toContain('Phone');
  });

  it('should execute HBase shell commands', () => {
    const backend = new SimulatorBackend();
    const listOut = backend.executeCLI('hbase shell -c "list"');
    expect(listOut).toContain('users');

    const getOut = backend.executeCLI('hbase shell -c "get \'users\', \'r1\'"');
    expect(getOut).toContain('HBase Shell');
  });

  it('should support Kerberos authentication commands', () => {
    const backend = new SimulatorBackend();
    const initOut = backend.executeCLI('kinit Hacker@HADOOP.LOCAL');
    expect(initOut).toContain('Ticket grant received');

    const listOut = backend.executeCLI('klist');
    expect(listOut).toContain('Hacker@HADOOP.LOCAL');

    const destroyOut = backend.executeCLI('kdestroy');
    expect(destroyOut).toContain('destroyed');
  });

  it('should support NameNode HA failover commands', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const stateOut = backend.executeCLI('hdfs haadmin -getServiceState nn1');
    expect(stateOut).toBe('active');

    const failoverOut = backend.executeCLI('hdfs haadmin -failover nn1 nn2');
    expect(failoverOut).toContain('Failover from nn1 to nn2 successful');
  });

  it('should support spark-submit and sqoop import after starting daemons', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-all.sh');

    const sparkOut = backend.executeCLI('spark-submit --class org.apache.spark.examples.WordCount app.jar /in /out');
    expect(sparkOut).toContain('SparkContext');

    const sqoopOut = backend.executeCLI('sqoop import --table users --target-dir /Hacker/sqoop_users');
    expect(sqoopOut).toContain('Sqoop Import Complete');
  });
});
