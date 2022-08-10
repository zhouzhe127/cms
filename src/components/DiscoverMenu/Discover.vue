<template>
  <div>
    <SideMenu title="DISCOVER" :has-title-icon="true" @add-click="addPage">
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
            @right-click="chickEditWin(element)"
            @add="addChild(element.navigation)"
          >
            <nested-draggable
              :draglist="element.sub_navigation"
              :parentId="element.navigation.id"
              :reset="dragSetSide"
              :name="SITE_MENUS.NAVIGATION"
              :parentCode="element.navigation.code"
            />
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
import { SITE_MENUS, SideItem, RequestSide } from '@/components/SiteBuilderMenu/type'
import { addFunc, deleteFunc } from '@/store/setBuilder/navigation'
import { showDeleteModel } from '@/components/SiteBuilderMenu/utils/deleteUtils'
import { toEditionModel, toSeletPage } from '@/components/SiteBuilderMenu/utils/router'
import NestedDraggable from '@/components/SiteBuilderMenu/components/NestedDraggable.vue'
import SideDraggable from '@/components/SiteBuilderMenu/components/SideDraggable.vue'
import { getPageData, sideEvent, addSideChild } from '@/components/SiteBuilderMenu/utils/common'
sideEvent(SITE_MENUS.NAVIGATION)
const setBuilder = store.setBuilder
const addPage = () => {
  toSeletPage({ origin: SITE_MENUS.NAVIGATION })
}
const chickEditWin = (item: SideItem) => {
  toEditionModel(item.navigation)
}
const deleteItem = (item: RequestSide) => {
  showDeleteModel(item.navigation, () => {
    setBuilder.sideState[deleteFunc](item)
  })
}
const addChild = (item: SideItem) => {
  addSideChild(item, SITE_MENUS.NAVIGATION)
}
</script>

<style scoped></style>
