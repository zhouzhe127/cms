import { roleStore } from './roleStore'
import { pageconfig } from './pageconfig'
// import { useCounterStoreForSetup } from '@/store/counterForSetup';
// import { useCounterStoreForOption } from '@/store/counterForOptions';

export interface IAppStore {
  roleStore: ReturnType<typeof roleStore>
  pageconfig: ReturnType<typeof pageconfig>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleStore = roleStore()
  appStore.pageconfig = pageconfig()
}

export default appStore