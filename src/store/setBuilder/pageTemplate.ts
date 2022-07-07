import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { PageSchema, ComponentsSchema } from '@/views/homePage/type/index'
import { SITE_PAGETEMPLATE } from '@/views/homePage/config/templateMap'

interface Basic {
  schema: PageSchema
}
interface ReturnType {
  basic: Basic
  addNewPage: (title?: string) => void
  addNewPlp: (title?: string) => void
  addNewArticle: (title?: string) => void
  addPageModle: (item: ComponentsSchema | Array<ComponentsSchema>, index: number) => void
}
export const pageTemplate = defineStore(
  'pageTemplate',
  (): ReturnType => {
    const basic = reactive<Basic>({
      schema: {
        title: '',
        template: '',
        properties: []
      }
    })
    function addNewPage(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.PAGE
      basic.schema.title = title
      basic.schema.properties = []
    }
    function addNewPlp(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.PLP
      basic.schema.title = title
      basic.schema.properties = []
    }
    function addNewArticle(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.ARTICLE
      basic.schema.title = title
      basic.schema.properties = []
    }
    function addPageModle(
      item: ComponentsSchema | Array<ComponentsSchema>,
      index: number
    ) {
      if (Array.isArray(item)) {
        basic.schema.properties = item
      } else {
        basic.schema.properties?.splice(index, 0, item)
      }
    }

    return { basic, addNewPage, addPageModle, addNewPlp, addNewArticle }
  },
  {
    persist: true
  }
)
