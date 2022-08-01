export interface ComponentsSchema {
  componentName: string,
  properties?: Array<ComponentsSchema>
}

export interface PageSchema {
  title?: string
  template?: string
  site_navigation_code?: string
  plp?: any
  properties?: Array<ComponentsSchema>
}

export enum ARTICLE_REGULAR {
  FULL_WIDTH = 'full_width',
  PADDING = 'padding'
}