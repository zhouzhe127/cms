import * as path from 'path'
import type { Plugin, ResolvedConfig } from 'vite'
export default function fullImportPlugin () {
  let config: ResolvedConfig
  console.log(111111)
  return <Plugin>{
    name: 'fullImportElementPlus',
    async configResolved(conf) {
      config = conf
    },
    transform(code, id) {
      // 判断当前处理文件
      console.log('---', code)
      if (path.join(config.root, 'src/main.ts') === id) {
        const name = 'ElementPlus'

        // 引入 ElementPlus 和样式
        const prepend = `import ${name} from 'element-plus'; \nimport 'element-plus/theme-chalk/src/index.scss'; \n'`
        code = code.replace('.mount', ($1) => `.use(${name})` + $1)
        return prepend + code
      }
      return code
    }
  }
}