import { type } from "os"

export interface SideItem {
  id?: string,
  title?: string,
  leftIcon?: string,
  rightIcon?: string,
  icon?: string,
  children?: SideItem[]
}
export interface SideInterPort {
  title?: string,
  children?: Array<SideItem>
}
export enum SITE_MENUS {
  NAVIGATION = 'navigation',
  FOOTER = 'footer',
  LEGAL = 'legal',
  UNLINKED = 'unlinked',
  OFFLINE = 'offline'
}


type stringKey = Record<string, symbol>

export const EventKey: stringKey = {
  'navigation': Symbol('NAVIGATION'),
  'legal': Symbol('LEGAL')
}