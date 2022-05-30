<template>
  <div class="logo-user">
    <TfrLogo />
    <User />
  </div>
  <MenuItem v-if="route.name === 'home'" />
  <SubMenuItem v-else />
</template>

<script setup lang="ts">
import TfrLogo from '@/components/TfrLogo/index.vue'
import User from './user.vue'
import MenuItem from './menuItem.vue'
import SubMenuItem from './subMenuItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.logo-user {
  padding: 30px;
}
</style>
