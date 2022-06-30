import { setBuilder } from './setBuilder'
import { update } from './update'

export interface IAppStore {
  setBuilder: ReturnType<typeof setBuilder>
  upadte: ReturnType<typeof update>
}
const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.setBuilder = setBuilder()
  appStore.upadte = update()
}

export default appStore
