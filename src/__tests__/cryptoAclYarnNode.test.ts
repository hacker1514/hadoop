import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('HDFS ACLs, Crypto Encryption Zones & YARN NodeManager Test', () => {
  it('should support HDFS getfacl, setfacl, and expunge', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    const setFaclOut = backend.executeCLI('hdfs dfs -setfacl -m user:alice:rwx /Hacker');
    expect(setFaclOut).toContain('Updated ACL');

    const getFaclOut = backend.executeCLI('hdfs dfs -getfacl /Hacker');
    expect(getFaclOut).toContain('user:alice:rwx');

    const expungeOut = backend.executeCLI('hdfs dfs -expunge');
    expect(expungeOut).toContain('Emptied Trash');
  });

  it('should support hdfs crypto encryption zones', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const createZoneOut = backend.executeCLI('hdfs crypto -createZone -keyName key1 -path /Hacker/secure');
    expect(createZoneOut).toContain('Added encryption zone');

    const listZonesOut = backend.executeCLI('hdfs crypto -listZones');
    expect(listZonesOut).toContain('/Hacker/secure');
  });

  it('should support yarn node -list and status', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const nodeList = backend.executeCLI('yarn node -list');
    expect(nodeList).toContain('datanode1.hadoop.local:8041');

    const nodeStatus = backend.executeCLI('yarn node -status datanode1.hadoop.local');
    expect(nodeStatus).toContain('RUNNING');
    expect(nodeStatus).toContain('Memory-Capacity : 8192MB');
  });
});
