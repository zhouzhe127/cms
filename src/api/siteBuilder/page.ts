import request from "../request"
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

export function pageContentUpdate(data?: unknown) {
  return request({
    url: '/v3/cms/page/content/update',
    method: 'put',
    data
  })
}
