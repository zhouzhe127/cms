import Pagetop from '@/views/homePage/components/Pagetop.vue'
import Cinema from '@/views/homePage/components/Cinema/index.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import Newsletter from '@/views/homePage/components/Newsletter.vue'
import InfoBlock from '@/views/homePage/components/InfoBlock.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import { Component } from 'vue'
export enum SITE_MODULES {
  PAGETOP = 'Pagetop',
  CINEMA = 'Cinema',
  ADDMODULE = 'AddModule',
  FOOTCONTENT = 'FootContent',
  NEWSLETTER = 'Newsletter',
  INFOBLOCK = 'InfoBlock',
}
type stringKey = Record<string, Component>
const ComponentsMap: stringKey = {
  [SITE_MODULES.PAGETOP]: Pagetop,
  [SITE_MODULES.CINEMA]: Cinema,
  [SITE_MODULES.ADDMODULE]: AddModule,
  [SITE_MODULES.FOOTCONTENT]: FootContent,
  [SITE_MODULES.NEWSLETTER]: Newsletter,
  [SITE_MODULES.INFOBLOCK]: InfoBlock,
}
export default ComponentsMap
