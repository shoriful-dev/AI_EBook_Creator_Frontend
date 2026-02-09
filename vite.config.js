import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          utils: ['axios', 'lucide-react', 'react-hot-toast'],
          dnd: ['@dnd-kit/core', '@dnd-kit/sortable'],
          editor: ['@uiw/react-md-editor'],
        }
      }
    }
  }
});
