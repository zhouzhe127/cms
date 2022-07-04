<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in sidearr"
        :key="index"
        :title="item.title"
        :center-icon="item.icon"
        :has-left-icon="!isLegal(item)"
        :has-right-icon="!isLegal(item)"
        @left-click="() => deleteItem(item)"
        @right-click="() => chickEditWin(item)"
        @add="() => onAdd(item)"
      >
        <ItemChild
          v-for="(citem, cindex) in item.children"
          :key="`child_${cindex}`"
          :center-icon="citem.icon"
          :title="citem.title"
          @left-click="() => deleteItem(citem, item.id || item.title)"
          @right-click="() => chickEditWin(citem)"
        />
        <DeleteDialog :visible="false" />
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import { onSideEvent } from '@/components/SiteBuilderMenu/utils/regesterEvent'
import { computed } from 'vue'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import { SideItem, SITE_MENUS } from '../../type'
import {
  addChildFunc,
  addFunc,
  deleteFunc
} from '@/store/setBuilder/footerNavigation'
import DeleteDialog from './DeleteDialog.vue'
import { toSeletPage, toEditionModel } from '../../utils/router'
import store from '@/store'
import { showDeleteModel } from '../../utils/deleteUtils'
import { isLegal } from './utils'
import {
  PAGE_ICONS,
  PAGE_SELECT
} from '@/views/homePage/pageDialog/selectPage/index.type'

const setBuilder = store.setBuilder
onSideEvent(SITE_MENUS.FOOTER, (e: string, item: any) => {
  if (item.parentId) {
    setBuilder.sideState[addChildFunc](decodeURIComponent(item.parentId))(item)
    return
  }
  setBuilder.sideState[addFunc](item)
})
const sidearr = computed(
  () => store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
)
const addPage = () => {
  toSeletPage({
    origin: SITE_MENUS.FOOTER
  })
}
const chickEditWin = (item: SideItem) => {
  toEditionModel(item)
}
const deleteItem = (item: SideItem, pid?: string) => {
  showDeleteModel(item, () => {
    setBuilder.sideState[deleteFunc](item, pid)
  })
}
const onAdd = (item: SideItem) => {
  if (isLegal(item)) {
    const baseLegal = {
      title: 'Policy Title',
      type: PAGE_SELECT.POLICY,
      icon: PAGE_ICONS[PAGE_SELECT.POLICY]
    }
    setBuilder.sideState[addChildFunc](decodeURIComponent('Legal'))(baseLegal)
    return
  }
  toSeletPage({
    origin: SITE_MENUS.FOOTER,
    parentId: encodeURIComponent(item.id || item.title || '')
  })
}
</script>
