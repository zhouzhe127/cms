<template>
  <div class="sub-menu-bar">
    <div class="back">
      <router-link to="/home">
        <svg-icon icon-class="back" />
        <span>Dashboard</span>
      </router-link>
    </div>
    <div class="fun-menu">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SiteBuilderMenu from '@/components/SiteBuilderMenu/index.vue'
import MarketingMenu from '@/components/MaketingMenu/index.vue'
import { shallowRef } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routeName:any = route.name
const currentComponent = shallowRef()
const routeMap = new Map([
  ['siteBuilder', SiteBuilderMenu],
  ['marketing', MarketingMenu]
])
currentComponent.value = routeMap.get(routeName)
</script>

<style lang="scss" scoped>
.sub-menu-bar {
  //padding: 20px;
  .back {
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
    padding: 10px;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .fun-menu {
    padding: 20px;
  }
}
</style>
