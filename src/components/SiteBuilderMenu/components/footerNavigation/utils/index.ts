import { SideItem } from '@/components/SiteBuilderMenu/type'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'

export const isLegal = (item: SideItem) => {
  const type = item.content_type?.toLocaleUpperCase()
  if (type === PAGE_SELECT.LEGAL || type === PAGE_SELECT.POLICY) return true
  return false
}
