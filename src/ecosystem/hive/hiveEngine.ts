export interface HiveColumn {
  name: string;
  type: string;
}

export interface HiveTable {
  name: string;
  columns: HiveColumn[];
  rows: Record<string, any>[];
}

export class HiveEngine {
  private tables: Map<string, HiveTable> = new Map();

  constructor() {
    
    this.tables.set('sales', {
      name: 'sales',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'region', type: 'STRING' },
        { name: 'product', type: 'STRING' },
        { name: 'amount', type: 'DOUBLE' }
      ],
      rows: [
        { id: 1, region: 'North', product: 'Laptop', amount: 1200.0 },
        { id: 2, region: 'South', product: 'Phone', amount: 800.0 },
        { id: 3, region: 'East', product: 'Tablet', amount: 450.0 },
        { id: 4, region: 'West', product: 'Monitor', amount: 300.0 }
      ]
    });
  }

  public executeSQL(sql: string): string {
    const trimmed = sql.trim().replace(/;$/, '');
    const lower = trimmed.toLowerCase();

    if (lower === 'show tables') {
      const names = Array.from(this.tables.keys());
      if (names.length === 0) return 'OK\nTime taken: 0.05 seconds';
      return `tab_name\n--------------------------------\n${names.join('\n')}\nTime taken: 0.08 seconds, Fetched: ${names.length} row(s)`;
    }

    if (lower.startsWith('drop table')) {
      const tableName = trimmed.split(/\s+/)[2]?.toLowerCase();
      if (!tableName || !this.tables.has(tableName)) {
        return `FAILED: SemanticException Table not found ${tableName}`;
      }
      this.tables.delete(tableName);
      return `OK\nTime taken: 0.18 seconds`;
    }

    if (lower.startsWith('alter table')) {
      const match = trimmed.match(/alter\s+table\s+([a-zA-Z0-9_]+)\s+add\s+columns\s*\(([^)]+)\)/i);
      if (!match) return `FAILED: ParseException Invalid ALTER TABLE syntax`;

      const tableName = match[1].toLowerCase();
      const table = this.tables.get(tableName);
      if (!table) return `FAILED: SemanticException Table not found ${tableName}`;

      const colsRaw = match[2].split(',');
      colsRaw.forEach((c) => {
        const parts = c.trim().split(/\s+/);
        table.columns.push({ name: parts[0], type: parts[1] ? parts[1].toUpperCase() : 'STRING' });
      });

      return `OK\nTime taken: 0.22 seconds`;
    }

    if (lower.startsWith('describe ')) {
      const tableName = trimmed.split(/\s+/)[1]?.toLowerCase();
      const table = this.tables.get(tableName);
      if (!table) return `FAILED: SemanticException Table not found ${tableName}`;

      const lines = ['col_name              data_type', '----------------------------------------'];
      table.columns.forEach((col) => {
        lines.push(`${col.name.padEnd(20)} ${col.type}`);
      });
      return lines.join('\n');
    }

    if (lower.startsWith('create table')) {
      const match = trimmed.match(/create\s+table\s+([a-zA-Z0-9_]+)\s*\(([^)]+)\)/i);
      if (!match) return `FAILED: ParseException Invalid CREATE TABLE syntax`;

      const tableName = match[1].toLowerCase();
      const colsRaw = match[2].split(',');
      const columns: HiveColumn[] = colsRaw.map((c) => {
        const parts = c.trim().split(/\s+/);
        return { name: parts[0], type: parts[1] ? parts[1].toUpperCase() : 'STRING' };
      });

      this.tables.set(tableName, { name: tableName, columns, rows: [] });
      return `OK\nTime taken: 0.24 seconds`;
    }

    if (lower.startsWith('insert into')) {
      const match = trimmed.match(/insert\s+into\s+([a-zA-Z0-9_]+)\s+values\s*\(([^)]+)\)/i);
      if (!match) return `FAILED: ParseException Invalid INSERT syntax`;

      const tableName = match[1].toLowerCase();
      const table = this.tables.get(tableName);
      if (!table) return `FAILED: Table not found ${tableName}`;

      const vals = match[2].split(',').map((v) => v.trim().replace(/^["']|["']$/g, ''));
      const row: Record<string, any> = {};
      table.columns.forEach((col, idx) => {
        row[col.name] = vals[idx] !== undefined ? vals[idx] : null;
      });

      table.rows.push(row);
      return `Loaded 1 row into ${tableName}\nOK\nTime taken: 0.31 seconds`;
    }

    if (lower.startsWith('select')) {
      const fromIdx = lower.indexOf('from');
      if (fromIdx === -1) return `FAILED: ParseException Missing FROM clause`;

      const tablePart = trimmed.substring(fromIdx + 4).trim();
      const tableTokens = tablePart.split(/\s+/);
      const tableName = tableTokens[0].toLowerCase();

      const table = this.tables.get(tableName);
      if (!table) return `FAILED: Table not found ${tableName}`;

      let rows = [...table.rows];

      
      const whereIdx = lower.indexOf('where');
      if (whereIdx !== -1) {
        const cond = trimmed.substring(whereIdx + 5).trim();
        if (cond.includes('>')) {
          const [col, val] = cond.split('>').map((s) => s.trim());
          rows = rows.filter((r) => Number(r[col]) > Number(val));
        } else if (cond.includes('=')) {
          const [col, val] = cond.split('=').map((s) => s.trim().replace(/^["']|["']$/g, ''));
          rows = rows.filter((r) => String(r[col]) === val);
        }
      }

      const headers = table.columns.map((c) => c.name).join('\t');
      const lines = [headers, '---------------------------------------------------------'];
      rows.forEach((r) => {
        lines.push(table.columns.map((c) => r[c.name]).join('\t'));
      });
      lines.push(`Time taken: 0.42 seconds, Fetched: ${rows.length} row(s)`);
      return lines.join('\n');
    }

    return `Unsupported Hive query: ${sql}`;
  }
}
