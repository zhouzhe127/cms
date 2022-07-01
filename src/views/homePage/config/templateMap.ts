import Page from '@/views/homePage/pageTemplate/Page.vue'
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
const TemplateMap: stringKey = {
  [SITE_PAGETEMPLATE.PAGE]: Page
}

export default TemplateMap
