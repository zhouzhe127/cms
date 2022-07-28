import {
  RegionListParams,
  PagingParams,
  GetAnnouncementUserListParams,
  AnnouncementItem
} from './marketing.type'
import request from './request'

//获取国家列表
export function getRegionList<T>(params?: RegionListParams): Promise<T> {
  return request({
    url: '/v3/region/list',
    method: 'get',
    params
  })
}

// 获取promotionList
export function getPromotionList<T>(params?: PagingParams): Promise<T> {
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
export function getPromotionUserList<T>(params?: PagingParams): Promise<T> {
  return request({
    url: '/v3/promotion/user/list',
    method: 'get',
    params
  })
}
// 获取announcement的用户列表
export function getAnnouncementUserList<T>(
  params?: GetAnnouncementUserListParams
): Promise<T> {
  return request({
    url: '/v3/announcement/user/list',
    method: 'get',
    params
  })
}
// 创建announcement
export function saveAnnouncement<T>(data: AnnouncementItem): Promise<T> {
  return request({
    url: '/v3/announcement/create',
    method: 'post',
    data
  })
}
// 获取announcement列表
export function getAnnouncementList<T>(params?: PagingParams): Promise<T> {
  return request({
    url: '/v3/announcement/list',
    method: 'get',
    params
  })
}

// 获取announcement信息
export function getAnnouncementDetail<T>(params: { id: string }): Promise<T> {
  return request({
    url: '/v3/announcement/query',
    method: 'get',
    params
  })
}

//删除announcement
export function deleteAnnouncement<T>(params: { id: string }): Promise<T> {
  return request({
    url: '/v3/announcement/delete',
    method: 'delete',
    params
  })
}

//删除announcement
export function updateAnnouncement<T>(data: AnnouncementItem): Promise<T> {
  return request({
    url: '/v3/announcement/update',
    method: 'put',
    data
  })
}

// 复制announcement
export function duplicationAnnouncement<T>(data: { id: string }): Promise<T> {
  return request({
    url: '/v3/announcement/duplicate',
    method: 'post',
    data
  })
}
