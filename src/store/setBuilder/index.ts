import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar, addFunc, setActive } from './navigation'
import { pageTemplate } from './pageTemplate'
import { DEVICE } from '@/config/constant'
import {
  sidebar as footerSlidebar,
  addFunc as footerAddFunc
} from './footerNavigation'
import { getNavigationList } from '@/api/siteBuilder/navigation'
import { disposeSideData } from '@/utils/siteBuilder'
import { SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'
interface Basic {
  platformState: string
  loading: boolean
  sideSelectd: Array<string | number>
}
const SIDECONTENT = [SITE_MENUS.NAVIGATION, SITE_MENUS.FOOTER]
export const setBuilder = defineStore(
  'setBuilder',
  () => {
    const sideState = { ...sidebar(), ...footerSlidebar() }
    const pageState = { ...pageTemplate() }
    const basic = reactive<Basic>({
      loading: false,
      platformState: DEVICE.DESKTOP,
      sideSelectd: []
    })

    function setItem(type: string): void {
      basic.platformState = type
    }
    function setActiveSide(value: Array<string | number>) {
      basic.sideSelectd = value
      sideState[setActive](value)
    }
    async function getSetBuilderList() {
      basic.loading = true
      try {
        const data: any = await getNavigationList()
        if (data) {
          const navigation: any = disposeSideData(data[SITE_MENUS.NAVIGATION])
          const footerArr: any = disposeSideData(data[SITE_MENUS.FOOTER])
          sideState[addFunc](navigation)
          sideState[footerAddFunc](footerArr)
        }
        basic.loading = false
      } catch (error) {
        basic.loading = false
      }
    }
    return {
      basic,
      setItem,
      getSetBuilderList,
      sideState,
      pageState,
      setActiveSide
    }
  },
  {
    persist: true
  }
)
