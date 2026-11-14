import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const porta = 5173
const { CODESPACE_NAME, GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN } = process.env
const hostCodespace = `${CODESPACE_NAME}-${porta}.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`

export default defineConfig({
  plugins: [vue()],
  server: {
    port: porta,
    strictPort: true,
    allowedHosts: CODESPACE_NAME && GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN ? [hostCodespace] : [],
  },
})
