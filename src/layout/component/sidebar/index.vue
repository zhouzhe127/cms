<template>
  <div class="sidebar-container">
    <LogoUser />
    <div v-if="route.name === 'home'">
      <MenuItem />
    </div>
    <div v-else>
      <SubMenuItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoUser from './logoUser.vue'
import MenuItem from './menuItem.vue'
import SubMenuItem from './subMenuItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.name)
</script>

<style scoped></style>
