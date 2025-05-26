import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/movie/',  
  build: {
    outDir: 'dist',  // Папка для собранных файлов
    assetsDir: 'assets',  // Подпапка для CSS/JS
    emptyOutDir: true,  // Очищать папку перед сборкой
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://www.omdbapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});