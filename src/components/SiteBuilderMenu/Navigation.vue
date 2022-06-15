<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <MenuItem v-for="(item, index) in sidearr" :key="index" :title="item.title" :center-icon="item.icon" @left-click="deleteItem" @right-click="chickEditWin">
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
    <PageSelectWin v-model="showPageWin" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tfrMessage from '@/components/TfrMessageBox'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import PageSelectWin from '@/components/PageSelectWin/index.vue'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'
const router = useRouter()
const sidearr = store.setBuilder.Sidestate.sidebarArr
const showPageWin = ref(false)
const addPage = () => {
  showPageWin.value = true
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editpage'
  })
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>

<style scoped>

</style>