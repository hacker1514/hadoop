import React, { useState, useEffect } from 'react';
import { Download, WifiOff, X, CheckCircle2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWABanner: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [installStatus, setInstallStatus] = useState<'idle' | 'installing' | 'done'>('idle');
  const [showOfflineToast, setShowOfflineToast] = useState(false);
  const [showMobileGuide, setShowMobileGuide] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      if (!isStandalone) {
        setInstallPrompt(e as BeforeInstallPromptEvent);
        setShowInstallBanner(true);
      }
    };

    if (!isStandalone) {
      if (isMobile) {
        setShowInstallBanner(true);
      }
    }

    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineToast(false);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineToast(true);
      setTimeout(() => setShowOfflineToast(false), 4000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      setInstallStatus('installing');
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setInstallStatus('done');
        setTimeout(() => {
          setShowInstallBanner(false);
          setInstallPrompt(null);
        }, 1500);
      } else {
        setInstallStatus('idle');
      }
    } else {
      setShowMobileGuide(true);
      setTimeout(() => setShowMobileGuide(false), 6000);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
  };

  return (
    <>
      {showInstallBanner && (
        <div
          className="fixed bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-50 flex items-center justify-between gap-3 bg-black border border-cyan-500 text-white px-3.5 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/20 w-auto sm:max-w-xs animate-slide-up select-none"
          style={{ animation: 'slideUp 0.3s ease-out' }}
        >
          <div className="shrink-0 w-8 h-8 bg-black border border-cyan-500/50 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="./logo.svg" alt="Hadoop" className="w-6 h-6 object-contain" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-cyan-400 tracking-wide truncate">Install Hadoop</p>
          </div>

          {installStatus === 'done' ? (
            <div className="flex items-center gap-1 text-green-400 text-xs font-bold shrink-0">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Installed
            </div>
          ) : (
            <button
              onClick={handleInstall}
              disabled={installStatus === 'installing'}
              className="shrink-0 flex items-center gap-1.5 bg-black hover:bg-cyan-950 border border-cyan-400 text-cyan-400 hover:text-cyan-300 disabled:opacity-60 text-xs font-black px-3.5 py-2 rounded-lg transition-colors min-h-[36px] touch-manipulation"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              {installStatus === 'installing' ? 'Installing…' : 'Install'}
            </button>
          )}

          <button
            onClick={handleDismiss}
            className="shrink-0 text-red-500 hover:text-red-400 transition-colors ml-0.5 p-1 touch-manipulation"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {showMobileGuide && (
        <div className="fixed bottom-16 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-xs z-50 bg-black border border-yellow-500 text-yellow-400 p-3 rounded-xl shadow-2xl text-xs font-bold animate-slide-up">
          <p className="text-cyan-400 font-black mb-1">To Install on Mobile Chrome:</p>
          <p className="text-white text-[11px] font-medium leading-relaxed">
            Tap Chrome Menu (<span className="text-yellow-400 font-bold">⋮</span>) at top-right &rarr; Select <span className="text-green-400 font-bold">"Add to Home screen"</span> or <span className="text-green-400 font-bold">"Install app"</span>.
          </p>
        </div>
      )}

      {showOfflineToast && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full shadow-lg text-xs font-bold backdrop-blur-sm max-w-[90vw] truncate">
          <WifiOff className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
          Offline Mode
        </div>
      )}

      {!isOnline && (
        <div className="fixed top-2 right-2 z-40 flex items-center gap-1.5 bg-black border border-red-500 text-red-400 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          OFFLINE
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};
