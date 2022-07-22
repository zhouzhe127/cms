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
  switch (item.content_type?.toLocaleUpperCase()) {
    case PAGE_SELECT.SMART:
      router.push({
        path: '/siteBuilder/editSmart'
      })
      break
    case PAGE_SELECT.LINK:
      router.push({
        path: '/siteBuilder/editLinkPage',
        query: { id: item.id, code: item.code, location: item.location }
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
        path: '/siteBuilder/editLegal',
        query: { id: item.id }
      })
      break
    default:
      router.push({
        path: '/siteBuilder/editPage'
      })
      break
  }
}
