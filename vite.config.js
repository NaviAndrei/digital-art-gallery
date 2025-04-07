import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/digital-art-gallery/', 
  
  plugins: [],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/index.html'
      }
    }
  }
});