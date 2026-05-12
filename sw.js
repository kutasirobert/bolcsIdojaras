// sw.js - Offline mód és gyorsítótárazás
const CACHE_NAME = 'bolcs-idojaras-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './icon.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './background.jpg'
];

// Telepítés: fájlok mentése a cache-be
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Fájlok cache-elése');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Aktiválás: régi cache törlése
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Adatlekérés: A statikusokat cache-ből, de az API-kat SZIGORÚAN csak a webről!
self.addEventListener('fetch', (e) => {
  // Ha a kérés API hívás, azonnal engedjük át a hálózatra, tilos cache-elni!
  if (e.request.url.includes('api.') || e.request.url.includes('7timer.info')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Statikus fájloknál marad a normál cache-first stratégia
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});