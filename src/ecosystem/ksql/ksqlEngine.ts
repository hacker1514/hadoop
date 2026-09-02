import { HadoopDB } from '../../storage/hadoopDB';

export interface KSQLExecutionResult {
  output: string;
  isError: boolean;
}

export class KSQLEngine {
  private sqlLib: any = null;
  private db: any = null;
  private initPromise: Promise<void> | null = null;
  private hadoopDB: HadoopDB = new HadoopDB();

  public saveLocalFileCallback?: (filename: string, content: string) => void;

  constructor() {}

  public async init(): Promise<void> {
    if (typeof window === 'undefined') return;
    if (this.db) return;

    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = new Promise<void>((resolve) => {
      const loadScriptAndInit = async () => {
        try {
          if (!(window as any).initSqlJs) {
            const script = document.createElement('script');
            script.src = './sql/sql-wasm.js';
            script.async = true;
            document.head.appendChild(script);
            await new Promise((res, rej) => {
              script.onload = res;
              script.onerror = rej;
            });
          }

          if ((window as any).initSqlJs) {
            this.sqlLib = await (window as any).initSqlJs({
              locateFile: (file: string) => {
                if (file.endsWith('.wasm')) {
                  return './sql/sql-wasm.wasm';
                }
                return `./sql/${file}`;
              }
            });

            await this.hadoopDB.waitReady();
            const savedBytes = await this.hadoopDB.loadKSQLDatabase();
            if (savedBytes && savedBytes.length > 0) {
              this.db = new this.sqlLib.Database(savedBytes);
            } else {
              this.db = new this.sqlLib.Database();
            }
          }
          resolve();
        } catch (err: any) {
          console.error('KSQL Engine init error:', err);
          resolve();
        }
      };

      loadScriptAndInit();
    });

    return this.initPromise;
  }

  public getDatabase(): any {
    return this.db;
  }

  public getSqlLib(): any {
    return this.sqlLib;
  }

  public async persistDatabase(): Promise<void> {
    if (!this.db) return;
    try {
      const data = this.db.export();
      await this.hadoopDB.saveKSQLDatabase(data);
    } catch {}
  }

