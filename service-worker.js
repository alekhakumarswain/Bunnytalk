var cacheName = 'bunnytalk-rabbit';
var filesToCache = [
    '/',
    '/index.html', 
    '/chat.html', 
    '/gallery.html',
    '/profile.html',
    '/login.html',
    '/css/skeleton.css',
    '/js/background.js',
    '/js/config.js',
    '/js/dateformat.js',
    '/js/skeleton.js',
    '/404.html',
    '/js/images.json',
    '/js/users.json',
    '/manifest.json', 
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return Promise.all(
                filesToCache.map(function(file) {
                    return fetch(new Request(file, { cache: 'reload' })).then(function(response) {
                        if (response.ok) {
                            return cache.put(file, response);
                        } else {
                            console.error('Failed to fetch ' + file + ': ' + response.statusText);
                            throw new TypeError('Bad response status');
                        }
                    }).catch(function(error) {
                        console.error('Request for ' + file + ' failed:', error);
                        throw error;
                    });
                })
            );
        }).catch(function(error) {
            console.error('Failed to open cache:', error);
            throw error;
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
