import { defineConfig, type Connect, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

function malformedUriGuard(): Plugin {
  const guard: Connect.NextHandleFunction = (req, res, next) => {
    try {
      decodeURI(req.originalUrl ?? '/');
      next();
    } catch {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Bad Request: malformed URL');
    }
  };

  return {
    name: 'malformed-uri-guard',
    configureServer(server) {
      server.middlewares.use(guard);
    },
    configurePreviewServer(server) {
      server.middlewares.use(guard);
    },
  };
}

function developmentServiceWorkerCleanup(): Plugin {
  const cleanupWorker = `
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url))))
  );
});`;

  return {
    name: 'development-service-worker-cleanup',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.originalUrl?.split('?')[0] !== '/sw.js') return next();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store, max-age=0');
        res.end(cleanupWorker);
      });
    },
    transformIndexHtml() {
      return [{
        tag: 'script',
        injectTo: 'head-prepend',
        children: `
if ('serviceWorker' in navigator) {
  const reloadKey = 'akuntansihub-dev-sw-cleanup';
  const hadController = Boolean(navigator.serviceWorker.controller);
  Promise.all([
    navigator.serviceWorker.getRegistrations().then((registrations) => Promise.all(registrations.map((registration) => registration.unregister()))),
    'caches' in window ? caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))) : Promise.resolve(),
  ]).then(() => {
    if (hadController && !sessionStorage.getItem(reloadKey)) {
      sessionStorage.setItem(reloadKey, '1');
      location.reload();
    } else if (!hadController) {
      sessionStorage.removeItem(reloadKey);
    }
  });
}`,
      }];
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    developmentServiceWorkerCleanup(),
    malformedUriGuard(),
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg'],
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallbackDenylist: [/^\/arsip-uas/],
      },
      manifest: {
        name: 'AkuntansiHub | S1 Akuntansi FEB UNAIR',
        short_name: 'AkuntansiHub',
        description: 'Interactive E-Learning Platform untuk Akuntansi FEB UNAIR',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Pisahkan vendor agar caching lebih baik & initial bundle ramping.
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            if (id.indexOf('lucide-react') !== -1) return 'vendor-icons';
            if (id.indexOf('react-dom') !== -1 || id.indexOf('/react/') !== -1 || id.indexOf('scheduler') !== -1) return 'vendor-react';
            return 'vendor';
          }
        },
      },
    },
  },
});
