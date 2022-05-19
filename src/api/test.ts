import request from "./request"
export function getOrderInfo(data?: unknown) {
  return request({
    url: 'order/detail',
    method: 'get',
    data
  })
}