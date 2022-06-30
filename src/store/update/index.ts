import { UpdateSideListItem } from '@/components/PageListItem/index.type'
import { PAGE_ICONS, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { defineStore } from 'pinia'
import { publishCard } from './publishCard'
import { updateCard } from './updateCard'

export const update = defineStore('update', () => {
  const allModule = { ...updateCard(), ...publishCard() }

  return { allModule } as { allModule: typeof allModule}
})
