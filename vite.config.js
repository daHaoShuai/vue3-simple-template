import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    unocss()
  ],
  server: {
    port: 5000,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@view': path.resolve(__dirname, 'src/views'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store/modules')
    }
  }
})
