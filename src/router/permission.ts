import router from '@/router'
import { getToken, setToken } from '@/utils/cookies'
import { whiteList } from '@/config/white-list'
import { userStore } from '@/store/modules/user'
import { permissionStore } from '@/store/modules/permission'
import { appStore } from '@/store/modules/app'
import tfrMessage from '@/utils/tfrMessage'
const $tfrMessage = tfrMessage

router.beforeEach(async (to, from, next) => {
  const useUserStore = userStore()
  const usePermissionStore = permissionStore()
  const useAppStore = appStore()
  const token = getToken()
  if (token) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      try {
        if (JSON.stringify(useUserStore.user) === '{}') {
          // 检查用户是否已获得权限角色
          await useUserStore.getInfoHttp()
          useAppStore.token = token // 刷新后从设置token
          usePermissionStore.setRoutes()
          usePermissionStore.dynamicRoutes.forEach(v => {
            router.addRoute(v)
          })
          next({ ...to, replace: true })
        } else {
          next()
        }
      } catch (e) {
        setToken('')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    $tfrMessage({
      message: 'Please Sign In',
      type: 'error'
    })
    next(`/login?redirect=${to.path}`)
  }
})

router.afterEach(() => {
  // NProgress.done()
})
