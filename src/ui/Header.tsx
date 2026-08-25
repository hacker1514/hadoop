import React from 'react';
import { Play, Pause, FastForward, RotateCcw, Activity, ShieldCheck } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface HeaderProps {
  backend: HadoopBackend;
  virtualTime: number;
  isEngineRunning: boolean;
  onTogglePlay: () => void;
  onStepEvent: () => void;
  onReset: () => void;
  activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({
  backend,
  virtualTime,
  isEngineRunning,
  onTogglePlay,
  onStepEvent,
  onReset,
}) => {
  const health = backend.getObservability().calculateHealthScore();
  const speed = backend.getEngine().getClock().getSpeed();

  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between shadow-md">
      {/* Brand Logo & Mode Badge */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-sky-600 text-white font-black px-2.5 py-1 rounded text-lg tracking-wider">
            HADOOP
          </div>
          <span className="text-slate-200 font-bold text-lg hidden sm:inline">Practice Laboratory</span>
        </div>
        <span className="bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> MODE A — SIMULATED HADOOP
        </span>
      </div>

      {/* Cluster Health & Simulation Time Controls */}
      <div className="flex items-center space-x-6">
        {/* Health Score */}
        <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="text-xs text-slate-400">Cluster Health:</span>
          <span className={`text-sm font-bold ${health.score >= 90 ? 'text-emerald-400' : health.score >= 70 ? 'text-amber-400' : 'text-red-400'}`}>
            {health.score}% ({health.status})
          </span>
        </div>

        {/* Time Machine Playback Controls */}
        <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
          <span className="text-xs font-mono text-slate-400 mr-2">
            T+{(virtualTime / 1000).toFixed(1)}s
          </span>
          <button
            onClick={onTogglePlay}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-200 transition"
            title={isEngineRunning ? 'Pause Engine' : 'Play Engine'}
          >
            {isEngineRunning ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
          </button>
          <button
            onClick={onStepEvent}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-200 transition"
            title="Step 1 Event"
          >
            <FastForward className="w-4 h-4 text-sky-400" />
          </button>
          <button
            onClick={onReset}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-200 transition"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
          </button>
          <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
            {speed}x
          </span>
        </div>
      </div>
    </header>
  );
};
