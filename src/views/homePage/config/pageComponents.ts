import Pagetop from '@/views/homePage/components/Pagetop.vue'
import Banner from '@/views/homePage/components/Banner.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import { Component } from 'vue'
export enum SITE_MODULES {
  PAGETOP = 'Pagetop',
  CINEMA = 'Cinema',
  ADDMODULE = 'AddModule',
  FOOTCONTENT = 'FootContent'
}
type stringKey = Record<string, Component>
const ComponentsMap: stringKey = {
  [SITE_MODULES.PAGETOP]: Pagetop,
  [SITE_MODULES.CINEMA]: Banner,
  [SITE_MODULES.ADDMODULE]: AddModule,
  [SITE_MODULES.FOOTCONTENT]: FootContent
}
export default ComponentsMap
