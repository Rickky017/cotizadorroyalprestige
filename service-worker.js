const CACHE_NAME = 'silwey-v1';
const ASSETS = [
  'index.html',
  'https://cdn.tailwindcss.com'
];

// Instalación y cacheo de archivos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Respuesta desde el caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