  private async handleLoadCommand(query: string): Promise<KSQLExecutionResult> {
    let filePath = '';
    let tableName = '';

    const assignMatch = query.match(/^([a-zA-Z0-9_]+)\s*=\s*LOAD\s+['"]?([^'"]+)['"]?/i);
    const intoMatch = query.match(/^LOAD\s+['"]?([^'"]+)['"]?\s+(?:USING\s+[^\s]+\s+)?INTO\s+([a-zA-Z0-9_]+)/i);
    const simpleMatch = query.match(/^LOAD\s+['"]?([^'"]+)['"]?/i);

    if (assignMatch) {
      tableName = assignMatch[1].trim();
      filePath = assignMatch[2].trim();
    } else if (intoMatch) {
      filePath = intoMatch[1].trim();
      tableName = intoMatch[2].trim();
    } else if (simpleMatch) {
      filePath = simpleMatch[1].trim();
      tableName = filePath.split('.')[0].replace(/[^a-zA-Z0-9_]/g, '_');
    } else {
      return { output: "Usage: load 'file.csv' into table_name OR table_name = load 'file.csv'", isError: true };
    }

    const allFiles = await this.hadoopDB.loadAllLocalFiles();
    let fileContent: string | undefined = undefined;

    const cleanTarget = filePath.replace(/^\.\//, '').replace(/^\/home\/Hacker\//, '');
    for (const [key, val] of allFiles.entries()) {
      const cleanKey = key.replace(/^\.\//, '').replace(/^\/home\/Hacker\//, '');
      if (cleanKey === cleanTarget || key === filePath) {
        fileContent = val;
        break;
      }
    }

    if (!fileContent) {
      return {
        output: `Error: Local file "${filePath}" not found in terminal directory. Use vim ${filePath} to create it first.`,
        isError: true
      };
    }

    const lines = fileContent.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) {
      return { output: `File "${filePath}" is empty.`, isError: true };
    }

    const delimiter = lines[0].includes('\t') ? '\t' : ',';
    const firstRowTokens = lines[0].split(delimiter).map(s => s.trim().replace(/^['"]|['"]$/g, ''));

    let headers: string[] = [];
    let startIdx = 0;

    const isFirstRowHeader = firstRowTokens.every(t => isNaN(Number(t)));
    if (isFirstRowHeader && lines.length > 1) {
      headers = firstRowTokens.map(h => h.replace(/[^a-zA-Z0-9_]/g, '_'));
      startIdx = 1;
    } else {
      headers = firstRowTokens.map((_, i) => `col_${i + 1}`);
      startIdx = 0;
    }

    try {
      const colDefs = headers.map(h => `${h} TEXT`).join(', ');
      this.db.exec(`CREATE TABLE IF NOT EXISTS ${tableName} (${colDefs});`);

      let insertedCount = 0;
      for (let i = startIdx; i < lines.length; i++) {
        const rowVals = lines[i].split(delimiter).map(v => v.trim().replace(/^['"]|['"]$/g, ''));
        const safeVals = headers.map((_, colIdx) => {
          const raw = rowVals[colIdx] ?? '';
          return `'${raw.replace(/'/g, "''")}'`;
        });
        this.db.exec(`INSERT INTO ${tableName} VALUES (${safeVals.join(', ')});`);
        insertedCount++;
      }

      await this.persistDatabase();
      return {
        output: `Successfully loaded ${insertedCount} records from "${filePath}" into table "${tableName}".`,
        isError: false
      };
    } catch (e: any) {
      return { output: 'Error loading CSV into table: ' + e.message, isError: true };
    }
  }

  private async handleStoreSaveCommand(query: string): Promise<KSQLExecutionResult> {
    const trimmed = query.trim();
    const storeMatch = trimmed.match(/^(?:STORE|SAVE)\s+([a-zA-Z0-9_]+)\s+INTO\s+['"]?([^'"]+)['"]?/i);

    if (storeMatch) {
      const tableName = storeMatch[1].trim();
      let filename = storeMatch[2].trim();
      if (!filename.includes('.')) filename += '.csv';

      try {
        const result = this.db.exec(`SELECT * FROM ${tableName};`);
        if (result.length === 0) {
          return { output: `Table "${tableName}" is empty or does not exist.`, isError: true };
        }

        const columns = result[0].columns;
        const rows = result[0].values;

        let csvContent = columns.join(',') + '\n';
        rows.forEach((row: any[]) => {
          const line = row.map(v => (v === null ? '' : String(v).includes(',') ? `"${v}"` : String(v))).join(',');
          csvContent += line + '\n';
        });

        if (this.saveLocalFileCallback) {
          this.saveLocalFileCallback(filename, csvContent);
        } else {
          await this.hadoopDB.saveLocalFile(filename, csvContent);
        }

        return {
          output: `Successfully stored ${rows.length} rows from table "${tableName}" into "${filename}".`,
          isError: false
        };
      } catch (e: any) {
        return { output: `Error storing table "${tableName}": ` + e.message, isError: true };
      }
    }

    if (!this.db) return { output: 'Database empty.', isError: true };
    const parts = trimmed.split(/\s+/);
    let filename = parts[1] || 'database.db';
    if (!filename.endsWith('.db')) filename += '.db';

    try {
      const data = this.db.export();
      let binary = '';
      const bytes = new Uint8Array(data);
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      if (this.saveLocalFileCallback) {
        this.saveLocalFileCallback(filename, binary);
      } else {
        await this.hadoopDB.saveLocalFile(filename, binary);
      }

      return { output: `Database saved as "${filename}".`, isError: false };
    } catch (e: any) {
      return { output: 'Error saving database: ' + e.message, isError: true };
    }
  }

  public async executeCommand(query: string): Promise<KSQLExecutionResult> {
    await this.init();

    if (!this.db && this.sqlLib) {
      try {
        this.db = new this.sqlLib.Database();
      } catch {}
    }

    const trimmed = query.trim();
    const lowerQuery = trimmed.toLowerCase();

    if (!trimmed) {
      return { output: '', isError: false };
    }

    if (lowerQuery === 'help') {
      return {
        output: `commands added:
1.clear => to clear screen
2.describe table => to get structure of table
3.save => save database (.db) or save table to CSV (e.g. save users into 'out.csv')
4.store => store table into CSV (e.g. store users into 'out.csv' using PigStorage(','))
5.load => load CSV file into table (e.g. load 'sales.csv' into sales or sales = load 'sales.csv')
6.add => to add data from an existing .db file
7.tables => to show all tables
8.contact => talk with developer
9.request => to adding new commands
10.feedback => to providing feedback to developer 
11.ask => ask your doubts
12.edit => to create a sql file
13.run => to run the sql file 
14.help => to see all commands
.......work is going on ......`,
        isError: false
      };
    }

    if (lowerQuery.startsWith('load ') || lowerQuery.includes('= load ')) {
      return this.handleLoadCommand(trimmed);
    }

    if (lowerQuery.startsWith('store ') || (lowerQuery.startsWith('save ') && lowerQuery.includes(' into '))) {
      return this.handleStoreSaveCommand(trimmed);
    }

    if (lowerQuery.startsWith('save')) {
      return this.handleStoreSaveCommand(trimmed);
    }

    if (lowerQuery === 'tables') {
      if (!this.db) return { output: 'No tables found in the database.', isError: false };
      try {
        const result = this.db.exec("SELECT name FROM sqlite_master WHERE type='table';");
        if (result.length > 0 && result[0].values.length > 0) {
          let outputText = 'Tables:\n';
          result[0].values.forEach((row: any[]) => {
            outputText += '- ' + row[0] + '\n';
          });
          return { output: outputText.trim(), isError: false };
        } else {
          return { output: 'No tables found in the database.', isError: false };
        }
      } catch (e: any) {
        return { output: 'Error: ' + e.message, isError: true };
      }
    }

    if (lowerQuery.startsWith('describe table') || lowerQuery.startsWith('desc ')) {
      if (!this.db) return { output: 'Database not initialized.', isError: true };
      const parts = trimmed.split(/\s+/);
      const tableName = parts[parts.length - 1];
      try {
        const result = this.db.exec(`PRAGMA table_info(${tableName});`);
        if (result.length > 0 && result[0].values.length > 0) {
          let outputText = 'Column Name | Type | Not Null | Default Value | Primary Key\n';
          outputText += '-'.repeat(60) + '\n';
          result[0].values.forEach((row: any[]) => {
            outputText += row.join(' | ') + '\n';
          });
          return { output: outputText.trim(), isError: false };
        } else {
          return { output: `Error: Table '${tableName}' does not exist.`, isError: true };
        }
      } catch (e: any) {
        return { output: 'Error: ' + e.message, isError: true };
      }
    }

    if (lowerQuery.startsWith('ask ')) {
      const match = query.match(/^ask\s+"(.+)"$/i) || query.match(/^ask\s+(.+)$/i);
      if (!match) {
        return { output: 'Usage: ask "your question"', isError: true };
      }
      const userPrompt = match[1].replace(/^["']|["']$/g, '');

      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + (typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.VITE_GROQ_API_KEY || '' : ''),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama3-8b-8192',
            messages: [
              { role: 'system', content: 'Return only the single most important point from the user\'s message. No extra explanation.' },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 50,
            temperature: 0
          })
        });
        const data = await res.json();
        const aiReply = data?.choices?.[0]?.message?.content?.trim() || 'ASK Ksql RELATED THINGS....';
        return { output: aiReply, isError: false };
      } catch (err: any) {
        return { output: 'Error: ' + err.message, isError: true };
      }
    }

    if (lowerQuery === 'contact' || lowerQuery === 'request' || lowerQuery === 'feedback') {
      window.open('https://hacker1514.github.io/python/contact.html', '_blank');
      return { output: 'Opening developer portal...', isError: false };
    }

    if (!this.db) return { output: 'Database not initialized.', isError: true };

    try {
      const result = this.db.exec(query);
      await this.persistDatabase();

      if (result.length > 0) {
        let outputText = '';
        result.forEach((table: any) => {
          outputText += table.columns.join(' | ') + '\n';
          outputText += '-'.repeat(table.columns.join(' | ').length) + '\n';
          table.values.forEach((row: any[]) => {
            outputText += row.join(' | ') + '\n';
          });
        });
        return { output: outputText.trim(), isError: false };
      } else {
        return { output: 'Query executed successfully.', isError: false };
      }
    } catch (e: any) {
      return { output: 'Error: ' + e.message, isError: true };
    }
  }
}
