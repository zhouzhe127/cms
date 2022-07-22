import { SideItem } from '@/components/SiteBuilderMenu/type'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import store from '@/store'
const setBuilder = store.setBuilder
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