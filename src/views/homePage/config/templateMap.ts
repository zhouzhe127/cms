import Page from '@/views/homePage/pageTemplate/Page.vue'
import Plp from '@/views/homePage/pageTemplate/Plp.vue'
import Article from '@/views/homePage/pageTemplate/Article.vue'
import { Component } from 'vue'

export enum SITE_PAGETEMPLATE {
  PAGE = 'page',
  ARTICLE = 'article',
  PLP = 'plp',
  LINK = 'link',
  CLIP = 'clip',
  FOLDER = 'folder',
  SMART = 'smart'
}
type stringKey = Record<string, Component>
const TemplateMap:stringKey = {
  [SITE_PAGETEMPLATE.PAGE]: Page,
  [SITE_PAGETEMPLATE.PLP]: Plp,
  [SITE_PAGETEMPLATE.ARTICLE]: Article,
}

export default TemplateMap
