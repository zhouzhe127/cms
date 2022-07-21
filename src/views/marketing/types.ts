export interface TargetCondition {
  user_sources: string[]
  keyword: string
}

export interface TargetParams {
  target_type: string
  target_condition: TargetCondition
  target_customers?: string[]
  total?: number
}

export interface DateParams {
  startTime: string
  endTime: string
  timeZone: string
}

export interface PromotionItem {
  id: number
  name: string
  promo_code_id: string
  [key: string]: any
}

export interface RegionItem {
  checked: boolean
  currency_code?: string
  flag?: string
  phone_code?: string
  region_code: string
  region_name: string
}

export interface AnnouncementData {
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
