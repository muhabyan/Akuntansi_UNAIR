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

export default defineConfig({
  base: '/',
  plugins: [
    malformedUriGuard(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'AKS1 — Akuntansi S1 UNAIR',
        short_name: 'AKS1',
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
