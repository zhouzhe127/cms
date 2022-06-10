<template>
  <div>
    <SideMenu title="NAVIGATION" @add-click="addPage">
      <MenuItem v-for="(item, index) in [1,2,3]" :key="index" title="ss-2022" @left-click="deleteItem" @right-click="chickEditWin">
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
    <PageSelectWin v-model="showPageWin" />
    <EditPageInfoWin v-model="showEdit" title="PAGE SETTINGS" :side-arr="sideArr" />
    <EditPageInfoWin v-model="showModules" :has-search="true" title="CONTENT MODULES" aside-width="240px" rightbtn="APPLY" :side-arr="modulesArr" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tfrMessage from '@/components/TfrMessageBox'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import PageSelectWin from '@/components/PageSelectWin/index.vue'
import EditPageInfoWin from '@/components/SiteBuilderMenu/EditPageInfoWin.vue'
import sideArr from '@/components/SiteBuilderMenu/setPage'
import modulesArr from '@/components/SiteBuilderMenu/setModules'
const showPageWin = ref(false)
const showEdit = ref(false)
const showModules = ref(false)
const addPage = () => {
  showPageWin.value = true
}
const chickEditWin = () => {
  showModules.value = true
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>

<style scoped>

</style>