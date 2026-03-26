import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// Root GitHub Pages site: https://jimmyglasscock.github.io/
// base should be '/'
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      // Build both the app entry (`index.html`) and the `404.html` fallback entry.
      // This ensures GitHub Pages can serve `404.html` for deep links like `/projects`.
      input: {
        index: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})
