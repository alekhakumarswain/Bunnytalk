var cacheName = 'bunnytalk-rabbit';
var filesToCache = [
    '/',
    '/index.html',  
    '/manifest.json', 
    '/background.js',
    '/chat.html',
    '/config.js',
    '/gallery.html',
    '/images.json',
    '/login.html',
    '/profile.html',
    '/skeleton.css',
    '/skeleton.js',
    '/users.json'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache.map(file => new Request(file, { cache: 'reload' })))
                .catch(function(error) {
                    console.error('Failed to cache files:', error);
                    throw error;
                });
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
