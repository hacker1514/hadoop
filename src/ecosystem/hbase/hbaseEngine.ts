export class HBaseEngine {
  
  private tables: Map<string, Map<string, Map<string, string>>> = new Map();

  constructor() {
    
    const users = new Map<string, Map<string, string>>();
    const row1 = new Map<string, string>();
    row1.set('info:name', 'Hacker');
    row1.set('info:role', 'Admin');
    users.set('r1', row1);

    this.tables.set('users', users);
  }

  public execute(commandLine: string): string {
    const trimmed = commandLine.trim();

    if (trimmed === 'list') {
      const names = Array.from(this.tables.keys());
      return `TABLE\n${names.join('\n')}\n${names.length} row(s) in 0.0420 seconds`;
    }

    if (trimmed.startsWith('create ')) {
      const match = trimmed.match(/create\s+['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/i);
      if (!match) return `Error: Usage: create 'tablename', 'columnfamily'`;

      const tableName = match[1];
      if (!this.tables.has(tableName)) {
        this.tables.set(tableName, new Map());
      }
      return `0 row(s) in 0.1250 seconds\n=> Hbase::Table - ${tableName}`;
    }

    if (trimmed.startsWith('put ')) {
      const match = trimmed.match(/put\s+['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/i);
      if (!match) return `Error: Usage: put 'tablename', 'rowkey', 'family:column', 'value'`;

      const [_, tableName, rowKey, col, val] = match;
      let table = this.tables.get(tableName);
      if (!table) {
        table = new Map();
        this.tables.set(tableName, table);
      }

      let row = table.get(rowKey);
      if (!row) {
        row = new Map();
        table.set(rowKey, row);
      }

      row.set(col, val);
      return `0 row(s) in 0.0890 seconds`;
    }

    if (trimmed.startsWith('get ')) {
      const match = trimmed.match(/get\s+['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/i);
      if (!match) return `Error: Usage: get 'tablename', 'rowkey'`;

      const [_, tableName, rowKey] = match;
      const table = this.tables.get(tableName);
      if (!table) return `Error: Table ${tableName} does not exist!`;

      const row = table.get(rowKey);
      if (!row) return `0 row(s) in 0.0120 seconds`;

      const lines = ['COLUMN                               CELL'];
      row.forEach((v, k) => {
        lines.push(`${k.padEnd(36)} timestamp=${Date.now()}, value=${v}`);
      });
      lines.push(`1 row(s) in 0.0340 seconds`);
      return lines.join('\n');
    }

    if (trimmed.startsWith('scan ')) {
      const match = trimmed.match(/scan\s+['"]([^'"]+)['"]/i);
      if (!match) return `Error: Usage: scan 'tablename'`;

      const tableName = match[1];
      const table = this.tables.get(tableName);
      if (!table) return `Error: Table ${tableName} does not exist!`;

      const lines = ['ROW                                  COLUMN+CELL'];
      let count = 0;
      table.forEach((row, rowKey) => {
        row.forEach((v, col) => {
          count++;
          lines.push(`${rowKey.padEnd(36)} column=${col}, timestamp=${Date.now()}, value=${v}`);
        });
      });
      lines.push(`${count} row(s) in 0.0560 seconds`);
      return lines.join('\n');
    }

    return `HBase Shell Command executed: ${trimmed}`;
  }
}
