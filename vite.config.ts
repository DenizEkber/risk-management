import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages root olaraq quraşdırılıbsa, base '/' olmalıdır
  // Əgər subdirectory istifadə edirsinizsə, '/Risk-management/' yazın
  base: '/',
  build: {
    outDir: 'dist',
  }
});
