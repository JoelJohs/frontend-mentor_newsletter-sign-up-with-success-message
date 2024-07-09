import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://JoelJohs.github.io/frontend-mentor_newsletter-sign-up-with-success-message",
})
