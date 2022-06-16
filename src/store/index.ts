import { setBuilder } from './setBuilder'

export interface IAppStore {
  setBuilder: ReturnType<typeof setBuilder>
}
const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.setBuilder = setBuilder()
}

export default appStore
