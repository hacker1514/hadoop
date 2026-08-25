import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Presto/Trino SQL, Apache Pig & YARN RMAdmin Test', () => {
  it('should execute Presto and Trino SQL queries', () => {
    const backend = new SimulatorBackend();
    const prestoOut = backend.executeCLI('presto --execute "SELECT * FROM sales"');
    expect(prestoOut).toContain('Presto/Trino Distributed Engine');

    const trinoOut = backend.executeCLI('trino --execute "SELECT * FROM sales"');
    expect(trinoOut).toContain('Laptop');
  });

  it('should execute Apache Pig Latin scripts', () => {
    const backend = new SimulatorBackend();
    const pigOut = backend.executeCLI('pig -e "sales = LOAD \'/sales.csv\'; DUMP sales;"');
    expect(pigOut).toContain('Pig Latin Engine');
    expect(pigOut).toContain('Pig Job Complete');
  });

  it('should support yarn rmadmin -refreshNodes', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const rmOut = backend.executeCLI('yarn rmadmin -refreshNodes');
    expect(rmOut).toContain('NodeManager membership refreshed');
  });
});
