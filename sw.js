const CACHE_NAME = 'hostel-portal-shell-v2';

const SHELL_FILES = [
'/',
'/index.html',
'/login.html',
'/services.html',
'/gallery.html',
'/public.css',
'/manifest.json',
'/icons/icon-192.png',
'/icons/icon-512.png',
'/icons/apple-touch-icon.png'
];

/* =========================================================
INSTALL
========================================================= */

self.addEventListener('install', (event) => {

event.waitUntil(

```
caches.open(CACHE_NAME)
  .then((cache) => cache.addAll(SHELL_FILES))
  .then(() => self.skipWaiting())
```

);

});

/* =========================================================
ACTIVATE
========================================================= */

self.addEventListener('activate', (event) => {

event.waitUntil(

```
caches.keys()
  .then((cacheNames) => {

    return Promise.all(

      cacheNames
        .filter((name) => name !== CACHE_NAME)
        .map((name) => caches.delete(name))

    );

  })
  .then(() => self.clients.claim())
```

);

});

/* =========================================================
FETCH
========================================================= */

self.addEventListener('fetch', (event) => {

const request = event.request;
const url = new URL(request.url);

/*

* Only handle GET requests.
  */
  if (request.method !== 'GET') {
  return;
  }

/*

* Never intercept Firebase / Google API requests.
* These must always use the network so that
* student data remains live.
  */
  if (
  url.hostname.includes('googleapis.com') ||
  url.hostname.includes('firebaseio.com') ||
  url.hostname.includes('gstatic.com') ||
  url.hostname.includes('google.com')
  ) {
  return;
  }

/*

* Only control requests belonging to this website.
  */
  if (url.origin !== self.location.origin) {
  return;
  }

/*

* Static files:
* Cache first, then network.
  */
  const isShellFile = SHELL_FILES.includes(url.pathname);

if (isShellFile) {

```
event.respondWith(

  caches.match(request)
    .then((cachedResponse) => {

      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {

          if (networkResponse && networkResponse.ok) {

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, responseClone));

          }

          return networkResponse;

        });

    })

);

return;
```

}

/*

* HTML pages:
* Network first so that students always get
* the newest version of the application.
*
* If offline, use the cached page.
  */
  if (request.mode === 'navigate') {

```
event.respondWith(
```

```
  fetch(request)
    .then((networkResponse) => {

      if (networkResponse && networkResponse.ok) {

        const responseClone = networkResponse.clone();

        caches.open(CACHE_NAME)
          .then((cache) => cache.put(request, responseClone));

      }

      return networkResponse;

    })
    .catch(() => {

      return caches.match(request)
        .then((cachedResponse) => {

          return cachedResponse || caches.match('/index.html');

        });

    })

);

return;
```

}

/*

* Other same-origin resources:
* Network first, with cache fallback.
  */
  event.respondWith(

```
fetch(request)
```

```
  .then((networkResponse) => {

    if (networkResponse && networkResponse.ok) {

      const responseClone = networkResponse.clone();

      caches.open(CACHE_NAME)
        .then((cache) => cache.put(request, responseClone));

    }

    return networkResponse;

  })
  .catch(() => caches.match(request))
```

);

});
