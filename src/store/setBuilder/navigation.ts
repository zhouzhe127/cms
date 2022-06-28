import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem, SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'
import { PAGE_ICONS, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'

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
        title: 'New In',
        icon: PAGE_ICONS[PAGE_SELECT.HOME],
        type: PAGE_SELECT.HOME
      },
      {
        title: 'Jewelry',
        icon: PAGE_ICONS[PAGE_SELECT.PLP],
        type: PAGE_SELECT.PLP
      }
    ]
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
}, {
  persist: true
})
