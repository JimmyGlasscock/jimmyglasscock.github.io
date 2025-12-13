import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root GitHub Pages site: https://jimmyglasscock.github.io/
// base should be '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
