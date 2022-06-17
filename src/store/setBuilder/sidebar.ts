import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem } from '@/components/SiteBuilderMenu/type/index'
interface Basic {
  sidebarArr: Array<SideItem>,
  selectPageCallback?: Function
}

export const sidebar = defineStore('sidebar', () => {
  const Sidestate = reactive<Basic>({
    sidebarArr: [
      {
        title: 'New In',
      },
      {
        title: 'Jewelry',
        icon: 'scratchable'
      }
    ],
    selectPageCallback: () => {}
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
  function setPageCallback (value: Function) {
    Sidestate.selectPageCallback = value
  }
  return { Sidestate, addSidebar, deleteSidebar, setPageCallback }
})