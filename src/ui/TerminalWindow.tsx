import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';
import { getAutocompletions } from '../shell/terminal/autocomplete';

interface TerminalWindowProps {
  backend: HadoopBackend;
}

interface CommandHistoryItem {
  command: string;
  output: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ backend }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'hdfs dfsadmin -report',
      output: backend.executeCLI('hdfs dfsadmin -report')
    }
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    if (val.trim()) {
      const matches = getAutocompletions(val, backend.getNameNode().getNamespace());
      setSuggestions(matches.slice(0, 4));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;

      const output = backend.executeCLI(input);
      if (output === '__CLEAR__') {
        setHistory([]);
      } else {
        setHistory((prev) => [...prev, { command: input, output }]);
      }
      setInput('');
      setSuggestions([]);
    }
  };

  return (
    <div className="flex-1 bg-slate-950 flex flex-col font-mono text-sm overflow-hidden border border-slate-800 rounded-xl shadow-2xl m-4">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-slate-300 font-semibold">
          <TerminalIcon className="w-4 h-4 text-sky-400" />
          <span>Hadoop CLI Terminal — hdfs / hadoop / yarn</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Output Console */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-slate-200">
        <div className="text-slate-500 text-xs border-b border-slate-800 pb-2">
          Welcome to the Browser-Based Hadoop Practice Laboratory Terminal.
          <br />
          Type <span className="text-sky-400">help</span> for available commands or press <span className="text-sky-400">TAB</span> for command autocompletion.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-sky-400 font-semibold">
              <span>$</span>
              <span className="text-slate-100">{item.command}</span>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs pl-4 border-l-2 border-slate-800">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Autocomplete Suggestion Bar */}
      {suggestions.length > 0 && (
        <div className="bg-slate-900/90 border-t border-slate-800 px-4 py-1.5 flex items-center space-x-3 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Suggestions:</span>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setInput(s);
                setSuggestions([]);
              }}
              className="bg-slate-800 hover:bg-slate-700 text-sky-300 px-2 py-0.5 rounded"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input Command Line */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-2.5 flex items-center space-x-2">
        <span className="text-sky-400 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="hdfs dfs -ls /input"
          className="flex-1 bg-transparent text-slate-100 focus:outline-none placeholder-slate-600 font-mono"
          autoFocus
        />
        <CornerDownLeft className="w-4 h-4 text-slate-600" />
      </div>
    </div>
  );
};
