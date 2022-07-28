import { PAGE_ICONS, FILEPAGE, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
export function disposeSideData<T>(list:T[]) {
  const arr: Array<Object> = []
  if (Array.isArray(list)) {
    list.forEach((e: any) => {
      const vd = e.navigation
      if (vd) {
        const type = vd.content_type.toLocaleUpperCase() || 'PAGE'
        vd.icon = PAGE_ICONS[type]
        vd.hasChild = FILEPAGE.includes(type)
        // legal 类型无拖拽效果
        vd.disable = vd.content_type === PAGE_SELECT.LEGAL.toLocaleLowerCase() || vd.content_type === PAGE_SELECT.POLICY
      }
      if (e.sub_navigation) {
        const tp = e.sub_navigation.map((v: any) => ({ navigation: v })) // 格式化数据
        e.sub_navigation = disposeSideData(tp)
      }
      arr.push(e)
    })
  }
  return arr
}
type stringKey = Record<string, any>
enum APIDATEMAP {
  list = 'properties',
  component_type = 'componentName'
}
type TYPES = keyof typeof APIDATEMAP
export function disposeTemplateData<T>(data:any) {
  const dataKeys = Object.keys(data)
  const mapdata:stringKey = {}
  dataKeys.forEach((v: TYPES | string) => {
    // @ts-ignore
    if (APIDATEMAP[v]) {
      if (v === 'list' && Array.isArray(data.list)) {
        data.list = data.list.map((v: any) => disposeTemplateData(v))
      }
      // @ts-ignore
      mapdata[APIDATEMAP[v]] = data[v]
    } else {
      mapdata[v] = data[v]
    }
  })
  return mapdata
}

enum SENDMAPKEY {
  properties = 'list',
  componentName = 'component_type',
  page_type = 'template'
}
export function disposeSendData(data: any) {
  const dataKeys = Object.keys(data)
  const mapdata:stringKey = {}
  dataKeys.forEach((v: TYPES | string) => {
    // @ts-ignore
    if (SENDMAPKEY[v]) {
      if (v === 'list' && Array.isArray(data.list)) {
        data.list = data.list.map((v: any) => disposeTemplateData(v))
      }
      // @ts-ignore
      mapdata[SENDMAPKEY[v]] = data[v]
    } else {
      mapdata[v] = data[v]
    }
  })
  return mapdata
}
