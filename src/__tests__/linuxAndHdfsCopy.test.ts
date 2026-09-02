import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Linux Commands, Daemon Scripts & Local <-> HDFS Copy', () => {
  it('should execute start-dfs.sh script', () => {
    const backend = new SimulatorBackend();
    const output = backend.executeCLI('start-dfs.sh');
    expect(output).toContain('Starting namenodes on [localhost]');
    expect(output).toContain('HDFS daemons initialized successfully');
  });

  it('should execute Linux pwd, ls, touch, and echo', () => {
    const backend = new SimulatorBackend();
    expect(backend.executeCLI('pwd')).toBe('/home/Hacker');

    backend.executeCLI('touch testfile.txt');
    const lsOut = backend.executeCLI('ls');
    expect(lsOut).toContain('testfile.txt');

    backend.executeCLI('echo "hello local file" > mydata.txt');
    const catOut = backend.executeCLI('cat mydata.txt');
    expect(catOut).toContain('hello local file');
  });

  it('should copy from Local Linux FS to HDFS using hdfs dfs -put', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    
    backend.executeCLI('echo "data from local" > local_sample.txt');

    
    const putOut = backend.executeCLI('hdfs dfs -put local_sample.txt /Hacker/local_sample.txt');
    expect(putOut).toContain('Copied from Local');

    
    const hdfsCat = backend.executeCLI('hdfs dfs -cat /Hacker/local_sample.txt');
    expect(hdfsCat).toContain('data from local');
  });

  it('should copy from HDFS to Local Linux FS using hdfs dfs -get', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    
    backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');

    
    const getOut = backend.executeCLI('hdfs dfs -get /Hacker/about.txt downloaded_about.txt');
    expect(getOut).toContain('Copied from HDFS');

    
    const localCat = backend.executeCLI('cat downloaded_about.txt');
    expect(localCat).toContain('BROWSER-BASED HADOOP SIMULATOR');
  });
});
