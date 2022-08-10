import { defineStore } from 'pinia'
import { updatePageStore } from './page'

export const update = defineStore('update', () => {
  const allModule = { ...updatePageStore() }

  return {
    basic: allModule.basic,
    publishGetList: allModule.publishGetList,
    setCheckList: allModule.setCheckList,
    getPageContent: allModule.getPageContent
  }
})
