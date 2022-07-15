import request from "../request"
export function pageContentDetail(params?: unknown) {
  return request({
    url: '/v3/cms/page/content/detail',
    method: 'get',
    params
  })
}
