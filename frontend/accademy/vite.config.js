import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // The backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Use this if you're using HTTPS
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Remove '/api' prefix if needed
      }
    }
  }
})
