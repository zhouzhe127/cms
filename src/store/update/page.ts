import { getPublishList } from '@/api/update'
import { UpdateSideListItem } from '@/components/PageListItem/index.type'
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
  setCheckList: (data: UpdateSideListItem[]) => void
}
interface IBasicItem {
  publishedList: UpdateSideListItem[]
  publishList: UpdateSideListItem[]
  checkCardList: UpdateSideListItem[]
}
export const updatePageStore = defineStore('pageStore', (): ReturnType => {
  const basic: IBasicItem = reactive({
    publishedList: [],
    publishList:[],
    checkCardList: []
  })

  const publishGetList = async() => {
    const data = await getPublishList()
    basic.publishList = data?.publish_list?.map((item) => ({
      code: item.code,
      title: item.page_title,
      id: item?.id,
      iconsNames: PAGE_ICONS[item.content_type.toLocaleUpperCase()]
    })) || []

    basic.publishedList = data?.unPublish_list?.map((item) => ({
      code: item.code,
      title: item.page_title,
      id: item?.id,
      iconsNames: PAGE_ICONS[item.content_type.toLocaleUpperCase()]
    })) || [] 

    console.log(basic.publishedList)
  }

  const setCheckList = (data: UpdateSideListItem[]) => {
    basic.checkCardList = data
  }

  return { basic, publishGetList, setCheckList }
})