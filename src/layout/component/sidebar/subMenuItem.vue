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
      <!--      <second-side>-->
      <!--        <SideMenu>-->
      <!--          <MenuItem v-for="(item, index) in [1,2,3,4,5,6,7,8,32,11,23,34]" :key="index" />-->
      <!--        </SideMenu>-->
      <!--      </second-side>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import SecondSide from '@/components/SecondSide/index.vue'
import MenuItem from '@/components/SecondSide/MenuItem.vue'
import SideMenu from '@/components/SecondSide/SideMenu.vue'
import SiteBuilderMenu from '@/components/SiteBuilderMenu/index.vue'
import MarketingMenu from '@/components/MaketingMenu/index.vue'
import { shallowRef } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const currentComponent = shallowRef()
const routeMap = new Map([
  ['siteBuilder', SiteBuilderMenu],
  ['marketing', MarketingMenu]
])
currentComponent.value = routeMap.get(route.name)
</script>

<style lang="scss" scoped>
.sub-menu-bar {
  padding: 20px;
  .back {
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
}
</style>
