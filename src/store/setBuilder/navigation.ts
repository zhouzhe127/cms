import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { RequestSide, SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'

export const addFunc = Symbol(`add${SITE_MENUS.NAVIGATION}`)
export const deleteFunc = Symbol(`delete${SITE_MENUS.NAVIGATION}`)
interface Basic {
  sidebarArr: Array<RequestSide>
}

interface ReturnType {
  [SITE_MENUS.NAVIGATION]: Basic
  [addFunc]: (item: RequestSide, index?: number) => void
  [deleteFunc]: (item: RequestSide) => void
}

export const sidebar = defineStore(
  'sidebar',
  (): ReturnType => {
    const Sidestate = reactive<Basic>({
      sidebarArr: []
    })

    function addSidebar(item: RequestSide | Array<RequestSide>, index?: number) {
      if (Array.isArray(item)) {
        Sidestate.sidebarArr = item
        return
      }
      if (typeof index === 'number') {
        Sidestate.sidebarArr.splice(index, 0, item)
      } else {
        Sidestate.sidebarArr.unshift(item)
      }
    }
    function deleteSidebar(item: RequestSide, pid?: string) {
      const arr = Sidestate.sidebarArr
      if (item.navigation?.id) {
        Sidestate.sidebarArr = arr.filter(v => v.navigation?.id !== item.navigation?.id)
      }
      if (pid) {
        const curState: RequestSide | undefined = arr.find(
          v => v.navigation?.id === pid
        )
        if (curState && Array.isArray(curState?.sub_navigation))
          curState.sub_navigation = curState.sub_navigation?.filter(
            (v: RequestSide) => v.navigation?.id !== item.navigation?.id
          )
      }
    }
    return {
      [SITE_MENUS.NAVIGATION]: Sidestate,
      [addFunc]: addSidebar,
      [deleteFunc]: deleteSidebar
    }
  },
  {
    persist: true
  }
)
