import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Look for this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // And look for this
  ],
})