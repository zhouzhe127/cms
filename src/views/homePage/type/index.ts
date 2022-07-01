export interface ComponentsSchema {
  componentName: string
}

export interface PageSchema {
  title?: string
  template?: string
  properties?: Array<ComponentsSchema>
}
