import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('HDFS Checksum, Ranger Security & YARN Application Attempts Test', () => {
  it('should support hdfs dfs -checksum', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    backend.executeCLI('hdfs dfs -touchz /Hacker/file.txt');
    const chkOut = backend.executeCLI('hdfs dfs -checksum /Hacker/file.txt');
    expect(chkOut).toContain('MD5-of-073741824000000000000000');
  });

  it('should support ranger policy -list', () => {
    const backend = new SimulatorBackend();
    const rangerOut = backend.executeCLI('ranger policy -list');
    expect(rangerOut).toContain('Apache Ranger Security Policies');
    expect(rangerOut).toContain('/Hacker/*');
  });

  it('should support yarn applicationattempt -list', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const appAttOut = backend.executeCLI('yarn applicationattempt -list application_1700000000_0001');
    expect(appAttOut).toContain('appattempt_1700000000_0001_000001');
    expect(appAttOut).toContain('FINISHED');
  });
});
