// Service Worker for F5 Google Ads Landing Page
// Progressive Web App functionality

const CACHE_NAME = 'f5-landing-v1.0.0';
const STATIC_CACHE = 'f5-static-v1';
const DYNAMIC_CACHE = 'f5-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles/material-tokens.css',
    '/styles/layout.css',
    '/styles/components.css',
    '/styles/custom.css',
    '/scripts/material.js',
    '/scripts/form-validation.js',
    '/scripts/analytics.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&display=swap'
];

// Material Web Components from CDN (cache with strategy)
const MATERIAL_COMPONENTS = [
    'https://esm.run/@material/web/button/filled-button.js',
    'https://esm.run/@material/web/button/outlined-button.js',
    'https://esm.run/@material/web/textfield/outlined-text-field.js',
    'https://esm.run/@material/web/checkbox/checkbox.js',
    'https://esm.run/@material/web/select/outlined-select.js',
    'https://esm.run/@material/web/select/select-option.js',
    'https://esm.run/@material/web/chips/chip-set.js',
    'https://esm.run/@material/web/chips/assist-chip.js',
    'https://esm.run/@material/web/card/outlined-card.js',
    'https://esm.run/@material/web/card/filled-card.js'
];

// Install event - cache static assets
self.addEventListener('install', function(event) {
    console.log('[SW] Installing Service Worker');
    
    event.waitUntil(
        Promise.all([
            // Cache static assets
            caches.open(STATIC_CACHE).then(function(cache) {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            // Cache Material Components
            caches.open(CACHE_NAME).then(function(cache) {
                console.log('[SW] Caching Material Components');
                return cache.addAll(MATERIAL_COMPONENTS.slice(0, 5)); // Cache first 5 to avoid overwhelming
            })
        ]).then(function() {
            console.log('[SW] Installation complete');
            self.skipWaiting(); // Activate immediately
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    console.log('[SW] Activating Service Worker');
    
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME && 
                        cacheName !== STATIC_CACHE && 
                        cacheName !== DYNAMIC_CACHE) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log('[SW] Activation complete');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Fetch event - serve from cache with fallback strategies
self.addEventListener('fetch', function(event) {
    const requestUrl = new URL(event.request.url);
    
    // Handle different resource types with appropriate strategies
    if (event.request.method !== 'GET') return;
    
    // Strategy for different resource types
    if (requestUrl.origin === location.origin) {
        // Same-origin requests - Cache First
        event.respondWith(cacheFirst(event.request));
    } else if (requestUrl.hostname === 'fonts.googleapis.com' || 
               requestUrl.hostname === 'fonts.gstatic.com') {
        // Google Fonts - Cache First with long TTL
        event.respondWith(fontCacheFirst(event.request));
    } else if (requestUrl.hostname === 'esm.run') {
        // Material Components CDN - Stale While Revalidate
        event.respondWith(staleWhileRevalidate(event.request));
    } else if (requestUrl.pathname.includes('/api/') || 
               requestUrl.pathname.includes('analytics') ||
               requestUrl.pathname.includes('gtag')) {
        // Analytics and APIs - Network First
        event.respondWith(networkFirst(event.request));
    } else {
        // Other external resources - Network First with cache
        event.respondWith(networkFirst(event.request));
    }
});

// Cache First Strategy - for static assets
function cacheFirst(request) {
    return caches.match(request).then(function(response) {
        if (response) {
            console.log('[SW] Serving from cache:', request.url);
            return response;
        }
        
        console.log('[SW] Fetching and caching:', request.url);
        return fetch(request).then(function(fetchResponse) {
            if (fetchResponse && fetchResponse.status === 200) {
                const responseToCache = fetchResponse.clone();
                caches.open(STATIC_CACHE).then(function(cache) {
                    cache.put(request, responseToCache);
                });
            }
            return fetchResponse;
        }).catch(function(error) {
            console.log('[SW] Fetch failed:', error);
            // Return offline page for navigation requests
            if (request.destination === 'document') {
                return caches.match('/offline.html');
            }
        });
    });
}

// Font Cache First - for Google Fonts with long TTL
function fontCacheFirst(request) {
    return caches.match(request).then(function(response) {
        if (response) {
            return response;
        }
        
        return fetch(request).then(function(fetchResponse) {
            if (fetchResponse && fetchResponse.status === 200) {
                const responseToCache = fetchResponse.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(request, responseToCache);
                });
            }
            return fetchResponse;
        });
    });
}

// Stale While Revalidate - for Material Components
function staleWhileRevalidate(request) {
    return caches.match(request).then(function(response) {
        const fetchPromise = fetch(request).then(function(fetchResponse) {
            if (fetchResponse && fetchResponse.status === 200) {
                const responseToCache = fetchResponse.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(request, responseToCache);
                });
            }
            return fetchResponse;
        });
        
        // Return cached version immediately, update cache in background
        if (response) {
            return response;
        }
        return fetchPromise;
    });
}

// Network First - for analytics and dynamic content
function networkFirst(request) {
    return fetch(request).then(function(response) {
        if (response && response.status === 200 && request.method === 'GET') {
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE).then(function(cache) {
                cache.put(request, responseToCache);
            });
        }
        return response;
    }).catch(function(error) {
        console.log('[SW] Network failed, trying cache:', error);
        return caches.match(request);
    });
}

// Background sync for form submissions
self.addEventListener('sync', function(event) {
    if (event.tag === 'form-submission') {
        console.log('[SW] Background sync: form submission');
        event.waitUntil(syncFormSubmissions());
    }
});

// Handle failed form submissions when offline
function syncFormSubmissions() {
    return new Promise(function(resolve) {
        // Get stored form submissions from IndexedDB
        // Retry submissions when online
        // This would integrate with form-validation.js
        console.log('[SW] Syncing form submissions');
        resolve();
    });
}

// Push notifications (future enhancement)
self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();
        console.log('[SW] Push received:', data);
        
        const options = {
            body: data.body || 'Nova mensagem da F5 Estratégia',
            icon: '/assets/images/logo-f5-192.png',
            badge: '/assets/images/badge-96.png',
            vibrate: [200, 100, 200],
            tag: 'f5-notification',
            actions: [
                {
                    action: 'view',
                    title: 'Ver detalhes',
                    icon: '/assets/icons/view.png'
                },
                {
                    action: 'dismiss',
                    title: 'Dispensar',
                    icon: '/assets/icons/dismiss.png'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title || 'F5 Estratégia', options)
        );
    }
});

// Handle notification clicks
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Periodic background sync (when supported)
self.addEventListener('periodicsync', function(event) {
    if (event.tag === 'cache-update') {
        event.waitUntil(updateCaches());
    }
});

function updateCaches() {
    console.log('[SW] Updating caches in background');
    return caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(MATERIAL_COMPONENTS);
    });
}

// Handle cache storage quota
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('[SW] Service Worker script loaded');