import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: 'localhost',
        strictPort: false,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // Separate Framer Motion into its own chunk (largest dependency)
              'framer-motion': ['framer-motion'],
              // Separate React/React-DOM into vendor chunk
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // Separate Lucide icons
              'lucide-icons': ['lucide-react'],
            }
          }
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
      }
    };
});
