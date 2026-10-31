import { PYSPARK_PYTHON_SETUP } from '../spark/pysparkEngine';

export interface PythonExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

export function transpilePythonToJS(pythonCode: string): string {
  let cleanCode = pythonCode
    .replace(/[\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  if (!cleanCode.includes('\n') && cleanCode.includes('\\n')) {
    cleanCode = cleanCode.replace(/\\n/g, '\n').replace(/\\t/g, '    ');
  }

  const lines = cleanCode.split('\n');
  const jsLines: string[] = [];
  const indentStack: number[] = [0];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    let currentIndent = rawLine.search(/\S/);
    if (currentIndent < 0) currentIndent = 0;

    while (indentStack.length > 1 && currentIndent <= indentStack[indentStack.length - 1]) {
      indentStack.pop();
      if (!trimmed.startsWith('else') && !trimmed.startsWith('elif')) {
        jsLines.push('}');
      }
    }

    let line = trimmed;

    // Unescape Python boolean & keyword literals
    line = line.replace(/\bTrue\b/g, 'true');
    line = line.replace(/\bFalse\b/g, 'false');
    line = line.replace(/\bNone\b/g, 'null');
    line = line.replace(/\bis not\b/g, '!==');
    line = line.replace(/\bis\b/g, '===');
    line = line.replace(/\band\b/g, '&&');
    line = line.replace(/\bor\b/g, '||');
    line = line.replace(/\bnot\b\s+/g, '!');
    line = line.replace(/\bpass\b/g, '');

    // Handle context managers: with open(...) as f:
    if (/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/.test(line)) {
      line = line.replace(/^with\s+open\((.*?)\)\s+as\s+([a-zA-Z_]\w*)\s*:\s*(#.*)?$/, 'let $2 = __py_open__($1); {');
      indentStack.push(currentIndent);
      jsLines.push(line);
      continue;
    }

    // Handle imports: import helper
    if (/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/.test(line)) {
      line = line.replace(/^import\s+([a-zA-Z_]\w*)\s*(#.*)?$/, 'let $1 = __py_import__("$1");');
      jsLines.push(line);
      continue;
    }

    // Handle from module import func
    if (/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/.test(line)) {
      line = line.replace(/^from\s+([a-zA-Z_]\w*)\s+import\s+(.*?)\s*(#.*)?$/, 'let { $2 } = __py_import__("$1");');
      jsLines.push(line);
      continue;
    }

    const oneLinerMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):\s*(.+)$/);
    if (oneLinerMatch) {
      const [, varName, iterExpr, body] = oneLinerMatch;
      let jsBody = body.replace(/print\((.*?)\)/g, (_m, args) => `__py_print__(${args})`);
      jsBody = jsBody.replace(/input\((.*?)\)/g, (_m, arg) => `__py_input__(${arg || '""'})`);
      if (!jsBody.endsWith(';')) jsBody += ';';
      jsLines.push(`for (let ${varName} of ${iterExpr}) { ${jsBody} }`);
      continue;
    }

    if (/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/.test(line)) {
      line = line.replace(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:\s*(#.*)?$/, 'for (let $1 of $2) {');
      indentStack.push(currentIndent);
    } else if (/^while\s+(.*?)\s*:\s*(#.*)?$/.test(line)) {
      const cond = line.replace(/^while\s+(.*?)\s*:\s*(#.*)?$/, '$1');
      line = `let __py_while_count_${i}__ = 0;\nwhile (${cond}) { if (++__py_while_count_${i}__ > 10000) break;`;
      indentStack.push(currentIndent);
    } else if (/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/.test(line)) {
      line = line.replace(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:\s*(#.*)?$/, 'function $1($2) {');
      indentStack.push(currentIndent);
    } else if (/^elif\s+(.*?)\s*:\s*(#.*)?$/.test(line)) {
      line = line.replace(/^elif\s+(.*?)\s*:\s*(#.*)?$/, '} else if ($1) {');
      indentStack.push(currentIndent);
    } else if (/^if\s+(.*?)\s*:\s*(#.*)?$/.test(line)) {
      line = line.replace(/^if\s+(.*?)\s*:\s*(#.*)?$/, 'if ($1) {');
      indentStack.push(currentIndent);
    } else if (/^else\s*:\s*(#.*)?$/.test(line)) {
      line = '} else {';
      indentStack.push(currentIndent);
    } else {
      line = line.replace(/print\((.*?)\)/g, (_m, args) => `__py_print__(${args})`);
      line = line.replace(/input\((.*?)\)/g, (_m, arg) => `__py_input__(${arg || '""'})`);
      line = line.replace(/open\((.*?)\)/g, (_m, args) => `__py_open__(${args})`);

      if (!line.endsWith('{') && !line.endsWith('}') && !line.endsWith(';')) {
        line += ';';
      }
    }

    jsLines.push(line);
  }

  while (indentStack.length > 1) {
    indentStack.pop();
    jsLines.push('}');
  }

  return jsLines.join('\n');
}

export class PythonEngine {
  private pyodide: any = null;
  private pyodideInitPromise: Promise<void> | null = null;
  private isPySparkSetupDone: boolean = false;

  /** Copy the simulated shell filesystem into Pyodide without flattening paths. */
  private syncLocalFiles(localFiles?: Map<string, string>): void {
    if (!localFiles || !this.pyodide?.FS) return;

    const importDirs = new Set<string>(['/home/Hacker']);
    const pythonDirs = new Set<string>();
    localFiles.forEach((content, filepath) => {
      const normalized = filepath.startsWith('/') ? filepath : `/home/Hacker/${filepath}`;
      const parent = normalized.slice(0, normalized.lastIndexOf('/')) || '/';
      importDirs.add(parent);
      if (normalized.endsWith('.py')) pythonDirs.add(parent);
      try {
        this.pyodide.FS.mkdirTree(parent);
        this.pyodide.FS.writeFile(normalized, content);
      } catch {
        // A duplicate or unsupported path should not stop Python execution.
      }
    });

    // Make folder modules win over same-named .py files (for example n/ and n.py).
    // This also lets imports work for folders that do not already contain __init__.py.
    pythonDirs.forEach((dir) => {
      if (dir !== '/home/Hacker') {
        try {
          this.pyodide.FS.writeFile(`${dir}/__init__.py`, '');
        } catch {
          // The marker is only needed when the directory is writable.
        }
      }
    });

    const dirs = JSON.stringify(Array.from(importDirs));
    const topLevelPackages = JSON.stringify(
      Array.from(pythonDirs)
        .filter((dir) => dir.startsWith('/home/Hacker/') && dir !== '/home/Hacker')
        .map((dir) => dir.slice('/home/Hacker/'.length).split('/')[0])
    );
    try {
      this.pyodide.runPython(`
import sys
import importlib
__project_paths = ${dirs}
# Reorder existing paths too: Pyodide's /home/pyodide can already be ahead
# of the simulated home directory and shadow a same-named project package.
sys.path[:] = __project_paths + [p for p in sys.path if p not in __project_paths]
for __name in ${topLevelPackages}:
    sys.modules.pop(__name, None)
importlib.invalidate_caches()
`);
    } catch {
      // The filesystem sync still helps open(); imports can report their own errors.
    }
  }

  private persistLocalFiles(onSaveFile?: (path: string, content: string) => void): void {
    if (!onSaveFile || !this.pyodide?.FS) return;
    const fs = this.pyodide.FS;
    const visit = (directory: string) => {
      let entries: string[];
      try {
        entries = fs.readdir(directory).filter((name: string) => name !== '.' && name !== '..');
      } catch {
        return;
      }
      for (const name of entries) {
        const path = `${directory.replace(/\/$/, '')}/${name}`;
        try {
          const stat = fs.stat(path);
          if (fs.isDir(stat.mode)) {
            if (name !== '__pycache__') visit(path);
          } else if (fs.isFile(stat.mode) && !name.endsWith('.pyc')) {
            if (name === '__init__.py') continue;
            onSaveFile(path, fs.readFile(path, { encoding: 'utf8' }));
          }
        } catch {
          // Ignore transient or unsupported entries and continue persisting others.
        }
      }
    };
    visit('/home/Hacker');
  }

  constructor() {
    this.initPyodide();
  }

  public resetPySparkRepl(): void {
    this.isPySparkSetupDone = false;
  }

  public async runPythonReplLine(
    line: string,
    localFiles?: Map<string, string>,
    onSaveFile?: (path: string, content: string) => void
  ): Promise<PythonExecutionResult> {
    await this.initPyodide();
    if (!this.pyodide) {
      return { stdout: '', stderr: 'Python REPL could not start because the Pyodide runtime is unavailable.', exitCode: 1 };
    }

    const logs: string[] = [];
    const errors: string[] = [];
    try {
      this.pyodide.setStdout({ batched: (str: string) => logs.push(str) });
      this.pyodide.setStderr({ batched: (str: string) => errors.push(str) });
      this.syncLocalFiles(localFiles);
      const result = this.pyodide.runPython(line);
      const stdout = logs.join('\n') || (result === undefined || result === null ? '' : String(result));
      this.persistLocalFiles(onSaveFile);
      return { stdout, stderr: errors.join('\n'), exitCode: 0 };
    } catch (err: any) {
      return { stdout: logs.join('\n'), stderr: err.message || String(err), exitCode: 1 };
    }
  }

  public async runPySparkReplLine(
    line: string,
    localFiles?: Map<string, string>,
    onSaveFile?: (path: string, content: string) => void
  ): Promise<PythonExecutionResult> {
    await this.initPyodide();

    if (this.pyodide) {
      const logs: string[] = [];
      const errors: string[] = [];

      try {
        this.pyodide.setStdout({
          batched: (str: string) => logs.push(str)
        });
        this.pyodide.setStderr({
          batched: (str: string) => errors.push(str)
        });

        this.syncLocalFiles(localFiles);

        if (!this.isPySparkSetupDone) {
          this.pyodide.runPython(PYSPARK_PYTHON_SETUP);
          this.pyodide.runPython(`
from pyspark.sql import SparkSession
import pyspark.sql.functions as F
from pyspark.sql.types import *

spark = SparkSession.builder.appName("PySparkShell").getOrCreate()
sc = spark.sparkContext
`);
          this.isPySparkSetupDone = true;
        }

        const result = this.pyodide.runPython(line);
        let finalStdout = logs.join('\n');
        if (result !== undefined && result !== null && !logs.length) {
          finalStdout = String(result);
        }

        this.persistLocalFiles(onSaveFile);

        return {
          stdout: finalStdout,
          stderr: errors.join('\n'),
          exitCode: 0
        };
      } catch (err: any) {
        return {
          stdout: logs.join('\n'),
          stderr: err.message || String(err),
          exitCode: 1
        };
      }
    }

    return {
      stdout: '',
      stderr: 'PySpark REPL could not start because the Pyodide Python runtime is unavailable.',
      exitCode: 1
    };
  }

  public async initPyodide(): Promise<void> {
    if (typeof window === 'undefined') return;
    if ((window as any).pyodide) {
      this.pyodide = (window as any).pyodide;
      return;
    }

    if (this.pyodideInitPromise) {
      await this.pyodideInitPromise;
      return;
    }
    this.pyodideInitPromise = (async () => {
      try {
        if (!(window as any).loadPyodide) {
          const script = document.createElement('script');
          script.src = './pyodide/pyodide.js';
          script.async = true;
          document.head.appendChild(script);
          await new Promise((resolve) => {
            script.onload = resolve;
            script.onerror = resolve;
          });
        }

        if ((window as any).loadPyodide) {
          this.pyodide = await (window as any).loadPyodide({
            indexURL: './pyodide/'
          });
          (window as any).pyodide = this.pyodide;
        }
      } catch {
        this.pyodide = null;
      }
    })();
    await this.pyodideInitPromise;
    this.pyodideInitPromise = null;
  }

  public runSync(
    code: string,
    inputs: string[] = [],
    localFiles?: Map<string, string>,
    onSaveFile?: (path: string, content: string) => void
  ): PythonExecutionResult | null {
    if (!this.pyodide) return null;

    const logs: string[] = [];
    const errors: string[] = [];
    let inputIndex = 0;

    const customInput = (promptMsg: string = ''): string => {
      if (promptMsg) logs.push(promptMsg);
      if (inputIndex < inputs.length) {
        return inputs[inputIndex++];
      }
      return '';
    };

    try {
      this.pyodide.setStdout({
        batched: (str: string) => logs.push(str)
      });
      this.pyodide.setStderr({
        batched: (str: string) => errors.push(str)
      });

      this.syncLocalFiles(localFiles);

      (window as any).__pyodide_input_handler = customInput;
      this.pyodide.runPython(`
import sys
import os
import js

if "." not in sys.path:
    sys.path.insert(0, ".")
if "/home/Hacker" not in sys.path:
    sys.path.insert(0, "/home/Hacker")

def __custom_input__(prompt=""):
    return js.__pyodide_input_handler(prompt)

import builtins
builtins.input = __custom_input__
`);

      this.pyodide.runPython(PYSPARK_PYTHON_SETUP);

      const result = this.pyodide.runPython(code);
      let finalStdout = logs.join('\n');
      if (result !== undefined && result !== null && !logs.length) {
        finalStdout = String(result);
      }

      this.persistLocalFiles(onSaveFile);

      return {
        stdout: finalStdout,
        stderr: errors.join('\n'),
        exitCode: 0
      };
    } catch (err: any) {
      return {
        stdout: logs.join('\n'),
        stderr: err.message || String(err),
        exitCode: 1
      };
    }
  }

  public fallbackExecuteSync(
    code: string,
    inputs: string[] = [],
    localFiles?: Map<string, string>,
    onSaveFile?: (path: string, content: string) => void
  ): PythonExecutionResult {
    let inputIdx = 0;
    const inputFn = (_promptMsg: string): string => {
      if (inputIdx < inputs.length) return inputs[inputIdx++];
      return '';
    };
    return this.fallbackExecute(code, inputFn, localFiles, onSaveFile);
  }

  public fallbackExecute(
    code: string,
    inputFn: (prompt: string) => string,
    localFiles?: Map<string, string>,
    onSaveFile?: (path: string, content: string) => void
  ): PythonExecutionResult {
    const stdout: string[] = [];
    const stderr: string[] = [];

    try {
      const jsCode = transpilePythonToJS(code);

      const pyPrint = (...args: any[]) => {
        const line = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        stdout.push(line);
      };

      const pyInput = (promptStr: string = ''): string => {
        return inputFn(promptStr);
      };

      const pyOpen = (path: string, mode: string = 'r') => {
        const resolvedPath = path.startsWith('/') ? path : `/home/Hacker/${path}`;
        const basename = path.split('/').pop() || path;

        if (mode.includes('w') || mode.includes('a')) {
          let fileData = mode.includes('a') ? (localFiles?.get(resolvedPath) || localFiles?.get(basename) || '') : '';
          return {
            write: (str: string) => {
              fileData += String(str);
              if (onSaveFile) onSaveFile(basename, fileData);
            },
            writelines: (lines: string[]) => {
              fileData += lines.join('');
              if (onSaveFile) onSaveFile(basename, fileData);
            },
            read: () => fileData,
            close: () => {},
            __enter__: function() { return this; },
            __exit__: function() {}
          };
        } else {
          const content = localFiles?.get(resolvedPath) ?? localFiles?.get(basename) ?? '';
          return {
            read: () => content,
            readline: () => content.split('\n')[0] || '',
            readlines: () => content.split('\n'),
            write: () => {},
            close: () => {},
            __enter__: function() { return this; },
            __exit__: function() {}
          };
        }
      };

      const pyImport = (moduleName: string) => {
        const modFile = `${moduleName}.py`;
        const content = localFiles?.get(`/home/Hacker/${modFile}`) || localFiles?.get(modFile);
        if (!content) {
          throw new Error(`No module named '${moduleName}'`);
        }
        const modSandbox: any = {
          Math, JSON, parseInt, parseFloat, String, Number, Array, Object,
          True: true, False: false, None: null
        };
        const modJs = transpilePythonToJS(content);
        const fn = new Function(...Object.keys(modSandbox), modJs);
        fn(...Object.values(modSandbox));
        return modSandbox;
      };

      const sandbox = {
        __py_print__: pyPrint,
        __py_input__: pyInput,
        __py_open__: pyOpen,
        __py_import__: pyImport,
        Math,
        JSON,
        parseInt,
        parseFloat,
        String,
        Number,
        Array,
        Object,
        True: true,
        False: false,
        None: null,
        len: (obj: any) => (obj && obj.length !== undefined ? obj.length : 0),
        range: (start: number, stop?: number, step: number = 1) => {
          if (stop === undefined) {
            stop = start;
            start = 0;
          }
          const arr = [];
          for (let i = start; i < stop; i += step) arr.push(i);
          return arr;
        },
        str: (v: any) => String(v),
        int: (v: any) => parseInt(v, 10) || 0,
        float: (v: any) => parseFloat(v) || 0.0,
        list: (v: any) => Array.from(v || [])
      };

      const fnKeys = Object.keys(sandbox);
      const fnVals = Object.values(sandbox);

      const fn = new Function(...fnKeys, jsCode);
      fn(...fnVals);

      return {
        stdout: stdout.join('\n'),
        stderr: stderr.join('\n'),
        exitCode: 0
      };
    } catch (err: any) {
      return {
        stdout: stdout.join('\n'),
        stderr: `Python SyntaxError / RuntimeError: ${err.message}`,
        exitCode: 1
      };
    }
  }
}
