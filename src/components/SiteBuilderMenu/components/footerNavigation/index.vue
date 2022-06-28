<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in sidearr"
        :key="index"
        :title="item.title"
        :center-icon="item.icon"
        @left-click="() => deleteItem(item)"
        @right-click="chickEditWin"
        @add="() => onAdd(item)"
      >
        <ItemChild
          v-for="(citem, cindex) in item.children"
          @left-click="() => deleteItem(citem, item.id || item.title)"
          :key="`child_${cindex}`"
          :center-icon="citem.icon"
          :title="citem.title"
        />
        <DeleteDialog :visible="false"/>
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import { onSideEvent } from '@/components/SiteBuilderMenu/utils/regesterEvent'
import { computed, h, render } from 'vue'
import { useRouter } from 'vue-router'
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
import { toSeletPage } from '../../utils/router'
import store from '@/store'
import { showDeleteModel } from '../../utils/deleteUtils'

const router = useRouter()
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
  toSeletPage(router, {
    origin: SITE_MENUS.FOOTER,
  })
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editLinkPage'
  })
}
const deleteItem = (item: SideItem, pid?: string) => {
  showDeleteModel(item, () => {
    setBuilder.sideState[deleteFunc](item, pid)
  })
}
const onAdd = (item: SideItem) => {
  toSeletPage(router, {
    origin: SITE_MENUS.FOOTER,
    parentId: encodeURIComponent(item.id || item.title || '')
  })
}
</script>
