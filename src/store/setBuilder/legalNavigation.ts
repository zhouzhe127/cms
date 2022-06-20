import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem, SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'

export const addFunc = Symbol(`add${SITE_MENUS.LEGAL}`)
export const deleteFunc = Symbol(`delete${SITE_MENUS.LEGAL}`)

interface Basic {
  sidebarArr: Array<SideItem>
}
interface ReturnType {
  [SITE_MENUS.LEGAL]: Basic,
  [addFunc]: (item: SideItem) => void
  [deleteFunc]: (item: SideItem) => void
}
export const sidebar = defineStore('legal', (): ReturnType => {
  const Sidestate = reactive<Basic>({
    sidebarArr: [
      {
        title: 'Legal In'
      },
      {
        title: 'LEGAL',
        icon: 'scratchable'
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
    [SITE_MENUS.LEGAL]: Sidestate,
    [addFunc]: addSidebar,
    [deleteFunc]: deleteSidebar
  }
})
