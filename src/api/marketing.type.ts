export interface RegionItem {
  region_code: string
  region_name: string
  flag?: string
  currency_code?: string
  phone_code?: string
}

// 分页参数
export interface PagingParams {
  page?: number
  size?: number
}

//获取国家列表参数
export interface RegionListParams extends PagingParams {
  keyword: string
}
