import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Home Directory about.txt, HDFS Find & YARN Container List Test', () => {
  it('should locate about.txt directly inside home directory', () => {
    const backend = new SimulatorBackend();
    const lsOut = backend.executeCLI('ls');
    expect(lsOut).toContain('about.txt');

    const catOut = backend.executeCLI('cat about.txt');
    expect(catOut).toContain('BROWSER-BASED HADOOP SIMULATOR');
  });

  it('should support hdfs dfs -find and hdfs dfs -count', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    const findOut = backend.executeCLI('hdfs dfs -find / -name "*.txt"');
    expect(findOut).toContain('/about.txt');

    const countOut = backend.executeCLI('hdfs dfs -count /');
    expect(countOut).toContain('DIR_COUNT');
  });

  it('should support yarn container -list', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const containerOut = backend.executeCLI('yarn container -list appattempt_1700000000_0001_000001');
    expect(containerOut).toContain('container_e01_1700000000_0001_01_000001');
  });
});
