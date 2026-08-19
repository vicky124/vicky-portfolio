import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works when deployed to a GitHub Pages
// project site (https://<user>.github.io/<repo>/) without needing to
// hardcode the repository name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
