import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem, SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'

export const addFunc = Symbol(`add${SITE_MENUS.NAVIGATION}`)
export const deleteFunc = Symbol(`delete${SITE_MENUS.NAVIGATION}`)
interface Basic {
  sidebarArr: Array<SideItem>,
}

interface ReturnType {
 [SITE_MENUS.NAVIGATION]: Basic,
 [addFunc]: (item: SideItem) => void
 [deleteFunc]: (item: SideItem) => void
}

export const sidebar = defineStore('sidebar', (): ReturnType => {
  const Sidestate = reactive<Basic>({
    sidebarArr: [
      {
        title: 'New In'
      },
      {
        title: 'Jewelry',
        icon: 'scratchable'
      }
    ],
  })

  function addSidebar(item: SideItem) {
    Sidestate.sidebarArr.unshift(item)
  }
  function deleteSidebar(item: SideItem) {
    const arr = Sidestate.sidebarArr
    if (item.title) {
      Sidestate.sidebarArr = arr.filter(v => v.title !== item.title)
    }
  }
  return {
    [SITE_MENUS.NAVIGATION]: Sidestate,
    [addFunc]: addSidebar,
    [deleteFunc]: deleteSidebar
  }
})
