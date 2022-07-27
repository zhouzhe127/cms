// 每列国家数据
export interface RegionItem {
  region_code: string
  region_name: string
  flag?: string
  currency_code?: string
  phone_code?: string
}

// 当前运用的每列国家数据
export interface UsRegionItem extends RegionItem {
  checked?: boolean
}

// 分页参数
export interface PagingParams {
  page?: number
  size?: number
}

// 带分页返回数据
export interface PagingBack<T> {
  info?: {
    page: number
    size: number
    total: number
  }
  list: T
}

//获取国家列表参数
export interface RegionListParams extends PagingParams {
  keyword: string
}

//每列promotion数据
export interface PromotionItem {
  id: number
  name: string
  promo_code_id: string
  [key: string]: any
}

// 获取announcement userList params
export interface GetAnnouncementUserListParams extends PagingParams {
  keyword: string
  user_sources?: string[]
}

//每项announcementUserList的数据
export interface AnnouncementUserListItem {
  contact_code: string
  id: number
  checked?: boolean
  first_name: string
  last_name: string
  email: string
  source: string
  [key: string]: any
}

// announcement数据
export interface AnnouncementItem {
  id?: string
  announcement_id?: string
  name: string
  description: string
  message: string
  media?: {
    path: string
    media_type: string
  }
  mobile_media?: {
    path: string
    media_type: string
  }
  promotion_code_id: string
  legal: string
  region_range: string
  regions?: string[]
  link?: {
    type: string
    external?: {
      title: string
      link: string
      open_new: boolean
    }
  }
  target_type: string
  target_condition?: {
    user_sources: string[]
    keyword: string
  }
  target_customers?: string[]
  expire_type: string
  start_time?: string
  end_time?: string
  time_zone?: string
}
