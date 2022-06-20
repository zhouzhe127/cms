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
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
// import tfrMessage from '@/components/TfrMessageBox'
import { computed } from 'vue'
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
import { toSeletPage } from '../../utils/router'
import store from '@/store'

const router = useRouter()
const setBuilder = store.setBuilder
const sidearr = computed(
  () => store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
)
const addPage = () => {
  setBuilder.setPageCallback(setBuilder.sideState[addFunc])
  toSeletPage(router)
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editLinkPage'
  })
}
const deleteItem = (item: SideItem, pid?: string) => {
  setBuilder.sideState[deleteFunc](item, pid)
  // tfrMessage.confirm('wqqaqqqq')
}
const onAdd = (item: SideItem) => {
  setBuilder.setPageCallback(
    setBuilder.sideState[addChildFunc](item.id || item.title || '')
  )
  toSeletPage(router)
}
</script>
