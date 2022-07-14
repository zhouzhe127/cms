import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { PageSchema, ComponentsSchema } from '@/views/homePage/type/index'
import { SITE_PAGETEMPLATE } from '@/views/homePage/config/templateMap'
import { pageContentDetail } from '@/api/siteBuilder/page'
import { disposeTemplateDate } from '@/utils/siteBuilder'
interface Basic {
  schema: PageSchema
}
interface ReturnType {
  basic: Basic
  addNewPage: (title?: string) => void
  addNewPlp: (title?: string) => void
  addChildModle: (item: ComponentsSchema, site: number, index: number) => void
  addNewArticle: (title?: string) => void
  getPageDetail: (code?: string) => void
  addPageModle: (
    item: ComponentsSchema | Array<ComponentsSchema>,
    index: number
  ) => void
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
    async function getPageDetail(code?: string) {
      const data:any = await pageContentDetail({ site_navigation_code: code })
      data.template = 'page'
      // basic.schema = disposeTemplateDate(data)
      Object.assign(basic.schema, disposeTemplateDate(data))
    }
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
    function addChildModle(
      item: ComponentsSchema,
      site: number,
      index: number
    ) {
      const pt = basic.schema.properties || []
      if (pt[site]) {
        const mn = pt[site] || {}
        mn.properties?.splice(index, 0, item)
      }
    }

    return {
      basic,
      getPageDetail,
      addNewPage,
      addPageModle,
      addNewPlp,
      addChildModle,
      addNewArticle
    }
  },
  {
    persist: true
  }
)
