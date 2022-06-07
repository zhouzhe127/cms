<template>
  <div>
    <second-side>
      <SideMenu title="NAVIGATION" @add-click="addPage">
        <MenuItem v-for="(item, index) in [1,2,3,4,5,6,7,8,32,11,23,34]" :key="index" title="ss-2022">
          <ItemChild title="mnns" />
        </MenuItem>
      </SideMenu>
    </second-side>
    <PageSelectWin v-model="showPageWin" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SecondSide from '@/components/SecondSide/index.vue'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
import PageSelectWin from '@/components/PageSelectWin/index.vue'
const showPageWin = ref(false)
const addPage = () => {
  showPageWin.value = true
}
</script>

<style>
.confirm-title-con {
  --framer-font-family: 'Brown Bold', serif;
  font-weight: 600;
}
</style>
