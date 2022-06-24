import Page from '@/views/homePage/pageTemplate/Page.vue'
import { Component } from 'vue'

export enum SITE_PAGETEMPLATE {
  PAGE = 'page'
}
type stringKey = Record<string, Component>
const TemplateMap:stringKey = {
  [SITE_PAGETEMPLATE.PAGE]: Page
}

export default TemplateMap