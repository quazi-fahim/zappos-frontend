import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port:  3000, // Render will use PORT else default to 3000
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ['zappos-frontend.onrender.com'] // 👈 Add your Render domain here
  }
});
