import request from "../request"
export function navigationCreate(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/create',
    method: 'post',
    data
  })
}

export function getNavigationList(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/list',
    method: 'get',
    data
  })
}

export function navigationDelete(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/delete',
    method: 'delete',
    data
  })
}
