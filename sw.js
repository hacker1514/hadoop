const CACHE_NAME = 'hadoop-v8';
const OFFLINE_PAGE = './index.html';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        PRECACHE_ASSETS.map((url) => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (cacheNames) => {
      await Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(cacheFirstStrategy(request));
});

async function cacheFirstStrategy(request) {
  const cached = await caches.match(request, { ignoreSearch: false });
  if (cached) {
    refreshCache(request);
    return cached;
  }

  try {
    const networkResponse = await fetch(request.clone());
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (err) {
    const fallback = await caches.match(OFFLINE_PAGE);
    if (fallback) return fallback;

    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hadoop Lab — Offline</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #09090b; color: #e2e8f0; font-family: 'Courier New', monospace;
           display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .container { text-align: center; padding: 2rem; }
    .logo { font-size: 3rem; font-weight: 900; color: #0ea5e9; letter-spacing: 0.2em; margin-bottom: 1rem; }
    .status { color: #f59e0b; font-size: 1.1rem; margin-bottom: 0.5rem; }
    .hint { color: #64748b; font-size: 0.875rem; }
    .pulse { animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">HADOOP</div>
    <div class="status pulse">● Offline — No Connection</div>
    <p class="hint">The app is loading from cache.<br/>Please wait or refresh when online.</p>
  </div>
</body>
</html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }
    );
  }
}

async function refreshCache(request) {
  try {
    const networkResponse = await fetch(request.clone());
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
  } catch {
  }
}

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
