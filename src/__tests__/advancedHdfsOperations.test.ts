import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Advanced HDFS Management & Streaming Pipeline Test', () => {
  it('should support hdfs storagepolicies, ec, and cacheadmin', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-dfs.sh');

    // Storage policies
    const polOut = backend.executeCLI('hdfs storagepolicies -listPolicies');
    expect(polOut).toContain('HOT');
    expect(polOut).toContain('COLD');

    // Erasure coding
    const ecOut = backend.executeCLI('hdfs ec -listPolicies');
    expect(ecOut).toContain('RS-6-3-1024k');

    // Cache admin
    const cacheOut = backend.executeCLI('hdfs cacheadmin -addDirective -path /Hacker -pool pool1');
    expect(cacheOut).toContain('Added cache directive');
  });

  it('should support Kafka, Flume, and Oozie streaming commands', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-all.sh');

    const kafkaOut = backend.executeCLI('kafka-topics.sh --create --topic logs --bootstrap-server localhost:9092');
    expect(kafkaOut).toContain('Created topic logs');

    const flumeOut = backend.executeCLI('flume-ng agent --conf-file flume.conf --name a1');
    expect(flumeOut).toContain('Flume Agent a1');

    const oozieOut = backend.executeCLI('oozie job -config job.properties -run');
    expect(oozieOut).toContain('Workflow status: SUCCEEDED');
  });
});
