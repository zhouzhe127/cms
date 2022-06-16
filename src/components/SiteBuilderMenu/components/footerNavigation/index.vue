<template>
  <div>
    <SideMenu title="FOOTER" @add-click="addPage">
      <MenuItem
        v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 32, 11, 23, 34]"
        :key="index"
        title="ss-2022"
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
const router = useRouter()
const addPage = () => {
  router.push({
    path: '/siteBuilder/selectPage'
  })
}
const chickEditWin = () => {
  router.push({
    path: '/siteBuilder/editLinkPage'
  })
}
const deleteItem = () => {
  tfrMessage.confirm('wqqqqqq')
}
</script>
