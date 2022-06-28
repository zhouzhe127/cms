<template>
  <div>
    <SideMenu title="LEGAL" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in sidearr"
        :key="index"
        :title="item.title"
        :center-icon="item.icon"
        @left-click="() => deleteItem(item)"
        @right-click="() => chickEditWin(item)"
        @add="() => onAdd(item)"
      >
        <ItemChild
          v-for="(citem, cindex) in item.children"
          @left-click="() => deleteItem(citem, item.id || item.title)"
          :key="`child_${cindex}`"
          :center-icon="citem.icon"
          :title="citem.title"
          @right-click="() => chickEditWin(citem)"
        />
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import { SideItem, SITE_MENUS } from './type'
import {
  addFunc,
  deleteFunc,
  addChildFunc
} from '@/store/setBuilder/legalNavigation'
import { onSideEvent } from './utils/regesterEvent'
import { toEditionModel, toSeletPage } from './utils/router'
import store from '@/store'
import { showDeleteModel } from './utils/deleteUtils'
const setBuilder = store.setBuilder
onSideEvent(SITE_MENUS.LEGAL, (e: string, item: any) => {
  if (item.parentId) {
    setBuilder.sideState[addChildFunc](decodeURIComponent(item.parentId))(item)
    return
  }
  setBuilder.sideState[addFunc](item)
})
const sidearr = computed(
  () => store.setBuilder.sideState[SITE_MENUS.LEGAL].sidebarArr
)
const addPage = () => {
  toSeletPage({
    origin: SITE_MENUS.LEGAL
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
  toSeletPage({
    origin: SITE_MENUS.LEGAL,
    parentId: encodeURIComponent(item.id || item.title || '')
  })
}
</script>

<style scoped></style>
