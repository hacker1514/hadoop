import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Default HDFS Lifecycle & /Hacker/about.txt Upload', () => {
  it('should allow creating /Hacker directory and uploading about.txt into HDFS', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    // Create HDFS directory & upload
    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');

    const hackerNode = backend.getNameNode().getNamespace().resolvePath('/Hacker/about.txt');
    expect(hackerNode).toBeDefined();
    expect(hackerNode?.type).toBe('FILE');

    const content = backend.getNameNode().readFileContent('/Hacker/about.txt');
    expect(content).toContain('BROWSER-BASED HADOOP SIMULATOR');
    expect(content).toContain('Niranjan Kumar K');
  });

  it('should display about.txt when running hdfs dfs -cat /Hacker/about.txt after upload', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');
    backend.executeCLI('hdfs dfs -mkdir /Hacker');
    backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');

    const output = backend.executeCLI('hdfs dfs -cat /Hacker/about.txt');
    expect(output).toContain('BROWSER-BASED HADOOP SIMULATOR');
    expect(output).toContain('Niranjan Kumar K');
  });
});
