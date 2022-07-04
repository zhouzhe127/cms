<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <draggable v-model="sidearr" v-bind="dragOptions" :component-data="{ tag: 'div', name: 'flip-list', type: 'transition' }" group="side" item-key="title" @start="isDragging = true" @end="isDragging = false">
        <template #item="{element, index}">
          <MenuItem :title="element.title" :key="index" :center-icon="element.icon" @left-click="() => {deleteItem(element)}" @right-click="chickEditWin(element)">
            <ItemChild title="mnns" />
          </MenuItem>
        </template>
      </draggable>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'
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
  switch (item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.addNewPage()
      break
    case PAGE_SELECT.PLP:
      setBuilder.addNewPlp()
      break
  }
})
const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
const isDragging = ref(false)
const setBuilder = store.setBuilder
const sidearr = computed({
  get() {
    return setBuilder.sideState[SITE_MENUS.NAVIGATION].sidebarArr
  },
  set(value: any) {
    console.log(value)
  }
})
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

<style scoped></style>
