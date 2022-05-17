<template>
  <div class="sub-menu-bar">
    <div class="back">
      <router-link to="/home">
        <svg-icon icon-class="back" />
        <span>Dashboard</span>
      </router-link>
    </div>
    <div class="fun-menu">对应功能菜单</div>
  </div>
</template>

<script setup lang="ts"></script>

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
