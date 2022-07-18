export interface SideItem {
  id?: string
  type?: string
  code?: string
  title?: string
  name?: string
  leftIcon?: string
  rightIcon?: string
  icon?: string
  url?: string
  children?: SideItem[]
  [key: string]: any
}
export interface RequestSide {
  navigation: SideItem,
  sub_navigation?: Array<RequestSide>,
}
export interface SideInterPort {
  title?: string
  children?: Array<SideItem>
}

export enum SITE_MENUS {
  NAVIGATION = 'navigation',
  FOOTER = 'footer',
  LEGAL = 'legal',
  UNLINKED = 'unlinked',
  OFFLINE = 'offline'
}

export enum EVENT_KEY {
  DRAG = 'drag'
}

type stringKey = Record<string, symbol>

export const EventKey: stringKey = {
  navigation: Symbol('NAVIGATION'),
  legal: Symbol('LEGAL'),
  footer: Symbol('FOOTER'),
  [EVENT_KEY.DRAG]: Symbol('DRAG')
}
