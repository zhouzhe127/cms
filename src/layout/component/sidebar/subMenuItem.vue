<template>
  <div class="sub-menu-bar">
    <div class="back">
      <router-link to="/home">
        <svg-icon icon-class="back" />
        <span>Dashboard</span>
      </router-link>
    </div>
    <div class="fun-menu">
      <component :is="currentMenuComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {menuStore} from "@/store/modules/menu";
import { storeToRefs } from "pinia";
const useMenuStore = menuStore()
const {currentMenuComponent} = storeToRefs(menuStore())
//const currentComponent = shallowRef(useMenuStore.currentMenuComponent)
useMenuStore.setCurrentMenuComponent()
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
