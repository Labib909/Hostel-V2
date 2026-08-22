// Minimal service worker — just enough to make the site installable as an app.
// It does NOT cache Firebase/Firestore data, so students always see live,
// up-to-date information. It only caches a few static files so the app shell
// (styles, icons) loads instantly and offers a basic offline fallback.

const CACHE_NAME = 'hostel-portal-shell-v1';
const SHELL_FILES = [
  'style.css',
  'public.css',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never touch Firebase/Google API calls — always go straight to the network.
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('firebaseio.com') || url.hostname.includes('gstatic.com')) {
    return;
  }

  // For our own static shell files: try cache first, fall back to network.
  if (SHELL_FILES.some((f) => url.pathname.endsWith(f))) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
    return;
  }

  // For everything else (pages, etc.): try the network first so content
  // stays fresh, only falling back to cache if genuinely offline.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
