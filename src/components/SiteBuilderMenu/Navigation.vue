<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <MenuItem v-for="(item, index) in sidearr" :key="index" :title="item.title" :center-icon="item.icon" @left-click="deleteItem" @right-click="chickEditWin">
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
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'
const router = useRouter()
const sidearr = store.setBuilder.sideState.Sidestate.sidebarArr
const addSidebar = store.setBuilder.sideState.addSidebar
store.setBuilder.sideState.setPageCallback(addSidebar)

const addPage = () => {
  router.push({
    path: '/siteBuilder/selectPage'
  })
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editPage'
  })
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>

<style scoped>

</style>