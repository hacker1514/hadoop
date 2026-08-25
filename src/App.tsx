import React, { useState } from 'react';
import { FullTerminalView } from './ui/FullTerminalView';
import { SimulatorBackend } from './core/backend/hadoopBackend';

export const App: React.FC = () => {
  const [backend] = useState(() => new SimulatorBackend(3, 2));

  return (
    <div className="w-screen h-screen bg-[#09090b] text-slate-100 overflow-hidden font-mono">
      <FullTerminalView backend={backend} />
    </div>
  );
};

export default App;
