import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Strict Daemon Lifecycle Enforcement & Clean HDFS Root', () => {
  it('should refuse HDFS commands before start-dfs.sh is executed', () => {
    const backend = new SimulatorBackend();
    const lsOut = backend.executeCLI('hdfs dfs -ls /');
    expect(lsOut).toContain('Connection refused');
    expect(lsOut).toContain('HDFS services are currently STOPPED');
  });

  it('should enable HDFS commands after running start-dfs.sh and show empty root', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const lsOut = backend.executeCLI('hdfs dfs -ls /');
    expect(lsOut).toContain('Found 0 items');
  });

  it('should have about.txt in local Linux storage and allow uploading to HDFS', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    
    const localCat = backend.executeCLI('cat about.txt');
    expect(localCat).toContain('BROWSER-BASED HADOOP SIMULATOR');

    
    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    const putOut = backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');
    expect(putOut).toContain('Copied from Local');

    const hdfsLs = backend.executeCLI('hdfs dfs -ls /Hacker');
    expect(hdfsLs).toContain('about.txt');
  });
});
