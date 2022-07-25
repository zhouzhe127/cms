export interface UpdatePageRequest {
  id: string
  site_navigation_code?:string
  page_type: string
  legal: LegalPageData
  [key:string]: any
}

export interface LegalPageData {
  title: string
  region_code: string
  region_name: string
  slug: string
  body: string
}