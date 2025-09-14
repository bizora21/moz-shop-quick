// Service Worker para LojaRápida MZ - Otimizado para Moçambique
const CACHE_NAME = 'lojarapida-mz-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Recursos críticos para cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon-32x32.png',
  // Adicione outros recursos estáticos críticos
];

// URLs que devem ser sempre buscadas da rede
const NETWORK_FIRST = [
  '/api/',
  '/auth/',
  'https://tbrkkixunojjiticvvxa.supabase.co'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('SW: Installing Service Worker for LojaRápida MZ');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('SW: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('SW: Activating Service Worker');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('SW: Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and chrome-extension
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Network first para APIs e autenticação
  if (NETWORK_FIRST.some(pattern => request.url.includes(pattern))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Cache first para recursos estáticos
  if (STATIC_ASSETS.some(asset => request.url.endsWith(asset))) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Stale while revalidate para páginas
  event.respondWith(staleWhileRevalidate(request));
});

// Estratégia Cache First
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    console.log('SW: Cache first failed:', error);
    return new Response('Offline - Recurso não disponível', { status: 503 });
  }
}

// Estratégia Network First
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    
    // Cache successful responses
    if (response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.log('SW: Network first failed, trying cache:', error);
    const cached = await caches.match(request);
    return cached || new Response('Offline - Serviço indisponível', { status: 503 });
  }
}

// Estratégia Stale While Revalidate
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => {
    return cached || new Response('Página não encontrada offline', { status: 404 });
  });

  return cached || fetchPromise;
}

// Background sync para formulários offline
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implementar sync de dados quando voltar online
  console.log('SW: Background sync triggered');
}

// Push notifications para promoções
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nova promoção disponível!',
    icon: '/favicon-32x32.png',
    badge: '/favicon-32x32.png',
    data: {
      url: '/'
    },
    tag: 'lojarapida-notification'
  };

  event.waitUntil(
    self.registration.showNotification('LojaRápida MZ', options)
  );
});

// Clique em notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});