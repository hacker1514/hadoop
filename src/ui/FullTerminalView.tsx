import React, { useState, useRef, useEffect } from 'react';
import { HadoopBackend } from '../core/backend/hadoopBackend';
import { getAutocompletions } from '../shell/terminal/autocomplete';

interface FullTerminalViewProps {
  backend: HadoopBackend;
}

interface HistoryLine {
  id: string;
  type: 'banner' | 'prompt' | 'output' | 'error';
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

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const vimTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [lines, setLines] = useState<HistoryLine[]>([
    {
      id: 'init_banner',
      type: 'banner',
      content: ''
    }
  ]);

  useEffect(() => {
    if (!isVimMode) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      vimTextareaRef.current?.focus();
    }
  }, [lines, isVimMode]);

  const handleContainerClick = () => {
    if (isVimMode) {
      vimTextareaRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    if (val.trim()) {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Tab' || e.key === 'ArrowRight') && ghostSuggestion) {
      const cursorAtEnd = inputRef.current?.selectionStart === input.length;
      if (e.key === 'Tab' || cursorAtEnd) {
        e.preventDefault();
        setInput(ghostSuggestion);
        setGhostSuggestion('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistoryList.length > 0) {
        const nextIdx = historyIndex < commandHistoryList.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        const prevCmd = commandHistoryList[commandHistoryList.length - 1 - nextIdx];
        setInput(prevCmd);
        setGhostSuggestion('');
      }
    } else if (e.key === 'ArrowDown') {
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
      setVimSubMode('COMMAND');
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
    }
  };

  if (isVimMode) {
    return (
      <div className="w-screen h-screen bg-black text-white font-mono text-xs sm:text-sm p-2 sm:p-4 flex flex-col justify-between selection:bg-yellow-400 selection:text-black">
        <div className="bg-black px-2 sm:px-3 py-1 sm:py-1.5 flex justify-between items-center text-[10px] sm:text-xs border-b border-cyan-500/40">
          <span className="text-yellow-400 font-black">VIM - {vimFileName}</span>
          <span className="text-cyan-400 font-bold hidden sm:inline">Press <code className="text-cyan-300 font-bold">ESC</code> then type <code className="text-green-400 font-bold">:wq</code> to save & exit</span>
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
                  if (e.key === 'Enter') {
                    handleVimCommandSubmit(vimCommandInput);
                  }
                }}
                placeholder="wq to save and exit, q! to quit"
                className="bg-transparent text-yellow-300 focus:outline-none flex-1 font-mono font-bold text-xs"
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
              <div key={line.id} className="flex items-center font-mono text-xs sm:text-base whitespace-nowrap overflow-x-auto">
                <span className="shrink-0 whitespace-pre">
                  <span className="text-green-400 font-bold">[[ </span>
                  <span className="text-cyan-400 font-bold">K </span>
                  <span className="text-yellow-400 font-bold">: </span>
                  <span className="text-yellow-400 font-bold">{line.workingDir || '~'}</span>
                  <span className="text-green-400 font-bold"> ]] </span>
                  <span className="text-yellow-400 font-bold">: </span>
                  <span className="text-white font-bold">$ </span>
                </span>
                <span className="text-yellow-300 font-semibold">{line.command}</span>
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

        <div className="font-mono text-xs sm:text-base">
          <div className="flex items-center whitespace-nowrap relative overflow-x-auto">
            <span className="shrink-0 flex items-center whitespace-pre select-none">
              <span className="text-green-400 font-bold">[[ </span>
              <span className="text-cyan-400 font-bold">K </span>
              <span className="text-yellow-400 font-bold">: </span>
              <span className="text-yellow-400 font-bold">{currentDir}</span>
              <span className="text-green-400 font-bold"> ]] </span>
              <span className="text-yellow-400 font-bold">: </span>
              <span className="text-white font-bold">$ </span>
            </span>

            <div className="relative flex-1 flex items-center min-w-[120px]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-yellow-300 focus:outline-none placeholder-cyan-900 font-mono font-semibold pl-0.5 text-xs sm:text-base z-10"
                autoFocus
                spellCheck={false}
              />
              {ghostSuggestion && ghostSuggestion.toLowerCase().startsWith(input.toLowerCase()) && (
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
