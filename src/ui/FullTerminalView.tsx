import React, { useState, useRef, useEffect } from 'react';
import { HadoopBackend } from '../core/backend/hadoopBackend';
import { getAutocompletions } from '../shell/terminal/autocomplete';
import { KSQLEngine } from '../ecosystem/ksql/ksqlEngine';

interface FullTerminalViewProps {
  backend: HadoopBackend;
}

interface HistoryLine {
  id: string;
  type: 'banner' | 'prompt' | 'ksql_prompt' | 'python_prompt' | 'pyspark_prompt' | 'output' | 'error' | 'input_prompt';
  workingDir?: string;
  command?: string;
  content: string;
}

export const FullTerminalView: React.FC<FullTerminalViewProps> = ({ backend }) => {
  const [currentDir, setCurrentDir] = useState<string>('~');
  const [input, setInput] = useState<string>('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistoryList, setCommandHistoryList] = useState<string[]>([]);
  const [ghostSuggestion, setGhostSuggestion] = useState<string>('');

  const [isVimMode, setIsVimMode] = useState<boolean>(false);
  const [vimFileName, setVimFileName] = useState<string>('');
  const [vimContent, setVimContent] = useState<string>('');
  const [vimSubMode, setVimSubMode] = useState<'INSERT' | 'COMMAND'>('INSERT');
  const [vimCommandInput, setVimCommandInput] = useState<string>('');

  // Interactive Modes State
  const [isKsqlMode, setIsKsqlMode] = useState<boolean>(false);
  const [isPythonMode, setIsPythonMode] = useState<boolean>(false);
  const [isPysparkMode, setIsPysparkMode] = useState<boolean>(false);
  const ksqlEngineRef = useRef<KSQLEngine>(new KSQLEngine());

  // Interactive script input state
  const [pendingScriptCmd, setPendingScriptCmd] = useState<string | null>(null);
  const [inputPromptText, setInputPromptText] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const vimTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [lines, setLines] = useState<HistoryLine[]>([
    {
      id: 'init_banner',
      type: 'banner',
      content: ''
    }
  ]);

  useEffect(() => {
    try {
      ksqlEngineRef.current.saveLocalFileCallback = (filename, content) => {
        backend.saveLocalFile(filename, content);
      };
      ksqlEngineRef.current.init().catch(() => {});
    } catch {}
  }, [backend]);

  useEffect(() => {
    if (!isVimMode) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      vimTextareaRef.current?.focus();
    }
  }, [lines, isVimMode, inputPromptText, isKsqlMode, isPythonMode, isPysparkMode]);

  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 256)}px`;
  }, [input]);

  const handleContainerClick = () => {
    if (isVimMode) {
      vimTextareaRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);

    if (!inputPromptText && !isKsqlMode && !isPythonMode && !isPysparkMode && val.trim()) {
      const matches = getAutocompletions(val, backend.getNameNode().getNamespace());
      if (matches.length > 0 && matches[0].toLowerCase().startsWith(val.toLowerCase())) {
        setGhostSuggestion(matches[0]);
      } else {
        setGhostSuggestion('');
      }
    } else {
      setGhostSuggestion('');
    }
  };

  const isErrorOutput = (output: string): boolean => {
    const lower = output.toLowerCase();
    return (
      lower.includes('error') ||
      lower.includes('not recognized') ||
      lower.includes('unsupported') ||
      lower.includes('usage:') ||
      lower.includes('no such file') ||
      lower.includes('missing') ||
      lower.startsWith('mkdir:') ||
      lower.startsWith('ls:') ||
      lower.startsWith('cat:') ||
      lower.startsWith('put:') ||
      lower.startsWith('rm:') ||
      lower.startsWith('du:')
    );
  };

  const handleAddDatabaseImport = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.db';

    fileInput.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (evt: any) => {
        try {
          const sqlLib = ksqlEngineRef.current.getSqlLib();
          const targetDb = ksqlEngineRef.current.getDatabase();
          if (!sqlLib || !targetDb) throw new Error('KSQL Engine not initialized');

          const importedDb = new sqlLib.Database(new Uint8Array(evt.target.result));

          // Copy CREATE TABLE statements
          const createStatementsRes = importedDb.exec("SELECT sql FROM sqlite_master WHERE type='table';");
          if (createStatementsRes.length > 0 && createStatementsRes[0].values.length > 0) {
            createStatementsRes[0].values.forEach((row: any[]) => {
              const createSQL = row[0];
              try {
                targetDb.run(createSQL);
              } catch {}
            });
          }

          // Copy data rows
          const tablesRes = importedDb.exec("SELECT name FROM sqlite_master WHERE type='table';");
          if (tablesRes.length > 0 && tablesRes[0].values.length > 0) {
            tablesRes[0].values.forEach((row: any[]) => {
              const tableName = row[0];
              const dataRes = importedDb.exec(`SELECT * FROM ${tableName};`);
              if (dataRes.length > 0) {
                const columns = dataRes[0].columns;
                const valuesList = dataRes[0].values;
                valuesList.forEach((values: any[]) => {
                  const vals = values
                    .map((v) => (typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v === null ? 'NULL' : v))
                    .join(', ');
                  const insertSQL = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${vals});`;
                  try {
                    targetDb.run(insertSQL);
                  } catch {}
                });
              }
            });
          }

          await ksqlEngineRef.current.persistDatabase();

          setLines((prev) => [
            ...prev,
            { id: `ksql_add_${Date.now()}`, type: 'output', content: 'Imported .db file data and schema added successfully.' }
          ]);
        } catch (err: any) {
          setLines((prev) => [
            ...prev,
            { id: `ksql_add_err_${Date.now()}`, type: 'error', content: 'Error importing database: ' + err.message }
          ]);
        }
      };

      reader.readAsArrayBuffer(file);
    };

    fileInput.click();
  };

  const handleRunSQLScriptImport = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.ksql,.sql';

    fileInput.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (evt: any) => {
        const sqlCommands = evt.target.result;
        const res = await ksqlEngineRef.current.executeCommand(sqlCommands);
        setLines((prev) => [
          ...prev,
          {
            id: `ksql_run_${Date.now()}`,
            type: res.isError ? 'error' : 'output',
            content: res.output || 'Commands executed successfully!'
          }
        ]);
      };

      reader.readAsText(file);
    };

    fileInput.click();
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const nextInput = `${input.slice(0, start)}\n${input.slice(end)}`;
      setInput(nextInput);
      setGhostSuggestion('');
      requestAnimationFrame(() => {
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
      });
      return;
    }

    if (e.key === 'Tab' && (isPythonMode || isPysparkMode)) {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const nextInput = `${input.slice(0, start)}    ${input.slice(end)}`;
      setInput(nextInput);
      requestAnimationFrame(() => {
        textarea.selectionStart = start + 4;
        textarea.selectionEnd = start + 4;
      });
      return;
    }

    if ((e.key === 'Tab' || e.key === 'ArrowRight') && ghostSuggestion && !inputPromptText && !isKsqlMode && !isPythonMode && !isPysparkMode) {
      const cursorAtEnd = inputRef.current?.selectionStart === input.length;
      if (e.key === 'Tab' || cursorAtEnd) {
        e.preventDefault();
        setInput(ghostSuggestion);
        setGhostSuggestion('');
      }
    } else if (e.key === 'ArrowUp') {
      const cursor = e.currentTarget.selectionStart;
      if (input.slice(0, cursor).includes('\n')) return;
      e.preventDefault();
      if (commandHistoryList.length > 0) {
        const nextIdx = historyIndex < commandHistoryList.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        const prevCmd = commandHistoryList[commandHistoryList.length - 1 - nextIdx];
        setInput(prevCmd);
        setGhostSuggestion('');
      }
    } else if (e.key === 'ArrowDown') {
      const cursor = e.currentTarget.selectionStart;
      if (input.slice(cursor).includes('\n')) return;
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        const prevCmd = commandHistoryList[commandHistoryList.length - 1 - nextIdx];
        setInput(prevCmd);
        setGhostSuggestion('');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
        setGhostSuggestion('');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();

      if (isKsqlMode) {
        const trimmedKsql = input.trim();
        const lowerKsql = trimmedKsql.toLowerCase();
        setInput('');
        setGhostSuggestion('');

        if (!trimmedKsql) {
          setLines((prev) => [...prev, { id: `ksql_empty_${Date.now()}`, type: 'ksql_prompt', command: '', content: '' }]);
          return;
        }

        setCommandHistoryList((prev) => [...prev, trimmedKsql]);
        setHistoryIndex(-1);

        if (['exit', 'exit()', 'quit', 'quit()', 'exit;'].includes(lowerKsql)) {
          setIsKsqlMode(false);
          setLines((prev) => [
            ...prev,
            { id: `ksql_p_${Date.now()}`, type: 'ksql_prompt', command: trimmedKsql, content: '' },
            { id: `ksql_exit_${Date.now()}`, type: 'output', content: '[KSQL] Exited KSQL shell mode. Returned to Linux shell.' }
          ]);
          return;
        }

        if (lowerKsql === 'clear') {
          setLines([]);
          return;
        }

        if (lowerKsql === 'add') {
          setLines((prev) => [...prev, { id: `ksql_p_${Date.now()}`, type: 'ksql_prompt', command: trimmedKsql, content: '' }]);
          handleAddDatabaseImport();
          return;
        }

        if (lowerKsql === 'run') {
          setLines((prev) => [...prev, { id: `ksql_p_${Date.now()}`, type: 'ksql_prompt', command: trimmedKsql, content: '' }]);
          handleRunSQLScriptImport();
          return;
        }

        const res = await ksqlEngineRef.current.executeCommand(trimmedKsql);
        setLines((prev) => [
          ...prev,
          { id: `ksql_p_${Date.now()}`, type: 'ksql_prompt', command: trimmedKsql, content: '' },
          { id: `ksql_o_${Date.now()}`, type: res.isError ? 'error' : 'output', content: res.output }
        ]);
        return;
      }

      if (isPythonMode) {
        const trimmedPython = input.trim();
        const lowerPython = trimmedPython.toLowerCase();
        setInput('');
        setGhostSuggestion('');

        if (!trimmedPython) {
          setLines((prev) => [...prev, { id: `python_empty_${Date.now()}`, type: 'python_prompt', command: '', content: '' }]);
          return;
        }

        setCommandHistoryList((prev) => [...prev, trimmedPython]);
        setHistoryIndex(-1);

        if (['exit', 'exit()', 'quit', 'quit()'].includes(lowerPython)) {
          setIsPythonMode(false);
          setLines((prev) => [
            ...prev,
            { id: `python_p_${Date.now()}`, type: 'python_prompt', command: trimmedPython, content: '' },
            { id: `python_exit_${Date.now()}`, type: 'output', content: '[Python] Exited Python shell mode. Returned to the terminal.' }
          ]);
          return;
        }

        if (lowerPython === 'clear') {
          setLines([]);
          return;
        }

        const pythonOutput = await backend.executePythonRepl(trimmedPython);
        setLines((prev) => [
          ...prev,
          { id: `python_p_${Date.now()}`, type: 'python_prompt', command: trimmedPython, content: '' },
          ...(pythonOutput ? [{ id: `python_o_${Date.now()}`, type: isErrorOutput(pythonOutput) ? ('error' as const) : ('output' as const), content: pythonOutput }] : [])
        ]);
        return;
      }

      if (isPysparkMode) {
        const trimmedSpark = input.trim();
        const lowerSpark = trimmedSpark.toLowerCase();
        setInput('');
        setGhostSuggestion('');

        if (!trimmedSpark) {
          setLines((prev) => [...prev, { id: `spark_empty_${Date.now()}`, type: 'pyspark_prompt', command: '', content: '' }]);
          return;
        }

        setCommandHistoryList((prev) => [...prev, trimmedSpark]);
        setHistoryIndex(-1);

        if (['exit', 'exit()', 'quit', 'quit()', 'exit;'].includes(lowerSpark)) {
          setIsPysparkMode(false);
          setLines((prev) => [
            ...prev,
            { id: `spark_p_${Date.now()}`, type: 'pyspark_prompt', command: trimmedSpark, content: '' },
            { id: `spark_exit_${Date.now()}`, type: 'output', content: '[PySpark] Exited PySpark shell mode. Returned to Linux shell.' }
          ]);
          return;
        }

        if (lowerSpark === 'clear') {
          setLines([]);
          return;
        }

        const pyOutput = await backend.executePySparkRepl(trimmedSpark);
        setLines((prev) => [
          ...prev,
          { id: `spark_p_${Date.now()}`, type: 'pyspark_prompt', command: trimmedSpark, content: '' },
          ...(pyOutput ? [{ id: `spark_o_${Date.now()}`, type: isErrorOutput(pyOutput) ? ('error' as const) : ('output' as const), content: pyOutput }] : [])
        ]);
        return;
      }

      if (inputPromptText && pendingScriptCmd) {
        const userProvidedVal = input;
        const promptLabel = inputPromptText;
        const baseCmd = pendingScriptCmd;

        setPendingScriptCmd(null);
        setInputPromptText(null);
        setInput('');

        const fullExecCmd = `${baseCmd} ${JSON.stringify(userProvidedVal)}`;
        const output = backend.executeCLI(fullExecCmd);

        if (output.startsWith('__NEED_INPUT__:')) {
          const nextPrompt = output.substring('__NEED_INPUT__:'.length);
          setPendingScriptCmd(fullExecCmd);
          setInputPromptText(nextPrompt);
          setLines((prev) => [
            ...prev,
            { id: `in_resp_${Date.now()}`, type: 'input_prompt', command: userProvidedVal, content: promptLabel }
          ]);
        } else {
          setLines((prev) => [
            ...prev,
            { id: `in_resp_${Date.now()}`, type: 'input_prompt', command: userProvidedVal, content: promptLabel },
            { id: `in_out_${Date.now()}`, type: isErrorOutput(output) ? 'error' : 'output', content: output }
          ]);
        }
        return;
      }

      const trimmed = input.trim();
      if (!trimmed) {
        setLines((prev) => [
          ...prev,
          { id: `empty_${Date.now()}`, type: 'prompt', workingDir: backend.getWorkingDir(), command: '', content: '' }
        ]);
        return;
      }

      if (trimmed.startsWith('vim ') || trimmed.startsWith('vi ')) {
        const fileName = trimmed.split(/\s+/)[1] || 'file.txt';
        const existing = backend.readLocalFile(fileName);
        setVimFileName(fileName);
        setVimContent(existing !== undefined ? existing : '');
        setIsVimMode(true);
        setVimSubMode('INSERT');
        setInput('');
        setGhostSuggestion('');
        return;
      }

      setCommandHistoryList((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      if (trimmed === 'clear') {
        setLines([]);
        setInput('');
        setGhostSuggestion('');
        return;
      }

      const activeDirBefore = backend.getWorkingDir();
      const output = backend.executeCLI(trimmed);
      const activeDirAfter = backend.getWorkingDir();
      setCurrentDir(activeDirAfter);

      if (output === '__LAUNCH_KSQL__') {
        setIsKsqlMode(true);
        await ksqlEngineRef.current.init();
        setLines((prev) => [
          ...prev,
          { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
          {
            id: `ksql_welcome_${Date.now()}`,
            type: 'output',
            content: `KSQL Database Engine Active (SQLite WebAssembly Local Engine)\ntype help, to see all commands\ntype exit or quit to return to Linux shell.`
          }
        ]);
        setInput('');
        setGhostSuggestion('');
        return;
      }

      if (output === '__LAUNCH_PYTHON__') {
        setIsPythonMode(true);
        const startupOutput = await backend.executePythonRepl('pass');
        setLines((prev) => [
          ...prev,
          { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
          {
            id: `python_welcome_${Date.now()}`,
            type: isErrorOutput(startupOutput) ? 'error' : 'output',
            content: `Python WebAssembly interactive shell. Variables persist between commands.\nType exit or quit to return to the terminal.${startupOutput ? `\n${startupOutput}` : ''}`
          }
        ]);
        setInput('');
        setGhostSuggestion('');
        return;
      }

      if (output === '__LAUNCH_PYSPARK__') {
        setIsPysparkMode(true);
        const startupOutput = await backend.executePySparkRepl('pass');
        setLines((prev) => [
          ...prev,
          { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
          {
            id: `pyspark_welcome_${Date.now()}`,
            type: 'output',
            content: `Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\\ \\/ _ \\/ _ \`/ __/  '_/
   /__ / .__/\\_,_/_/ /_/\\_\\   local PySpark-compatible shell
      /_/

Local Pyodide Python REPL with PySpark-compatible APIs.
SparkSession is available as 'spark'; SparkContext as 'sc'.
Type exit or quit to return to the terminal.${startupOutput ? `\n${startupOutput}` : ''}`
          }
        ]);
        setInput('');
        setGhostSuggestion('');
        return;
      }

      if (output.startsWith('__DOWNLOAD_FILE__:')) {
        const targetFilename = output.substring('__DOWNLOAD_FILE__:'.length);
        const fileContent = backend.readLocalFile(targetFilename);

        if (fileContent !== undefined) {
          const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = targetFilename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          setLines((prev) => [
            ...prev,
            { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
            { id: `dl_out_${Date.now()}`, type: 'output', content: `Downloaded "${targetFilename}".` }
          ]);
        } else {
          setLines((prev) => [
            ...prev,
            { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
            { id: `dl_err_${Date.now()}`, type: 'error', content: `Error: File "${targetFilename}" not found.` }
          ]);
        }
        setInput('');
        setGhostSuggestion('');
        return;
      }

      if (output === '__GET_FILE__') {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e: any) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (evt: any) => {
            const content = evt.target.result as string;
            backend.saveLocalFile(file.name, content);
            setLines((prev) => [
              ...prev,
              { id: `get_out_${Date.now()}`, type: 'output', content: `Imported "${file.name}".` }
            ]);
          };
          reader.readAsText(file);
        };

        setLines((prev) => [
          ...prev,
          { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' }
        ]);
        fileInput.click();
        setInput('');
        setGhostSuggestion('');
        return;
      }

      if (output.startsWith('__NEED_INPUT__:')) {
        const promptMsg = output.substring('__NEED_INPUT__:'.length);
        setPendingScriptCmd(trimmed);
        setInputPromptText(promptMsg);
        setLines((prev) => [
          ...prev,
          { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' }
        ]);
        setInput('');
        setGhostSuggestion('');
        return;
      }

      const isErr = isErrorOutput(output);

      setLines((prev) => [
        ...prev,
        { id: `cmd_${Date.now()}`, type: 'prompt', workingDir: activeDirBefore, command: trimmed, content: '' },
        {
          id: `out_${Date.now()}`,
          type: isErr ? 'error' : 'output',
          content: output
        }
      ]);

      setInput('');
      setGhostSuggestion('');
    }
  };

  const handleVimKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setVimSubMode((prev) => {
        const next = prev === 'INSERT' ? 'COMMAND' : 'INSERT';
        if (next === 'INSERT') {
          setTimeout(() => vimTextareaRef.current?.focus(), 10);
        }
        return next;
      });
    }
  };

  const handleVimCommandSubmit = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (trimmed === ':wq' || trimmed === ':x' || trimmed === 'wq') {
      backend.saveLocalFile(vimFileName, vimContent);
      setIsVimMode(false);
      setLines((prev) => [
        ...prev,
        { id: `vim_save_${Date.now()}`, type: 'output', content: `[Vim] "${vimFileName}" saved and written.` }
      ]);
    } else if (trimmed === ':q!' || trimmed === ':q' || trimmed === 'q') {
      setIsVimMode(false);
    } else if (trimmed === ':w' || trimmed === 'w') {
      backend.saveLocalFile(vimFileName, vimContent);
      setVimCommandInput('');
      setVimSubMode('INSERT');
      setTimeout(() => vimTextareaRef.current?.focus(), 10);
    }
  };

  if (isVimMode) {
    return (
      <div className="w-screen h-screen bg-black text-white font-mono text-xs sm:text-sm p-2 sm:p-4 flex flex-col justify-between selection:bg-yellow-400 selection:text-black">
        <div className="bg-black px-2 sm:px-3 py-1 sm:py-1.5 flex justify-between items-center text-[10px] sm:text-xs border-b border-cyan-500/40">
          <span className="text-yellow-400 font-black">VIM - {vimFileName}</span>
          <span className="text-cyan-400 font-bold hidden sm:inline">Press <code className="text-cyan-300 font-bold">ESC</code> to toggle INSERT / COMMAND modes (:wq to save & exit)</span>
        </div>

        <textarea
          ref={vimTextareaRef}
          value={vimContent}
          onChange={(e) => setVimContent(e.target.value)}
          onKeyDown={handleVimKeyDown}
          className="flex-1 w-full bg-black text-green-400 font-mono p-2 sm:p-3 focus:outline-none resize-none leading-relaxed text-xs sm:text-sm"
          autoFocus
          spellCheck={false}
        />

        <div className="bg-black px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs border-t border-cyan-500/40 flex items-center justify-between font-mono">
          {vimSubMode === 'INSERT' ? (
            <span className="text-green-400 font-bold">-- INSERT --</span>
          ) : (
            <div className="flex items-center space-x-2 flex-1">
              <span className="text-yellow-400 font-bold">:</span>
              <input
                type="text"
                value={vimCommandInput}
                onChange={(e) => setVimCommandInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    e.preventDefault();
                    setVimSubMode('INSERT');
                    setVimCommandInput('');
                    setTimeout(() => vimTextareaRef.current?.focus(), 10);
                  } else if (e.key === 'Enter') {
                    e.preventDefault();
                    handleVimCommandSubmit(vimCommandInput);
                  }
                }}
                placeholder="wq to save and exit, q! to quit"
                className="bg-black border-none text-yellow-300 focus:outline-none flex-1 font-mono font-bold text-xs"
                autoFocus
              />
            </div>
          )}
          <span className="text-cyan-400 font-bold">{vimContent.split('\n').length}L, {vimContent.length}C</span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleContainerClick}
      className="w-screen h-screen bg-black text-white font-mono text-xs sm:text-base p-2 sm:p-4 overflow-y-auto flex flex-col justify-between selection:bg-cyan-500 selection:text-black cursor-text leading-relaxed"
    >
      <div className="space-y-2 sm:space-y-3 w-full text-left">
        {lines.map((line) => {
          if (line.type === 'banner') {
            return (
              <div key={line.id} className="font-mono text-[10px] sm:text-sm leading-tight">
                <pre className="whitespace-pre font-mono text-cyan-400 font-bold overflow-x-auto max-w-full">
{`+------------------------+--------------------------------------+
|                        |                `}
<span className="text-yellow-400 font-black">HADOOP</span>
{`                |
|                        |                                      |
+------------------------+--------------------------------------+
|  `}
<span className="text-cyan-400 font-bold">DEVELOPER             </span>
{`|  `}
<span className="text-white font-bold">Niranjan Kumar K                    </span>
{`|
|  `}
<span className="text-cyan-400 font-bold">ENVIRONMENT           </span>
{`|  `}
<span className="text-green-400 font-bold">Hadoop Simulation                   </span>
{`|
|                        |                                      |
+------------------------+--------------------------------------+`}
                </pre>
                <div className="text-green-400 font-bold pt-1.5 sm:pt-2 text-xs sm:text-sm">  ✓  Terminal initialized successfully</div>
              </div>
            );
          }

          if (line.type === 'prompt') {
            return (
              <div key={line.id} className="flex items-start font-mono text-xs sm:text-base whitespace-pre-wrap overflow-x-auto">
                <span className="shrink-0 whitespace-pre">
                  <span className="text-green-400 font-bold">[[ </span>
                  <span className="text-cyan-400 font-bold">K </span>
                  <span className="text-yellow-400 font-bold">: </span>
                  <span className="text-yellow-400 font-bold">{line.workingDir || '~'}</span>
                  <span className="text-green-400 font-bold"> ]] </span>
                  <span className="text-yellow-400 font-bold">: </span>
                  <span className="text-white font-bold">$ </span>
                </span>
                <span className="text-yellow-300 font-semibold whitespace-pre-wrap">{line.command}</span>
              </div>
            );
          }

          if (line.type === 'ksql_prompt') {
            return (
              <div key={line.id} className="flex items-start font-mono text-xs sm:text-base whitespace-pre-wrap overflow-x-auto">
                <span className="text-yellow-400 font-bold shrink-0 whitespace-pre">{'>> '}</span>
                <span className="text-cyan-300 font-semibold whitespace-pre-wrap">{line.command}</span>
              </div>
            );
          }

          if (line.type === 'python_prompt') {
            return (
              <div key={line.id} className="flex items-start font-mono text-xs sm:text-base whitespace-pre-wrap overflow-x-auto">
                <span className="text-green-400 font-bold shrink-0 whitespace-pre">{'>>> '}</span>
                <span className="text-yellow-300 font-semibold whitespace-pre-wrap">{line.command}</span>
              </div>
            );
          }

          if (line.type === 'pyspark_prompt') {
            return (
              <div key={line.id} className="flex items-start font-mono text-xs sm:text-base whitespace-pre-wrap overflow-x-auto">
                <span className="text-green-400 font-bold shrink-0 whitespace-pre">{'>>> '}</span>
                <span className="text-yellow-300 font-semibold whitespace-pre-wrap">{line.command}</span>
              </div>
            );
          }

          if (line.type === 'input_prompt') {
            return (
              <div key={line.id} className="flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto">
                <span className="text-green-400 font-bold shrink-0 whitespace-pre">{line.content}</span>
                <span className="text-yellow-300 font-semibold pl-1">{line.command}</span>
              </div>
            );
          }

          return (
            <pre
              key={line.id}
              className={`whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto ${
                line.type === 'error' ? 'text-red-400 font-bold' : 'text-green-400 font-medium'
              }`}
            >
              {line.content}
            </pre>
          );
        })}

        <div className="font-mono text-xs sm:text-base leading-relaxed">
          <div className="flex items-start whitespace-nowrap relative overflow-x-auto">
            {isKsqlMode ? (
              <span className="text-yellow-400 font-bold shrink-0 whitespace-pre select-none self-start">
                {'>> '}
              </span>
            ) : isPythonMode || isPysparkMode ? (
              <span className="text-green-400 font-bold shrink-0 whitespace-pre select-none self-start">
                {'>>> '}
              </span>
            ) : inputPromptText ? (
              <span className="text-green-400 font-bold shrink-0 whitespace-pre select-none self-start">
                {inputPromptText}
              </span>
            ) : (
              <span className="shrink-0 flex items-center whitespace-pre select-none">
                <span className="text-green-400 font-bold">[[ </span>
                <span className="text-cyan-400 font-bold">K </span>
                <span className="text-yellow-400 font-bold">: </span>
                <span className="text-yellow-400 font-bold">{currentDir}</span>
                <span className="text-green-400 font-bold"> ]] </span>
                <span className="text-yellow-400 font-bold">: </span>
                <span className="text-white font-bold">$ </span>
              </span>
            )}

            <div className="relative flex-1 flex items-start min-w-[120px]">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full max-h-64 resize-none overflow-y-auto bg-black border-none text-yellow-300 focus:outline-none placeholder-cyan-900 font-mono font-semibold pl-0.5 text-xs sm:text-base leading-relaxed z-10 whitespace-pre-wrap"
                autoFocus
                spellCheck={false}
              />
              {!inputPromptText && !isKsqlMode && !isPythonMode && !isPysparkMode && ghostSuggestion && ghostSuggestion.toLowerCase().startsWith(input.toLowerCase()) && (
                <div className="absolute left-0.5 text-cyan-700 font-mono font-semibold pointer-events-none z-0 whitespace-pre text-xs sm:text-base">
                  <span className="invisible">{input}</span>
                  <span>{ghostSuggestion.slice(input.length)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
