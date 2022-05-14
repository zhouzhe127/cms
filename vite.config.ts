import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0', // resolve vite use `--host` to expose
    port: 8080,
    open: true
  },
  resolve:{
    alias:[
      {
        find: '@',
        replacement: resolve(__dirname,'src')
      }
    ]
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd()), 'src/icons/svg'],
      // 指定格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
})
