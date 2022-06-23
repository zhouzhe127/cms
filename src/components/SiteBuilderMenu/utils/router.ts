import { Router, LocationQueryRaw } from 'vue-router'

export function toSeletPage(router: Router, query?: LocationQueryRaw) {
  router.push({
    path: '/siteBuilder/selectPage',
    query
  })
}