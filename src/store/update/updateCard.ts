import { generateUUID } from '@/utils/uuid'
import { UpdateSideListItem } from '@/components/PageListItem/index.type'
import { PAGE_ICONS, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { defineStore } from 'pinia'

interface ReturnType {
  updateList: UpdateSideListItem[],
  checkCardList: UpdateSideListItem[]
}

export const updateCard = defineStore('updateCard', (): ReturnType => {
  const updateList: UpdateSideListItem[] = [
    {
      id: generateUUID(),
      title:
        'TFR’s Women: Denni Elias, Lea Naumman On The Power Of Standing Out And Speaking Up',
      iconName: PAGE_ICONS[PAGE_SELECT.ARTICLE],
      date: new Date('2022-6-22 10:49').toISOString()
    },
    {
      id: generateUUID(),
      title: 'Inspirations',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date('2022-6-22 10:20').toISOString()
    },
    {
      id: generateUUID(),
      title: 'Designers',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date('2022-6-22 10:20').toISOString()
    }
  ]

  const checkCardList: UpdateSideListItem[] = [
    {
      id: generateUUID(),
      title:
        'TFR’s Women: Denni Elias, Lea Naumman On The Power Of Standing Out And Speaking Up 121321231',
      iconName: PAGE_ICONS[PAGE_SELECT.ARTICLE],
      date: new Date('2022-6-22 10:49').toISOString()
    },
    {
      id: generateUUID(),
      title: 'Inspirations',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date('2022-6-22 10:20').toISOString()
    },
    {
      id: generateUUID(),
      title: 'Designers',
      iconName: PAGE_ICONS[PAGE_SELECT.CLIP],
      date: new Date('2022-6-22 10:20').toISOString()
    }
  ]
  return { updateList, checkCardList }
})
