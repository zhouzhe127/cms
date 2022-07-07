import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar, addFunc } from './navigation'
import { pageTemplate } from './pageTemplate'
import { sidebar as footerSlidebar } from './footerNavigation'
import { getNavigationList } from '@/api/siteBuilder/navigation'
import { disposeSideDate } from '@/utils/siteBuilder'
import { SITE_MENUS, RequestSide } from '@/components/SiteBuilderMenu/type/index'
interface Basic {
  platformState: string,
  loading: boolean
}
type stringKey = Record<string, Object>
export const setBuilder = defineStore(
  'setBuilder',
  () => {
    const sideState = { ...sidebar(), ...footerSlidebar() }
    const pageState = { ...pageTemplate() }
    const basic = reactive<Basic>({
      loading: false,
      platformState: 'pc',
    })

    function setItem(type: string): void {
      basic.platformState = type
    }
    async function getSetBuilderList() {
      basic.loading = true
      try {
        const data:any = await getNavigationList()
        if (data) {
          const navigation: any = disposeSideDate(data[SITE_MENUS.NAVIGATION])
          sideState[addFunc](navigation)
        }
        basic.loading = false
      } catch (error) {
        basic.loading = false
      }
    }
    return { basic, setItem, getSetBuilderList, sideState, pageState }
  },
  {
    persist: true
  }
)
