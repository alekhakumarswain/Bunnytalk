var cacheName = 'bunnytalk-rabbit';

var filesToCache = [
    '/',
    'index.html',  
    'manifest.json',
    'background.js',
    'chat.html',
    'config.js',
    'gallery.html',
    'images.json',
    'login.html',
    'profile.html',
    'skeleton.css',
    'skeleton.js',
    'users.json'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});