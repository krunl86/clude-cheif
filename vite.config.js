import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  base: '/clude- cheif/',   // 👈 REQUIRED for GitHub Pages

} )
