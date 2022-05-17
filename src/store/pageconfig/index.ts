import { defineStore } from 'pinia'
import { reactive } from 'vue'
interface Basic {
  platformState: string
}

export const pageconfig = defineStore('pageconfig', () => {
  const basic = reactive<Basic>({
    platformState: 'pc'
  })

  function setItem(type:string) {
    basic.platformState = type
  }

  return { basic, setItem }
})