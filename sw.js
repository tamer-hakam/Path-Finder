const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';

const assets = [
  '/',
  '/index.html',
  '/p5.dom.js',
  '/p5.min.js',
  '/sketch.js',
  '/style.css',
  '/orientation.png',
  '/src/Runtime.js',
  '/resources/0012.png',
  '/resources/0018.png',
  '/resources/9999.mp3',
  '/resources/M0001.png',
  '/resources/p55.cc1',
  '/resources/p55.cch',
  '/icons/192.png',
  '/icons/512.png'  
];


// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});