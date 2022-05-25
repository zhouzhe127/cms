<template>
  <div class="topcontant">
    <div class="aside">
      <img src="@/assets/image/top.png" alt="">
    </div>
    <div class="tab">
      <div v-for="(item, index) in itemArr" :key="index" class="tabitem">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const itemArr = ['NEW IN', 'JEWELRY', 'INSPIRATIONS', 'DESIGNERS', 'DISCOVER', 'CONCIERGE']
</script>

<style lang="scss" scoped>
.topcontant {
  .aside {
    width: 100%;
    img {
      display: inline-block;
      width: 100%;
      object-fit: cover;
    }
  }
  .tab {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    font-size: 14px;
    font-family: "Brown Regular";
    .tabitem {
      padding: 0 10px;
      color: #8E9693;
    }
  }
}
</style>
