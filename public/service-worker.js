const CACHE_NAME = 'PokemonAPI';
const URLS = ['localhost', 'https://2997b140df54.ngrok.io'];
self.addEventListener('install', function (event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(['/']);
    })
  );

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200) {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        // if (event.request.url.startsWith('https://pokeapi.co/api/v2/')) {
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        // }
        return response;
      });
    })
  );
});
