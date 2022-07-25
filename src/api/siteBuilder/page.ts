import request from "../request"
import { UpdatePageRequest } from "./page.type"
export function pageContentDetail(params?: unknown) {
  return request({
    url: '/v3/cms/page/content/detail',
    method: 'get',
    params
  })
}

export function pageContentCreate(data?: unknown) {
  return request({
    url: '/v3/cms/page/content/create',
    method: 'post',
    data
  })
}

export function pageContentUpdate(data?: UpdatePageRequest) {
  return request({
    url: '/v3/cms/page/content/update',
    method: 'put',
    data
  })
}

export function productCondition(data?: unknown) {
  return request({
    url: '/v3/search/product/condition',
    method: 'post',
    data
  })
}
