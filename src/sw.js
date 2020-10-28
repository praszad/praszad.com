importScripts('./cache-polyfill.js');
const version = '12.0.0';
const cacheName = `praszad-${version}`;
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache
        .addAll([
          './',
          './images/avatar.png',
          './images/praszad_logo.webp',
          './css/main.css',
          './css/all.css',
          './favicon.ico',
        ])
        .then(() => self.skipWaiting());
    })
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.match(event.request, {
          ignoreSearch: true,
        })
      )
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
