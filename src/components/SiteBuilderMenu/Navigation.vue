<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <SideDraggable :name="SITE_MENUS.NAVIGATION" :add-func="addFunc">
        <template #default="{element, index, dragSetSide}">
          <MenuItem
            :title="element.navigation.name"
            :has-child="element.navigation.hasChild"
            :key="element.navigation.id"
            :is-empty="element.sub_navigation && element.sub_navigation.length <= 0"
            :center-icon="element.navigation.icon"
            :active="element.navigation.isActive"
            @click-item="getPageData(element)"
            @left-click="() => {deleteItem(element)}"
            @right-click="chickEditWin(element)">
            <nested-draggable :draglist="element.sub_navigation" :parentId="element.navigation.id" :reset="dragSetSide" />
          </MenuItem>
        </template>
      </SideDraggable>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import store from '@/store'
import { SITE_MENUS, SideItem, RequestSide } from './type'
import { addFunc, deleteFunc } from '@/store/setBuilder/navigation'
import { showDeleteModel } from './utils/deleteUtils'
import { toEditionModel, toSeletPage } from './utils/router'
import NestedDraggable from './components/NestedDraggable.vue'
import SideDraggable from './components/SideDraggable.vue'
import { getPageData, sideEvent } from './utils/common'
sideEvent(SITE_MENUS.NAVIGATION)
const setBuilder = store.setBuilder
const addPage = () => {
  toSeletPage({ origin: SITE_MENUS.NAVIGATION })
}
const chickEditWin = (item: SideItem) => {
  toEditionModel(item)
}
const deleteItem = (item: RequestSide) => {
  showDeleteModel(item.navigation, () => {
    setBuilder.sideState[deleteFunc](item)
  })
}
</script>

<style scoped></style>
