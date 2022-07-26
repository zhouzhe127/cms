import { SideItem, RequestSide } from '@/components/SiteBuilderMenu/type'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { onSideEvent } from './regesterEvent'
import store from '@/store'
const setBuilder = store.setBuilder
const setActiveSide = store.setBuilder.setActiveSide
export function createPage(e: string, item: SideItem) {
  switch (item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.pageState.addNewPage(item)
      break
    case PAGE_SELECT.PLP:
      setBuilder.pageState.addNewPlp()
      break
    case PAGE_SELECT.ARTICLE:
      setBuilder.pageState.addNewArticle()
      break
  }
}

export function getPageData(item: RequestSide) {
  setBuilder.pageState.getPageDetail(item.navigation.code)
  setActiveSide([item.navigation.id || ''])
}

export function sideEvent(name: string) {
  onSideEvent(name, createPage)
}