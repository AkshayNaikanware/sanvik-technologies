import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the build work from any sub-path (GitHub Pages project sites,
// Netlify, or a custom domain). The site uses a hash router, so this is safe.
export default defineConfig({
  base: './',
  plugins: [react()],
});
