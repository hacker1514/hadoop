const CACHE_NAME = 'hadoop-offline-v3';
const APP_SHELL = './index.html';

const STATIC_ASSETS = [
  './',
  APP_SHELL,
  './manifest.json',
  './logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './sql/sql-wasm.js',
  './sql/sql-wasm.wasm',
  './pyodide/pyodide.js',
  './pyodide/pyodide.asm.wasm',
  './pyodide/python_stdlib.zip',
  './pyodide/pyodide-lock.json'
];

async function cacheAppShell(cache) {
  // Vite puts content hashes in bundle names, so discover the current entry
  // points from the built HTML instead of relying on names from a past build.
  const response = await fetch(APP_SHELL, { cache: 'reload' });
  if (!response.ok) throw new Error(`Unable to precache app shell (${response.status})`);

  const html = await response.clone().text();
  await cache.put(APP_SHELL, response);

  const assets = new Set(STATIC_ASSETS);
  const references = html.matchAll(/(?:src|href)=["']([^"']+)["']/g);
  for (const [, reference] of references) {
    if (reference.startsWith('./') && !reference.startsWith('./#')) {
      assets.add(reference);
    }
  }

  // Cache each item independently: optional icons or runtime files should not
  // prevent the HTML and main JavaScript/CSS bundles from being installed.
  await Promise.all([...assets].map(async (asset) => {
    try {
      const assetResponse = await fetch(asset, { cache: 'reload' });
      if (assetResponse.ok && assetResponse.type !== 'opaque') {
        await cache.put(asset, assetResponse);
      }
    } catch {
      // A missing optional asset is handled by normal network/cache fallback.
    }
  }));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cacheAppShell).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith('hadoop-offline-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(APP_SHELL)))
    );
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      // Return a real offline miss for assets instead of HTML with the wrong
      // content type, which can make scripts and styles fail noisily.
      return new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
