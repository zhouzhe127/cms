<template>
  <second-side>
    <SideMenu title="NAVIGATION">
      <MenuItem v-for="(item, index) in [1,2,3,4,5,6,7,8,32,11,23,34]" :key="index" title="ss-2022">
        <ItemChild title="mnns" />
      </MenuItem>
    </SideMenu>
  </second-side>
</template>

<script setup lang="ts">
import SecondSide from '@/components/SecondSide/index.vue'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import ItemChild from '@/components/SecondSide/ItemChild.vue'
</script>

<style scoped></style>
