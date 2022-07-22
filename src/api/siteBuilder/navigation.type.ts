import { EditLinkData } from "@/components/SiteBuilderMenu/components/footerNavigation/type"

export interface UpdateRequest {
  code: string,
  location: string,
  link?: EditLinkData
}
