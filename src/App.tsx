import React, { useState, useEffect } from 'react';
import { FullTerminalView } from './ui/FullTerminalView';
import { SimulatorBackend } from './core/backend/hadoopBackend';
import { PWABanner } from './ui/PWABanner';

export const App: React.FC = () => {
  const [backend] = useState(() => new SimulatorBackend(3, 2));
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    backend.initFromDB().then(() => setDbReady(true));
  }, [backend]);

  if (!dbReady) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center font-mono select-none">
        <div className="text-center">
          <div className="text-4xl font-black text-cyan-400 tracking-widest mb-3">HADOOP</div>
          <div className="text-yellow-400 text-xs font-bold tracking-wider animate-pulse">Loading saved session…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden font-mono">
      <FullTerminalView backend={backend} />
      <PWABanner />
    </div>
  );
};

export default App;
