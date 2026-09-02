import React, { useState, useEffect } from 'react';
import { FullTerminalView } from './ui/FullTerminalView';
import { SimulatorBackend } from './core/backend/hadoopBackend';
import { PWABanner } from './ui/PWABanner';

export const App: React.FC = () => {
  const [backend] = useState(() => new SimulatorBackend(3, 2));

  useEffect(() => {
    backend.initFromDB();
  }, [backend]);

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden font-mono">
      <FullTerminalView backend={backend} />
      <PWABanner />
    </div>
  );
};

export default App;
