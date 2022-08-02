import Pagetop from '@/views/homePage/components/Pagetop.vue'
import Cinema from '@/views/homePage/components/Cinema/index.vue'
import Titlebar from '@/views/homePage/components/Titlebar/index.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import Newsletter from '@/views/homePage/components/Newsletter/index.vue'
import InfoBlock from '@/views/homePage/components/InfoBlock/index.vue'
import FootContent from '@/views/homePage/components/Footer/index.vue'
import Shelve from '@/views/homePage/components/Shelve/index.vue'
import Media from '@/views/homePage/components/Media/index.vue'
import Article from '@/views/homePage/components/Article/index.vue'
import Campaign from '@/views/homePage/components/Campaign/index.vue'
import Designers from '@/views/homePage/components/DesBanner/index.vue'
import Markdown from '@/views/homePage/components/Markdown/index.vue'
import { Component } from 'vue'
export enum SITE_MODULES {
  PAGETOP = 'pagetop',
  CINEMA = 'cinema',
  ADDMODULE = 'addmodule',
  FOOTCONTENT = 'footer',
  NEWSLETTER = 'newsletter',
  INFOBLOCK = 'info_block',
  TITLEBAR = 'title_bar',
  SHELVE = 'shelf',
  MEDIA = 'media',
  ARTICLE = 'article',
  CAMPAIGN = 'campaign',
  DESIGNERS = 'designers',
  MARKDOWN = 'markdown',
}
type stringKey = Record<string, Component>
const ComponentsMap: stringKey = {
  [SITE_MODULES.PAGETOP]: Pagetop,
  [SITE_MODULES.CINEMA]: Cinema,
  [SITE_MODULES.ADDMODULE]: AddModule,
  [SITE_MODULES.FOOTCONTENT]: FootContent,
  [SITE_MODULES.NEWSLETTER]: Newsletter,
  [SITE_MODULES.INFOBLOCK]: InfoBlock,
  [SITE_MODULES.TITLEBAR]: Titlebar,
  [SITE_MODULES.SHELVE]: Shelve,
  [SITE_MODULES.MEDIA]: Media,
  [SITE_MODULES.ARTICLE]: Article,
  [SITE_MODULES.CAMPAIGN]: Campaign,
  [SITE_MODULES.DESIGNERS]: Designers,
  [SITE_MODULES.MARKDOWN]: Markdown,
}
export default ComponentsMap
