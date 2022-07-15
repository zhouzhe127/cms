import { SideItem } from "@/components/SiteBuilderMenu/type";
import { PAGE_SELECT } from "@/views/homePage/pageDialog/selectPage/index.type";

export const isLegal = (item: SideItem) => {
  if (item.type === PAGE_SELECT.LEGAL || item.type === PAGE_SELECT.POLICY) return true
  return false
}