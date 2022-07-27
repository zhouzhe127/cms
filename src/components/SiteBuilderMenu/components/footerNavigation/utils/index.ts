import { SideItem } from '@/components/SiteBuilderMenu/type'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'

export const isLegal = (typeString: string | undefined) => {
  if (!typeString) return false
  const type = typeString.toLocaleUpperCase()
  if (type === PAGE_SELECT.LEGAL || type === PAGE_SELECT.POLICY) return true
  return false
}
