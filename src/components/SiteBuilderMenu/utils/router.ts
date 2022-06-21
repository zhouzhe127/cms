import { Router } from 'vue-router'

export function toSeletPage(router: Router) {
  router.push({
    path: '/siteBuilder/selectPage'
  })
}