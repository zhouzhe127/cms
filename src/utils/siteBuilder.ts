import { PAGE_ICONS, FILEPAGE } from '@/views/homePage/pageDialog/selectPage/index.type'
export function disposeSideDate<T>(list:T[]) {
  const arr: Array<Object> = []
  if (Array.isArray(list)) {
    list.forEach((e: any) => {
      const vd = e.navigation
      if (vd) {
        const type = vd.content_type.toLocaleUpperCase() || 'PAGE'
        vd.icon = PAGE_ICONS[type]
        vd.hasChild = FILEPAGE.includes(type)
      }
      if (e.sub_navigation) {
        const tp = e.sub_navigation.map((v: any) => ({ navigation: v })) // 格式化数据
        e.sub_navigation = disposeSideDate(tp)
      }
      arr.push(e)
    })
  }
  return arr
}