<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in sidearr"
        :key="index"
        :title="item.title"
        :center-icon="item.icon"
        @left-click="deleteItem"
        @right-click="chickEditWin"
      >
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
  </div>
</template>

<script setup lang="ts">
import tfrMessage from '@/components/TfrMessageBox'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import { useRouter } from 'vue-router'
import { SITE_MENUS } from '../../type'
import store from '@/store'
const router = useRouter()
const sidearr = store.setBuilder.sideState[SITE_MENUS.FOOTER].sidebarArr
const addPage = () => {
  router.push({
    path: '/siteBuilder/selectPage',
    query: { origin: SITE_MENUS.FOOTER }
  })
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editLinkPage',
  })
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>
