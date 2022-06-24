<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <MenuItem v-for="(item, index) in sidearr" :key="index" :title="item.title" :center-icon="item.icon" @left-click="deleteItem" @right-click="chickEditWin">
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import tfrMessage from '@/components/TfrMessageBox'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
// import { useEventBus } from '@vueuse/core'
import { useRouter } from 'vue-router'
import store from '@/store'
import { SITE_MENUS, SideItem } from './type'
import { onSideEvent } from './utils/regesterEvent'
import { addFunc } from '@/store/setBuilder/navigation'
import { PAGE_SELECT } from '@/views/homePage/selectPage/index.type'
onSideEvent(SITE_MENUS.NAVIGATION, (e: string, item: SideItem) => {
  console.log(item)
  setBuilder.sideState[addFunc](item)
  switch(item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.addNewPage()
      break
  }
})
const router = useRouter()
const setBuilder = store.setBuilder
const sidearr = setBuilder.sideState[SITE_MENUS.NAVIGATION].sidebarArr
const addPage = () => {
  router.push({
    path: '/siteBuilder/selectPage',
    query: { origin: SITE_MENUS.NAVIGATION }
  })
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editPage'
  })
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>

<style scoped>

</style>