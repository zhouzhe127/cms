import { roleStore } from './roleStore'
import { pageconfig } from './pageconfig'
import { userStore } from '@/store/modules/user'
// import { useCounterStoreForSetup } from '@/store/counterForSetup';
// import { useCounterStoreForOption } from '@/store/counterForOptions';

export interface IAppStore {
  roleStore: ReturnType<typeof roleStore>
  pageconfig: ReturnType<typeof pageconfig>
  userStore: ReturnType<typeof userStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleStore = roleStore()
  appStore.pageconfig = pageconfig()
  appStore.userStore = userStore()
}

export default appStore
