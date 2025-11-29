import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' GitHub repository adınıza uyğun olmalıdır
  // https://github.com/DenizEkber/Risk-management -> /Risk-management/
  base: '/risk-management/', 
  build: {
    outDir: 'dist',
  }
});
