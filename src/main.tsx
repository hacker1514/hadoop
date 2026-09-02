import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  (window as any).deferredPWAInstallPrompt = e;
  window.dispatchEvent(new CustomEvent('pwa-prompt-available'));
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js', { scope: './' })
      .then((registration) => {
        setInterval(() => {
          registration.update().catch(() => {});
        }, 120_000);
      })
      .catch((err) => {
        console.warn('[PWA] ServiceWorker registration error:', err);
      });
  });
}
