const CACHE_NAME = 'silwey-v2';
const assets = [
  "./",
  "./index.html",
  "https://cdn.tailwindcss.com"
];

// Instalar el Service Worker y cachear archivos
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder desde el caché si no hay internet
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
