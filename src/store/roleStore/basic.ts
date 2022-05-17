import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface IRoleBasic {
  name: string
}

export const roleBasic = defineStore('roleBasic', () => {
  const basic = reactive<IRoleBasic>({
    name: ''
  })

  function setItem(name: string) {
    basic.name = name
  }

  return { basic, setItem }
})
