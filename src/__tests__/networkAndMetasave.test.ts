import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Linux Network Diagnostics & NameNode Metasave Test', () => {
  it('should execute Linux network diagnostic commands (ifconfig, ping, netstat)', () => {
    const backend = new SimulatorBackend();
    const ifOut = backend.executeCLI('ifconfig');
    expect(ifOut).toContain('inet 192.168.1.100');

    const pingOut = backend.executeCLI('ping datanode1.hadoop.local');
    expect(pingOut).toContain('PING datanode1.hadoop.local');
    expect(pingOut).toContain('bytes from');

    const netOut = backend.executeCLI('netstat -tuln');
    expect(netOut).toContain('0.0.0.0:9000');
    expect(netOut).toContain('NameNode');
    expect(netOut).toContain('0.0.0.0:8088');
    expect(netOut).toContain('ResourceManager');
  });

  it('should dump NameNode memory block state via -metasave', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const metaOut = backend.executeCLI('hdfs dfsadmin -metasave metasave.log');
    expect(metaOut).toContain('Created metasave report');

    const catOut = backend.executeCLI('cat metasave.log');
    expect(catOut).toContain('NameNode Metasave Report');
    expect(catOut).toContain('Live DataNodes: 3');
  });
});
