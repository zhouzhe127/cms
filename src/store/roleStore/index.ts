import { defineStore } from 'pinia'
import { roleBasic } from './basic'

type TProfession = 'warrior' | 'mage' | 'warlock'

// 角色组，汇聚「人物属性、装备、技能」3个store统一管理
export const roleStore = defineStore('roleStore', () => {
  // 注册组内store
  const basic = roleBasic()
  function changeProfession(profession: TProfession) {
    basic.setItem(profession)
  }

  return { basic, changeProfession }
})
