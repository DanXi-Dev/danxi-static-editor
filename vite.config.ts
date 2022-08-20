import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true
    })
  ],
  // 防止 vite 输出复杂的 rust 错误
  clearScreen: false,
  // Tauri 使用固定端口，若此端口不可用将会导致程序错误
  server: {
    strictPort: true,
  },
  // 使用 `TAURI_PLATFORM`、`TAURI_ARCH`、`TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`、`TAURI_PLATFORM_TYPE` 和 `TAURI_DEBUG` 环境变量
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri 支持 es2021
    target: ['es2021', 'chrome100', 'safari13'],
    // 不为调试构建压缩构建体积
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // 为调试构建生成源代码映射 (sourcemap)
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/views/HelloView',
            './src/views/HomeView',
            './src/views/EditorView',
          ],
        },
      },
    },
  },
})
