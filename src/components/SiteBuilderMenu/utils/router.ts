import { LocationQueryRaw } from 'vue-router'
import router from '@/router'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { SideItem } from '../type'

export function toSeletPage(query?: LocationQueryRaw) {
  router.push({
    path: '/siteBuilder/selectPage',
    query
  })
}

export const toEditionModel = (item: SideItem) => {
  switch (item.type) {
    case PAGE_SELECT.SMART:
      router.push({
        path: '/siteBuilder/editSmart'
      })
      break
    case PAGE_SELECT.LINK:
      router.push({
        path: '/siteBuilder/editLinkPage'
      })
      break
    case PAGE_SELECT.FOLDER:
      router.push({
        path: '/siteBuilder/editFolder'
      })
      break
    case PAGE_SELECT.LEGAL:
    case PAGE_SELECT.POLICY:
      router.push({
        path: '/siteBuilder/editLegal'
      })
      break
    default:
      router.push({
        path: '/siteBuilder/editPage'
      })
      break
  }
}
