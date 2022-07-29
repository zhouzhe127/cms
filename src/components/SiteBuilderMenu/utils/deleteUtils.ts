import { PAGE_ICONS, PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { SideItem } from '../type'
import { TfrMessageBox } from '@/components/TfrMessageBox'
import { h } from 'vue'
import LinkShowCon from '../components/LinkShowCon.vue'
import { navigationDeleteTrust } from '@/api/siteBuilder/navigation'
import store from '@/store'
export const showDeleteModel = (item: SideItem, fn: Function) => {
  if (item?.type === PAGE_SELECT.SMART) {
    TfrMessageBox.confirm(
      'This folder contains other contents.\n\nPlease check before deleting.',
      { secTitle: `${item.content_type}?` }
    )
      .then((res: string) => {
        if (res === 'confirm') {
          sendDeleteApi(item.code)
          fn()
        }
      })
      .catch(() => {})
    return
  }
  TfrMessageBox.confirm(
    h(LinkShowCon, { title: item?.page_title, icon: PAGE_ICONS[item?.content_type?.toLocaleUpperCase() || 'POLICY'], content: item.url }),
    { secTitle: `${item.content_type}?` }
  )
    .then((res: string) => {
      if (res === 'confirm') {
        sendDeleteApi(item.code)
        fn()
      }
    })
    .catch(() => {})
}

export const sendDeleteApi = async (code?: string) => {
  console.log(code)
  await navigationDeleteTrust({ code })
  await store.setBuilder.getSetBuilderList()
}