export interface PublishData {
  publish_list?: PublishItem[]
  unPublish_list?: PublishItem[]
}

export interface PublishItem {
  id: string
  code: string
  gmt_modified: string
  site: string
  content_type: string
  page_title: string
  name: string
  slug: string
}
