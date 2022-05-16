import { defineStore } from 'pinia'
import { reactive } from 'vue'
interface Basic {
  platformState: string;
}

export const pageconfig = defineStore('pageconfig', () => {
  const basic = reactive<Basic>({
    platformState: 'pc',
  })

  function setItem(type:string) {
    console.log(type)
    basic.platformState = type
  }

  return { basic, setItem }
})