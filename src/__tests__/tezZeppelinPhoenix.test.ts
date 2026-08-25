import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Apache Tez, Zeppelin Notebooks & Phoenix SQL Test', () => {
  it('should execute Apache Tez DAG jobs', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const tezOut = backend.executeCLI('tez-job.sh --submit dag.xml');
    expect(tezOut).toContain('Apache Tez Engine');
    expect(tezOut).toContain('Memory-pipelined data transfers active');
  });

  it('should support Apache Zeppelin notebook daemon', () => {
    const backend = new SimulatorBackend();
    const zepOut = backend.executeCLI('zeppelin-daemon.sh start');
    expect(zepOut).toContain('Zeppelin Daemon started successfully');
  });

  it('should execute Apache Phoenix SQL over HBase', () => {
    const backend = new SimulatorBackend();
    const phxOut = backend.executeCLI('phoenix-sqlline -e "SELECT * FROM users"');
    expect(phxOut).toContain('Connected to: Phoenix');
    expect(phxOut).toContain('Hacker');
  });

  it('should support storagepolicies -satisfyStoragePolicy', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const satOut = backend.executeCLI('hdfs storagepolicies -satisfyStoragePolicy -path /Hacker');
    expect(satOut).toContain('Scheduled storage policy satisfaction');
  });
});
