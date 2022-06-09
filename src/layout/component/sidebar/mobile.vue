<template>
  <div class="menu-container">
    <div class="header">
      <TfrLogo />
      <svg-icon icon-class="down" @click="showMenuItemHandle" />
    </div>
    <template v-if="showMobileMenuItem">
      <template v-if="route.name === 'home'">
        <MenuItem />
        <User />
      </template>
      <SubMenuItem v-else />
    </template>
  </div>
</template>

<script setup lang="ts">
import TfrLogo from '@/components/TfrLogo/index.vue'
import MenuItem from './menuItem.vue'
import User from './user.vue'
import SubMenuItem from './subMenuItem.vue'
import { useRoute, useRouter } from 'vue-router'
import { appStore } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
const route = useRoute()
const router = useRouter()
const { showMobileMenuItem } = storeToRefs(appStore())
const showMenuItemHandle = () => {
  if (route.name === 'home') {
    showMobileMenuItem.value = !showMobileMenuItem.value
  } else {
    router.push({ path: '/home' })
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background-color: $bg;
  .header {
    width: 100%;
    padding: 20px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .tfr-logo {
      width: 64px;
      height: 40px;
    }
    .svg-icon {
      font-size: 30px;
    }
  }
  .menu-bar {
    padding: 0 20px;
  }
  .user {
    padding: 20px;
    margin-top: 0;
  }
}
</style>
