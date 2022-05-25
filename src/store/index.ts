import { roleStore } from './roleStore'
import { pageconfig } from './pageconfig'
import { userStore } from '@/store/modules/user'
import { menuMarketingStore } from '@/store/modules/menuMarketing'

export interface IAppStore {
  roleStore: ReturnType<typeof roleStore>
  pageconfig: ReturnType<typeof pageconfig>
  userStore: ReturnType<typeof userStore>
  menuMarketingStore: ReturnType<typeof menuMarketingStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleStore = roleStore()
  appStore.pageconfig = pageconfig()
  appStore.userStore = userStore()
  appStore.menuMarketingStore = menuMarketingStore()
}

export default appStore
