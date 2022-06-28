import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { SideItem, SITE_MENUS } from '@/components/SiteBuilderMenu/type/index'
import { generateUUID } from '@/utils/uuid'
import { PAGE_ICONS, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'

export const addFunc = Symbol(`add_${SITE_MENUS.FOOTER}`)
export const addChildFunc = Symbol(`add_children_${SITE_MENUS.FOOTER}`)
export const deleteFunc = Symbol(`delete_${SITE_MENUS.FOOTER}`)

type addFuncType = (item: SideItem) => void
type addChildFuncType = (pid: string) => addFuncType
interface Basic {
  sidebarArr: Array<SideItem>
}
interface ReturnType {
  [SITE_MENUS.FOOTER]: Basic
  [addFunc]: addFuncType
  [addChildFunc]: addChildFuncType
  [deleteFunc]: (item: SideItem, pid?: string) => void
}
export const sidebar = defineStore('footerSideBar', (): ReturnType => {
  const SideLegal = reactive<SideItem>({
    title: 'Legal',
    icon: PAGE_ICONS[PAGE_SELECT.LEGAL],
    type: PAGE_SELECT.LEGAL,
    children: []
  })
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
      },
      SideLegal
    ]
  })
  function addSidebar(item: SideItem) {
    console.log(generateUUID())
    Sidestate.sidebarArr.unshift(item)
  }
  function addChildSildebar(pid: string): addFuncType {
    return (item: SideItem) => {
      const arr = Sidestate.sidebarArr
      let curSideItem =
        arr.find(item => item.id === pid || item.title === pid) || {}
      if (!curSideItem.children) curSideItem.children = []
      curSideItem.children.unshift(item)
    }
  }
  function deleteSidebar(item: SideItem, pid?: string) {
    // TODO 赋值判断使用title强写死，等后台交互阶段这里微调
    const arr = Sidestate.sidebarArr
    if (item.title && !pid) {
      Sidestate.sidebarArr = arr.filter(v => v.title !== item.title)
    }

    if (pid) {
      const curState: SideItem | undefined = arr.find(
        v => v.id === pid || v.title === pid
      )
      if (curState && Array.isArray(curState?.children))
        curState.children = curState.children?.filter(
          (v: SideItem) => v.title !== item.title
        )
    }
  }
  return {
    [SITE_MENUS.FOOTER]: Sidestate,
    [addFunc]: addSidebar,
    [addChildFunc]: addChildSildebar,
    [deleteFunc]: deleteSidebar
  }
}, {
  persist: true
})
