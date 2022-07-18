import { RequestSide } from '@/components/SiteBuilderMenu/type/index'
export function setActiveRespose(sideArr:Array<RequestSide>, seleted:Array<string | number>) {
  sideArr.forEach(v => {
    v.navigation.isActive = seleted.includes(v.navigation.id || 0)
    if (v.sub_navigation && Array.isArray(v.sub_navigation)) {
      setActiveRespose(v.sub_navigation, seleted)
    }
  })
  return sideArr
}