import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar } from './sidebar'
import { sidebar as footerSlidebar } from './footerNavigation'
import { sidebar as legalSlidebar } from './legalNavigation'
interface Basic {
  platformState: string
  selectPageCallback?: Function
  currentSelectParent?: string
}

export const setBuilder = defineStore('setBuilder', () => {
  const sideState = { ...sidebar(), ...footerSlidebar(), ...legalSlidebar() }

  const basic = reactive<Basic>({
    platformState: 'pc',
    selectPageCallback: () => {}
  })

  function setItem(type: string): void {
    basic.platformState = type
  }
  function setPageCallback(value: Function) {
    basic.selectPageCallback = value
  }
  function setCurrentSelectParent(id?: string) {
    basic.currentSelectParent = id || ''
  }
  return { basic, setItem, setPageCallback, sideState, setCurrentSelectParent }
})
