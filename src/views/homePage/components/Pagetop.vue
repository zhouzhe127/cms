<template>
  <div class="topcontant">
    <NavBar />
    <div class="tab">
      <div v-for="(item, index) in itemArr" :key="index" class="tabitem">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/views/homePage/components/NavBar.vue'
const itemArr = [
  'NEW IN',
  'JEWELRY',
  'INSPIRATIONS',
  'DESIGNERS',
  'DISCOVER',
  'CONCIERGE'
]
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
    font-family: 'Brown Regular';
    .tabitem {
      padding: 0 10px;
      color: #8e9693;
    }
  }
}
</style>
