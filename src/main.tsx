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

if ('serviceWorker' in navigator && import.meta.env.DEV) {
  // A production service worker can otherwise keep Vite's development page
  // on a cached bundle from an earlier build on the same origin and port.
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.filter((key) => key.startsWith('hadoop-offline-')).forEach((key) => caches.delete(key));
    });
  }
} else if ('serviceWorker' in navigator) {
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
