import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/paint/dist/",
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/style.scss";'
      }
    }
  }
})
