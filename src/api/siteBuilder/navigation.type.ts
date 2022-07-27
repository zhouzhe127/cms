import { EditLinkData } from "@/components/SiteBuilderMenu/components/footerNavigation/type"

export interface UpdateRequest {
  code: string,
  location: string,
  link?: EditLinkData
}

export interface CreateRequest {
  location?: string,
  name?: string,
  content_type: string,
  page_title: string,
  parent_code?: string,
  link?: EditLinkData
}