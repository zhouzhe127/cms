// / <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_API_ADDRESS: string
  readonly VITE_APP_STORAGE_PRE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
