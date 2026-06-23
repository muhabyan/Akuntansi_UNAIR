import { defineConfig, type Connect, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

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
  // Batch 11F.1: gunakan root-relative assets agar direct URL /course/AKK201 tidak mencari /course/assets/*.js.
  base: '/',
  plugins: [malformedUriGuard(), react()],
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
