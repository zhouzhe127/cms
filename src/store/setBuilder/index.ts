import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar } from './navigation'
import { sidebar as footerSlidebar } from './footerNavigation'
import { PageSchema, ComponentsSchema } from '@/views/homePage/type/index'
import { SITE_PAGETEMPLATE } from '@/views/homePage/config/templateMap'
interface Basic {
  platformState: string
  pageTemplate: PageSchema
}

export const setBuilder = defineStore(
  'setBuilder',
  () => {
    const sideState = { ...sidebar(), ...footerSlidebar() }

    const basic = reactive<Basic>({
      platformState: 'pc',
      pageTemplate: {
        title: '',
        template: '',
        properties: []
      }
    })
    function addNewPage(title?: string) {
      basic.pageTemplate.template = SITE_PAGETEMPLATE.PAGE
      basic.pageTemplate.title = title
      basic.pageTemplate.properties = []
    }
    function addPageModle(
      item: ComponentsSchema | Array<ComponentsSchema>,
      index: number
    ) {
      if (Array.isArray(item)) {
        basic.pageTemplate.properties = item
      } else {
        basic.pageTemplate.properties?.splice(index, 0, item)
      }
    }

    function setItem(type: string): void {
      basic.platformState = type
    }
    return { basic, setItem, addNewPage, addPageModle, sideState }
  },
  {
    persist: true
  }
)
