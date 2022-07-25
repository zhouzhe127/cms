import { RegionItem } from './marketing.type'
import request from './request'

//获取国家列表
export function getRegionList(params?: any) {
  console.log(params, 'kk')
  return request<any, RegionItem[]>({
    url: '/v3/region/list',
    method: 'get',
    params
  })
}

// 获取promotionList
export function getPromotionList(params?: any) {
  return request({
    url: '/v3/promotion/list',
    method: 'get',
    params
  })
}

// export function getUserList(params?: any) {
//   return request({
//     url: '/v3/promotion/user/list',
//     method: 'get',
//     params
//   })
// }
// 获取promotion的用户列表
export function getPromotionUserList(params?: any) {
  return request({
    url: '/v3/promotion/user/list',
    method: 'get',
    params
  })
}
// 获取announcement的用户列表
export function getAnnouncementUserList(params?: any) {
  return request({
    url: '/v3/announcement/user/list',
    method: 'get',
    params
  })
}
// 创建announcement
export function saveAnnouncement(data: any) {
  return request({
    url: '/v3/announcement/create',
    method: 'post',
    data
  })
}
// 获取announcement列表
export function getAnnouncementList(params?: any) {
  return request({
    url: '/v3/announcement/list',
    method: 'get',
    params
  })
}

// 获取announcement详情
export function getAnnouncementDetail(params: any) {
  return request({
    url: '/v3/announcement/query',
    method: 'get',
    params
  })
}
