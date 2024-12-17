import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite escuchar en todas las interfaces de red
    port: 5173, // (Opcional) Define un puerto específico
  },
});
