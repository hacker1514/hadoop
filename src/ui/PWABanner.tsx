import React, { useState, useEffect } from 'react';
import { Download, X, CheckCircle2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWABanner: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(
    (window as any).deferredPWAInstallPrompt || null
  );
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [installStatus, setInstallStatus] = useState<'idle' | 'installing' | 'done'>('idle');

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as any).standalone === true;

    if (isStandalone) {
      setShowInstallBanner(false);
      return;
    }

    if ((window as any).deferredPWAInstallPrompt) {
      setInstallPrompt((window as any).deferredPWAInstallPrompt);
      setShowInstallBanner(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      (window as any).deferredPWAInstallPrompt = e;
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    const handlePromptAvailable = () => {
      if ((window as any).deferredPWAInstallPrompt) {
        setInstallPrompt((window as any).deferredPWAInstallPrompt);
        setShowInstallBanner(true);
      }
    };

    const handleAppInstalled = () => {
      setInstallStatus('done');
      setShowInstallBanner(false);
      (window as any).deferredPWAInstallPrompt = null;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('pwa-prompt-available', handlePromptAvailable);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('pwa-prompt-available', handlePromptAvailable);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const promptEvent = installPrompt || (window as any).deferredPWAInstallPrompt;

    if (promptEvent) {
      setInstallStatus('installing');
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          setInstallStatus('done');
          (window as any).deferredPWAInstallPrompt = null;
          setTimeout(() => {
            setShowInstallBanner(false);
          }, 1500);
        } else {
          setInstallStatus('idle');
        }
      } catch (err) {
        setInstallStatus('idle');
      }
    }
  };

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowInstallBanner(false);
  };

  if (!showInstallBanner) return null;

  return (
    <div
      className="fixed bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-50 flex items-center justify-between gap-3 bg-black border border-cyan-500 text-white px-3.5 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/20 w-auto sm:max-w-xs animate-slide-up select-none"
      style={{ animation: 'slideUp 0.3s ease-out' }}
    >
      <div className="shrink-0 w-8 h-8 bg-black border border-cyan-500/50 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="./logo.svg"
          alt="Hadoop"
          className="w-6 h-6 object-contain"
          onError={(ev) => {
            (ev.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-black text-cyan-400 tracking-wide truncate">Install Hadoop App</p>
      </div>

      {installStatus === 'done' ? (
        <div className="flex items-center gap-1 text-green-400 text-xs font-bold shrink-0">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          Installed
        </div>
      ) : (
        <button
          type="button"
          onClick={handleInstall}
          disabled={installStatus === 'installing'}
          className="shrink-0 flex items-center gap-1.5 bg-black hover:bg-cyan-950 border border-cyan-400 text-cyan-400 hover:text-cyan-300 disabled:opacity-60 text-xs font-black px-3.5 py-2 rounded-lg transition-colors min-h-[36px] touch-manipulation cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-cyan-400" />
          {installStatus === 'installing' ? 'Installing…' : 'Install'}
        </button>
      )}

      <button
        type="button"
        onClick={handleDismiss}
        className="shrink-0 text-red-500 hover:text-red-400 transition-colors ml-0.5 p-1 touch-manipulation cursor-pointer"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
