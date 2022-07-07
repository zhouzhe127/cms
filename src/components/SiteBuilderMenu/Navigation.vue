<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <draggable v-model="sidearr" v-bind="dragOptions" :component-data="{ tag: 'div', name: 'flip-list', type: 'transition', sideState: SITE_MENUS.NAVIGATION }" group="side" item-key="title" @start="isDragging = true" @end="onEndCallback">
        <template #item="{element, index}">
          <MenuItem :title="element.navigation.name" :has-child="element.navigation.hasChild" :key="index" :center-icon="element.navigation.icon" @left-click="() => {deleteItem(element)}" @right-click="chickEditWin(element)">
            <nested-draggable :draglist="element.sub_navigation" :parentId="element.navigation.id" :reset="dragSetSide" />
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
// import { useEventBus } from '@vueuse/core'
import store from '@/store'
import { SITE_MENUS, SideItem, EVENT_KEY } from './type'
import { emitSideEvent, onSideEvent } from './utils/regesterEvent'
import { addFunc, deleteFunc } from '@/store/setBuilder/navigation'
import { PAGE_SELECT } from '@/views/homePage/pageDialog/selectPage/index.type'
import { showDeleteModel } from './utils/deleteUtils'
import { toEditionModel, toSeletPage } from './utils/router'
import NestedDraggable from './components/NestedDraggable.vue'
onSideEvent(SITE_MENUS.NAVIGATION, (e: string, item: SideItem) => {
  switch (item.title) {
    case PAGE_SELECT.PAGE:
      setBuilder.pageState.addNewPage()
      break
    case PAGE_SELECT.PLP:
      setBuilder.pageState.addNewPlp()
      break
    case PAGE_SELECT.ARTICLE:
      setBuilder.pageState.addNewArticle()
      break
  }
})
onSideEvent(EVENT_KEY.DRAG, (e: string, item: any) => {
  if (item.newModule === SITE_MENUS.NAVIGATION) setBuilder.sideState[addFunc](item.item, item.newIndex)
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
    dragSetSide(value)
  }
})
const dragSetSide = (value: any, parentId?: string) => {
  if(parentId) {
    sidearr.value.forEach((v: any) => {
      if (v.navigation.id === parentId) {
        v.sub_navigation = value
      }
    })
  } else {
    setBuilder.sideState[addFunc](value)
  }
}
const addPage = () => {
  toSeletPage({ origin: SITE_MENUS.NAVIGATION })
}
const chickEditWin = (item: SideItem) => {
  toEditionModel(item)
}
const deleteItem = (item: SideItem) => {
  showDeleteModel(item, () => {})
}
const onEndCallback = (evt: any) => {
  isDragging.value = false
  // const item = {
  //   ...sidearr.value[evt.oldIndex]
  // }
  // setBuilder.sideState[deleteFunc](item)
  // const dragEmit = emitSideEvent(EVENT_KEY.DRAG)
  // if (dragEmit)
  //   dragEmit(EVENT_KEY.DRAG, {
  //     item,
  //     newIndex: evt.newIndex,
  //     oldModule: SITE_MENUS.NAVIGATION,
  //     newModule: evt.to.getAttribute('sideState')
  //   })
}
</script>

<style scoped></style>
