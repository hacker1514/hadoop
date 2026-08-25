import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Interactive Spark Consoles & Hive DDL Schema Evolution Test', () => {
  it('should launch interactive Spark Scala REPL (spark-shell)', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const sparkOut = backend.executeCLI('spark-shell');
    expect(sparkOut).toContain("Spark context available as 'sc'");
    expect(sparkOut).toContain("scala>");
  });

  it('should launch interactive PySpark Python REPL (pyspark)', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('start-yarn.sh');

    const pyOut = backend.executeCLI('pyspark');
    expect(pyOut).toContain('version 3.3.0');
    expect(pyOut).toContain('>>>');
  });

  it('should support Hive ALTER TABLE and DROP TABLE queries', () => {
    const backend = new SimulatorBackend();

    const alterOut = backend.executeCLI('hive -e "ALTER TABLE sales ADD COLUMNS (country STRING)"');
    expect(alterOut).toContain('OK');

    const descOut = backend.executeCLI('hive -e "DESCRIBE sales"');
    expect(descOut).toContain('country');

    const dropOut = backend.executeCLI('hive -e "DROP TABLE sales"');
    expect(dropOut).toContain('OK');

    const showOut = backend.executeCLI('hive -e "SHOW TABLES"');
    expect(showOut).not.toContain('sales');
  });
});
