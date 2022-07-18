import request from './request'

//获取国家列表
export function getRegionList(params?: any) {
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

// export function getUserList(params?: any) {
//   return request({
//     url: '/v3/promotion/user/list',
//     method: 'get',
//     params
//   })
// }
export function getPromotionUserList(params?: any) {
  return request({
    url: '/v3/promotion/user/list',
    method: 'get',
    params
  })
}
export function getAnnouncementUserList(params?: any) {
  return request({
    url: '/v3/announcement/user/list',
    method: 'get',
    params
  })
}

export function saveAnnouncement(data: any) {
  return request({
    url: '/v3/announcement/create',
    method: 'post',
    data
  })
}
