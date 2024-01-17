import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//
const mode = process.env.NODE_ENV
const isDev = mode === 'development'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 2001,
    host: true
  },
  define: {
    __DEV__: isDev
  },
  resolve: {
    alias: {
      '~': '/src'
    }
  }
})
