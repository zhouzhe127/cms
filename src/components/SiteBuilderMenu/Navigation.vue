<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <MenuItem v-for="(item, index) in sidearr" :key="index" :title="item.title" :center-icon="item.icon" @left-click="() => {deleteItem(item)}" @right-click="() => chickEditWin(item)">
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
// import { useEventBus } from '@vueuse/core'
import store from '@/store'
import { SITE_MENUS, SideItem } from './type'
import { onSideEvent } from './utils/regesterEvent'
import { addFunc } from '@/store/setBuilder/navigation'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { showDeleteModel } from './utils/deleteUtils'
import { toEditionModel, toSeletPage } from './utils/router'
onSideEvent(SITE_MENUS.NAVIGATION, (e: string, item: SideItem) => {
  setBuilder.sideState[addFunc](item)
  switch(item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.addNewPage()
      break
  }
})
const setBuilder = store.setBuilder
const sidearr = setBuilder.sideState[SITE_MENUS.NAVIGATION].sidebarArr
const addPage = () => {
  toSeletPage({ origin: SITE_MENUS.NAVIGATION })
}
const chickEditWin = (item: SideItem) => {
  toEditionModel(item)
}
const deleteItem = (item: SideItem) => {
  showDeleteModel(item, () => {})
}
</script>

<style scoped>

</style>