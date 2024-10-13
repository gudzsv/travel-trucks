import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    FullReload(['./src/**/*.{js,jsx,tsx,css,json,svg,webp}']),
    ViteImageOptimizer({
      exclude: /^sprite.svg$/,
      png: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
    }),
  ],
});
