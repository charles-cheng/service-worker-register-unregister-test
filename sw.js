self.addEventListener('fetch', event => {
  if (event.request.method != 'GET') return;
  event.respondWith(async function() {
    return fetch(event.request);
  }());
});
