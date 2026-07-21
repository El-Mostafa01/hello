import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo at https://<user>.github.io/hello/,
// so assets must be resolved under the "/hello/" base path.
// Override with BASE_PATH env if you deploy somewhere else (e.g. "/").
const base = process.env.BASE_PATH ?? '/hello/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
