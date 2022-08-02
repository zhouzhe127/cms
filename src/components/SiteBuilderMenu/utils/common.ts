import {
  SideItem,
  RequestSide,
  SITEARRAY
} from '@/components/SiteBuilderMenu/type'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { onSideEvent } from './regesterEvent'
import { positionUpdate } from '@/api/siteBuilder/navigation'
import store from '@/store'
const setBuilder = store.setBuilder
const setActiveSide = store.setBuilder?.setActiveSide
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

export function setChangePosition(
  evt: any,
  location: string,
  parent_code?: string
) {
  const arrkey = ['moved', 'added']
  arrkey.forEach((v: string) => {
    if (evt[v]) {
      // const position = evt[v].newIndex
      // const nav = evt[v].element.navigation
      const send: { [key: string]: any } = {}
      SITEARRAY.forEach((s: string) => {
        // @ts-ignore
        const sa = setBuilder.sideState[s]
        if (sa) send[s] = sa.sidebarArr
      })
      // const send = {
      //   code: nav.code,
      //   location,
      //   position,
      //   parent_code
      // }
      positionUpdate(send)
    }
  })
}
