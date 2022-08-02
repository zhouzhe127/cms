import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
const path = require('path')
const envConfig = require('./env.config')
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig((mode: ConfigEnv) => {
  // @ts-ignore
  // const env = loadEnv(mode, __dirname)
  // console.log(env)
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
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
          additionalData: '@use "./src/styles/variables.scss" as *;'
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor'
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      ElementPlus({
        // 引入的样式的类型，可以是css、sass、less等，
        importStyle: 'css',
        useSource: true
      }),
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
      }),
      PkgConfig(),
      OptimizationPersist()
    ],
    define: {
      'process.env': {
        VUE_APP_CONFIG: JSON.stringify(envConfig)
      }
    }
  }
})
