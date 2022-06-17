export interface SideItem {
  title?: string,
  leftIcon?: string,
  rightIcon?: string,
  icon?: string
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