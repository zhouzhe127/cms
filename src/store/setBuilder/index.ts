import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar } from './sidebar'
import { sidebar as footerSlidebar } from './footerNavigation'
interface Basic {
  platformState: string,
}

export const setBuilder = defineStore('setBuilder', () => {
  const sideState = { ...sidebar(), ...footerSlidebar()}

  const basic = reactive<Basic>({
    platformState: 'pc'
  })

  function setItem(type:string):void {
    basic.platformState = type
  }

  return { basic, setItem, sideState }
})
