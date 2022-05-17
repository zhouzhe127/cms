import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const path = require('path')
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig((mode: ConfigEnv) => {
  // @ts-ignore
  const env = loadEnv(mode, __dirname)
  console.log(env)
  return {
    server: {
      host: '0.0.0.0', // resolve vite use `--host` to expose
      port: '8080',
      open: true
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src')
        }
      ]
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor';
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd()), 'src/icons/svg'],
        // 指定格式
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
})
