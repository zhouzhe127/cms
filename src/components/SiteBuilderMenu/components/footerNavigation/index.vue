<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <SideDraggable :name="SITE_MENUS.FOOTER" :add-func="addFunc">
        <template #default="{ element, index, dragSetSide }">
          <MenuItem
            :class="{
              'drag-item': element.navigation.content_type !== PAGE_SELECT.LEGAL
            }"
            :title="element.navigation.name"
            :has-child="element.navigation.hasChild"
            :key="index"
            :is-empty="
              element.sub_navigation && element.sub_navigation.length <= 0
            "
            :center-icon="
              isLegal(element.navigation.content_type)
                ? PAGE_ICONS[PAGE_SELECT.LEGAL]
                : element.navigation.icon
            "
            :active="element.navigation.isActive"
            :has-left-icon="!isLegal(element.navigation.content_type)"
            :has-right-icon="!isLegal(element.navigation.content_type)"
            @left-click="() => deleteItem(element.navigation)"
            @right-click="() => chickEditWin(element.navigation)"
            @add="() => onSecAdd(element.navigation)"
          >
            <nested-draggable
              :draglist="element.sub_navigation"
              :parentId="element.navigation.id"
              :reset="dragSetSide"
              @right-click="item => chickEditWin(item, element.navigation.id)"
              @left-click="item => deleteItem(item, element.navigation.id)"
            ></nested-draggable>
            <DeleteDialog :visible="false" />
          </MenuItem>
        </template>
      </SideDraggable>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import { SideItem, SITE_MENUS } from '../../type'
import { addFunc } from '@/store/setBuilder/footerNavigation'
import DeleteDialog from './DeleteDialog.vue'
import { toSeletPage, toEditionModel } from '../../utils/router'
import store from '@/store'
import { showDeleteModel } from '../../utils/deleteUtils'
import { isLegal } from './utils'
import {
  PAGE_ICONS,
  PAGE_SELECT
} from '@/views/homePage/pageDialog/selectPage/index.type'
import NestedDraggable from '../NestedDraggable.vue'
import { navigationCreate } from '@/api/siteBuilder/navigation'

const setBuilder = store.setBuilder
const addPage = () => {
  toSeletPage({
    origin: SITE_MENUS.FOOTER
  })
}
const chickEditWin = (item: SideItem, pid?: string) => {
  toEditionModel(item)
}
const deleteItem = (item: SideItem, pid?: string) => {
  showDeleteModel(item, () => {
    // setBuilder.sideState[deleteFunc](item, pid)
  })
}
const onSecAdd = async (item: SideItem) => {
  if (isLegal(item.content_type)) {
    const baseLegal = {
      location: SITE_MENUS.FOOTER.toLocaleLowerCase(),
      page_title: 'Policy Title',
      name: 'Policy Title',
      content_type: PAGE_SELECT.POLICY.toLocaleLowerCase()
      // icon: PAGE_ICONS[PAGE_SELECT.POLICY]
    }
    const create = await navigationCreate({
      ...baseLegal,
      // icon: PAGE_ICONS[PAGE_SELECT.POLICY],
      parent_code: item.code
    })
    setBuilder.getSetBuilderList()
    return
  }
  toSeletPage({
    origin: SITE_MENUS.FOOTER,
    parentId: encodeURIComponent(item.id || item.title || ''),
    parent_code: item?.code
  })
}
</script>
