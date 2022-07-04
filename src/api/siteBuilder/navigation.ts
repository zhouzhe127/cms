import request from "../request"
export function navigationCreate(data?: unknown) {
  return request({
    url: '/v3/cms/navigation/create',
    method: 'post',
    data
  })
}