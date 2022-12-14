import { PAGE_ICONS, FILEPAGE, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { DEVICE } from '@/config/constant'
import { ARTICLE_REGULAR } from '@/views/homePage/type/index'
import { useRoute } from 'vue-router'
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
  properties = 'items',
  componentName = 'component_type',
  template = 'page_type'
}
export function disposeSendData(data: any) {
  const dataKeys = Object.keys(data)
  const mapdata:stringKey = {}
  dataKeys.forEach((v: TYPES | string) => {
    // @ts-ignore
    if (SENDMAPKEY[v]) {
      if (v === 'properties' && Array.isArray(data.properties)) {
        data.properties = data.properties.map((v: any) => disposeTemplateData(v))
      }
      // @ts-ignore
      mapdata[SENDMAPKEY[v]] = data[v]
    } else {
      mapdata[v] = data[v]
    }
  })
  return mapdata
}

export function getStyle(style: any, device?: string) {
  if (!style) {
    return {}
  }
  if (style.full_width === ARTICLE_REGULAR.FULL_WIDTH) {
    return {
      width: '100%'
    }
  }
  const map = {
    padding: device === DEVICE.MOBILE ? 'padding_mobile_px' : 'padding_desktop_px',
    maxWidth: device === DEVICE.MOBILE ? 'padding_mobile_max' : 'padding_desktop_max'
  }
  return {
    padding: `${style[map.padding] || 0}px`,
    maxWidth: `${style[map.maxWidth] || 0}px`
  }
}

export function getSite() {
  const route = useRoute()
  const site = route.query.site as string
  const siteArr = site.split('-')
  return {
    site: Number(siteArr[0]) || 0,
    childSite: Number(siteArr[1] || route.query.childSite) || 0
  }
}