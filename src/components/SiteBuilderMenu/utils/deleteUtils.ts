import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { SideItem } from '../type'
import { TfrMessageBox } from '@/components/TfrMessageBox'
import { h } from 'vue'
import LinkShowCon from '../components/LinkShowCon.vue'

export const showDeleteModel = (item: SideItem, fn: Function) => {
  if (item?.type === PAGE_SELECT.SMART) {
    TfrMessageBox.confirm(
      'This folder contains other contents.\n\nPlease check before deleting.',
      { secTitle: `${item.type}?` }
    )
      .then((res: string) => {
        if (res === 'confirm') fn()
      })
      .catch(() => {})
    return
  }
  TfrMessageBox.confirm(
    h(LinkShowCon, { title: item?.title, icon: item.icon, content: item.url }),
    { secTitle: `${item.type}?` }
  )
    .then((res: string) => {
      if (res === 'confirm') fn()
    })
    .catch(() => {})
}
