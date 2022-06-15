import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { sidebar } from './sidebar'
interface Basic {
  platformState: string
}

export const setBuilder = defineStore('setBuilder', () => {
  const sideState = sidebar()
  const basic = reactive<Basic>({
    platformState: 'pc'
  })

  function setItem(type:string):void {
    basic.platformState = type
  }

  return { basic, setItem, ...sideState }
})
