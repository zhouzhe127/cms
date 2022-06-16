import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem } from '@/components/SiteBuilderMenu/type/index'
interface Basic {
  sidebarArr: Array<SideItem>
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
  return { Sidestate, addSidebar, deleteSidebar }
})