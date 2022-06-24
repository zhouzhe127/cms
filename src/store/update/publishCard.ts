import { UpdateSideListItem } from "@/components/PageListItem/index.type"
import { generateUUID } from "@/utils/uuid"
import { PAGE_ICONS, PAGE_SELECT } from "@/views/homePage/selectPage/index.type"
import { defineStore } from "pinia"

interface ReturnType {
  publishList: UpdateSideListItem[]
}


export const publishCard = defineStore('publishCard', ():ReturnType => {
  const publishList: UpdateSideListItem[] = [
    {
      id: generateUUID(),
      title:
        'publish TFR’s Women: Denni Elias, Lea Naumman On The Power Of Standing Out And Speaking Up',
      iconName: PAGE_ICONS[PAGE_SELECT.ARTICLE],
      date: new Date("2022-6-22 10:49").toISOString()
    },
    {
      id: generateUUID(),
      title:
        'publish Inspirations',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date("2022-6-22 10:20").toISOString()
    },
    {
      id: generateUUID(),
      title:
        'publish Designers',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date("2022-6-22 10:20").toISOString()
    },  
  ]

  return { publishList }
})