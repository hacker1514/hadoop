import React, { useState, useEffect, Component, ReactNode } from 'react';
import { FullTerminalView } from './ui/FullTerminalView';
import { SimulatorBackend } from './core/backend/hadoopBackend';
import { PWABanner } from './ui/PWABanner';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('[App] Error boundary caught exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen bg-black text-white p-6 font-mono flex flex-col justify-center items-center text-center">
          <h1 className="text-yellow-400 font-bold text-xl mb-3">Hadoop Simulation Engine Active</h1>
          <p className="text-red-400 font-mono text-sm max-w-md mb-4">{this.state.error?.message || 'An unexpected error occurred.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded text-sm cursor-pointer"
          >
            Restart Terminal
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const [backend] = useState(() => new SimulatorBackend(3, 2));

  useEffect(() => {
    try {
      backend.initFromDB().catch(() => {});
    } catch {}
  }, [backend]);

  return (
    <ErrorBoundary>
      <div className="w-screen h-screen bg-black text-white overflow-hidden font-mono">
        <FullTerminalView backend={backend} />
        <PWABanner />
      </div>
    </ErrorBoundary>
  );
};

export default App;
