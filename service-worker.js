const CACHE_NAME = "ananthjump-v1";
const ASSETS = [
  "/ANANTH-JUMP/",
  "/ANANTH-JUMP/index.html",
  "/ANANTH-JUMP/assets/logo-192.png",
  "/ANANTH-JUMP/assets/logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
