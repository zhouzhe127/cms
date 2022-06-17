import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar } from './sidebar'
import { sidebar as footerSlidebar } from './footerNavigation'
interface Basic {
  platformState: string,
  selectPageCallback?: Function
}

export const setBuilder = defineStore('setBuilder', () => {
  const sideState = { ...sidebar(), ...footerSlidebar()}

  const basic = reactive<Basic>({
    platformState: 'pc',
    selectPageCallback: () => {}
  })

  function setItem(type:string):void {
    basic.platformState = type
  }
  function setPageCallback (value: Function) {
    basic.selectPageCallback = value
  }
  return { basic, setItem, setPageCallback, sideState }
})
