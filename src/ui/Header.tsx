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
    <header className="bg-black border-b border-cyan-500/30 px-3 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 shadow-md">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-cyan-500 text-black font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-base sm:text-lg tracking-wider">
            HADOOP
          </div>
          <span className="text-yellow-400 font-bold text-sm sm:text-lg hidden xs:inline">Practice Laboratory</span>
        </div>
        <span className="bg-black text-cyan-400 border border-cyan-500/50 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
          <span className="hidden md:inline">MODE A — </span>SIMULATED
        </span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-6">
        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-green-500/40 text-xs">
          <Activity className="w-3.5 h-3.5 text-green-400 shrink-0" />
          <span className="text-[10px] sm:text-xs text-yellow-400 font-bold hidden sm:inline">Health:</span>
          <span className={`text-xs sm:text-sm font-bold ${health.score >= 90 ? 'text-green-400' : health.score >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
            {health.score}%
          </span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2 bg-black px-2 py-1 sm:px-3 sm:py-1 rounded-lg border border-cyan-500/40">
          <span className="text-[10px] sm:text-xs font-mono text-yellow-400 font-bold mr-1 sm:mr-2">
            T+{(virtualTime / 1000).toFixed(1)}s
          </span>
          <button
            onClick={onTogglePlay}
            className="p-1 sm:p-1.5 rounded hover:bg-cyan-950 text-cyan-400 transition touch-manipulation"
            title={isEngineRunning ? 'Pause Engine' : 'Play Engine'}
          >
            {isEngineRunning ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />}
          </button>
          <button
            onClick={onStepEvent}
            className="p-1 sm:p-1.5 rounded hover:bg-cyan-950 text-cyan-400 transition touch-manipulation"
            title="Step 1 Event"
          >
            <FastForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          </button>
          <button
            onClick={onReset}
            className="p-1 sm:p-1.5 rounded hover:bg-red-950 text-red-400 transition touch-manipulation"
            title="Reset Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
          </button>
          <span className="text-[9px] sm:text-[10px] font-bold text-cyan-400 bg-black border border-cyan-500/50 px-1 py-0.2 rounded">
            {speed}x
          </span>
        </div>
      </div>
    </header>
  );
};
