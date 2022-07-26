import request from "../request"
export function getSlugList(data?: unknown) {
  return request({
    url: '/v3/cms/slug/list',
    method: 'get',
    data
  })
}