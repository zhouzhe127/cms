export interface FooterDetail {
  footer_list: FooterListItem[]
  footer_config: FooterConfig
}

export interface FooterConfig {
  hide?: boolean
  full_width?: boolean
  padding_desktop_px?: string
  padding_desktop_max?: string
  padding_mobile_px?: string
  padding_mobile_ma?: string
  copyright?: string
  company_name?: string
  disclaimer?: string
}

export interface FooterListItem {
  navigation?: Navigation,
  sub_navigation?: Navigation[]
}

export interface Navigation {
  id?: number
  gmt_create?: string
  gmt_modified?: string
  deleted?: number
  code?: string
  parent_code?: string
  location?: string
  page_content_id?: string
  site?: string
  content_type?: string
  page_title?: string
  name?: string
  slug?: string
  status?: string
  translate_status?: string
  position?: number
}