import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Vim Editor Integration & Full HDFS Command Suite', () => {
  it('should support hdfs dfs -touchz, -cp, and -mv', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');
    backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');

    // Create 0-byte file with touchz
    const touchzOut = backend.executeCLI('hdfs dfs -touchz /Hacker/zero.txt');
    expect(touchzOut).toContain('Created empty 0-byte HDFS file');

    // Copy file with -cp
    const cpOut = backend.executeCLI('hdfs dfs -cp /Hacker/about.txt /Hacker/about_copy.txt');
    expect(cpOut).toContain('Copied in HDFS');

    // Move file with -mv
    const mvOut = backend.executeCLI('hdfs dfs -mv /Hacker/about_copy.txt /Hacker/about_moved.txt');
    expect(mvOut).toContain('Moved in HDFS');

    const catMoved = backend.executeCLI('hdfs dfs -cat /Hacker/about_moved.txt');
    expect(catMoved).toContain('BROWSER-BASED HADOOP SIMULATOR');
  });

  it('should support hdfs dfs -setrep and -chmod', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');
    backend.executeCLI('hdfs dfs -put about.txt /Hacker/about.txt');

    const setrepOut = backend.executeCLI('hdfs dfs -setrep 2 /Hacker/about.txt');
    expect(setrepOut).toContain('Replication 2 set');

    const chmodOut = backend.executeCLI('hdfs dfs -chmod 755 /Hacker/about.txt');
    expect(chmodOut).toContain('Changed permissions');
  });
});
