import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { PageSchema, ComponentsSchema } from '@/views/homePage/type/index'
import { PLPDEFAULT } from '@/views/homePage/type/constant'
import { SideItem } from '@/components/SiteBuilderMenu/type/index'
import { SITE_PAGETEMPLATE } from '@/views/homePage/config/templateMap'
import { pageContentDetail, pageContentCreate, pageContentUpdate } from '@/api/siteBuilder/page'
import { disposeTemplateData, disposeSendData } from '@/utils/siteBuilder'
interface Basic {
  schema: PageSchema
}
interface ReturnType {
  basic: Basic
  addNewPage: (item: SideItem) => void
  addHomePage: (title?: string) => void
  addNewPlp: (title?: string) => void
  setPlpData: (data?: any) => void
  addChildModle: (item: ComponentsSchema, site: number, index: number) => void
  setChildModle: (item: ComponentsSchema, site: number, index: number) => void
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
        site_navigation_code: '',
        properties: []
      }
    })

    async function getPageDetail(code?: string) {
      const data:any = await pageContentDetail({ site_navigation_code: code })
      data.template = 'page'
      // basic.schema = disposeTemplateData(data)
      Object.assign(basic.schema, disposeTemplateData(data))
    }

    function addNewPage(item: SideItem) {
      basic.schema.template = SITE_PAGETEMPLATE.PAGE
      basic.schema.title = item.title
      basic.schema.properties = []
      basic.schema.site_navigation_code = item.code
      createPageContent(basic.schema)
    }

    function setPlpData(data: any) {
      Object.assign(basic.schema.plp, data)
    }

    function addNewPlp(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.PLP
      basic.schema.plp = PLPDEFAULT
      basic.schema.title = title
      basic.schema.properties = []
    }

    function addNewArticle(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.ARTICLE
      basic.schema.title = title
      basic.schema.properties = []
    }

    function addHomePage(title?: string) {
      basic.schema.template = SITE_PAGETEMPLATE.HOME_PAGE
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

    function setChildModle(
      item: ComponentsSchema,
      site: number,
      index: number
    ) {
      const pt = basic.schema.properties || []
      if (pt[site]) {
        const mn = pt[site] || {}
        mn.properties?.splice(index, 1, item)
      }
      updatePageContent(basic.schema)
    }

    async function createPageContent(data: any) {
      const reps = disposeSendData(data)
      await pageContentCreate(reps)
    }

    async function updatePageContent(data: any) {
      const reps:any = disposeSendData(data)
      await pageContentUpdate(reps)
    }

    return {
      basic,
      getPageDetail,
      addNewPage,
      addPageModle,
      addNewPlp,
      setPlpData,
      addChildModle,
      addNewArticle,
      addHomePage,
      setChildModle,
    }
  },
  {
    persist: true
  }
)
