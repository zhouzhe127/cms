export interface UpdateSideListItem {
  id?: string
  title: string
  date?: string
  iconName?: string
}

export interface EditClearBinItem {
  code: string
  content_type: string
  deleted: number
  name: string
  page_title: string
  gmt_create: string
}