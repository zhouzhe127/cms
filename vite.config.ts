import { defineConfig, configEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig((mode:configEnv) => {
  const env = loadEnv(mode, __dirname);
  console.log(env)
  return {
    server:{
      host:'0.0.0.0', // resolve vite use `--host` to expose
      port: '8080',
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
      })
    ],
  }
})
