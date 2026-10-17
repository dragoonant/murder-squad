import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project path (github.com/<org>/murder-squad ->
// <org>.github.io/murder-squad/) in production; dev server stays at root.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/murder-squad/' : '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/@react-three')) return 'r3f'
          if (id.includes('node_modules/react')) return 'react'
          if (id.includes('/src/engine/') || id.includes('/src/data/')) return 'engine'
          return undefined
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    testTimeout: 30000, // CI runners are ~2x slower than local
  },
}))
