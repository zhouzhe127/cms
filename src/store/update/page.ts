import { pageContentDetail } from '@/api/siteBuilder/page'
import { getPublishList } from '@/api/update'
import { UpdateSideListItem } from '@/components/PageListItem/index.type'
import { disposeTemplateData } from '@/utils/siteBuilder'
import { generateUUID } from '@/utils/uuid'
import {
  PAGE_ICONS,
  PAGE_SELECT
} from '@/views/homePage/pageDialog/selectPage/index.type'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface ReturnType {
  basic: IBasicItem,
  publishGetList: () => {},
  setCheckList: (data: UpdateSideListItem[]) => void,
  getPageContent: (code: string) => void
}
interface IBasicItem {
  publishedList: UpdateSideListItem[]
  publishList: UpdateSideListItem[]
  checkCardList: UpdateSideListItem[]
  schema: {
    title: string
    template: string
    site_navigation_code: string
    properties: any[]
  }
}
export const updatePageStore = defineStore('pageStore', (): ReturnType => {
  const basic: IBasicItem = reactive({
    publishedList: [],
    publishList:[],
    checkCardList: [],
    schema: {
      title: '',
      template: '',
      site_navigation_code: '',
      properties: []
    }
  })

  const publishGetList = async() => {
    const data = await getPublishList()
    basic.publishList = data?.unPublish_list?.map((item) => ({
      code: item.code,
      title: item.page_title,
      id: item?.id,
      iconsNames: PAGE_ICONS[item.content_type.toLocaleUpperCase()]
    })) || []

    basic.publishedList = data?.publish_list?.map((item) => ({
      code: item.code,
      title: item.page_title,
      id: item?.id,
      iconsNames: PAGE_ICONS[item.content_type.toLocaleUpperCase()]
    })) || [] 

    if (basic.publishList[0].code) getPageContent(basic.publishList[0].code)
  }

  const getPageContent = async (code: string) => {
    const data:any = await pageContentDetail({ site_navigation_code: code })
      data.template = 'page'
      // basic.schema = disposeTemplateData(data)
      Object.assign(basic.schema, disposeTemplateData(data))
  }

  const setCheckList = (data: UpdateSideListItem[]) => {
    basic.checkCardList = data
  }

  return { basic, publishGetList, setCheckList, getPageContent }
})