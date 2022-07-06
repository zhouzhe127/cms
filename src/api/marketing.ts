import request from './request'

export function getRegionAll(params?: any) {
  console.log(params, 'kk')
  return request({
    url: '/v3/region/list',
    method: 'get',
    params
  })
}

export function getPromotionList(params?: any) {
  return request({
    url: '/v3/promotion/list',
    method: 'get',
    params
  })
}
