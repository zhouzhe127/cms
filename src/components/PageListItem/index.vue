<template>
  <div class="page-base-card">
    <div class="item">
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <PageListItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageListItem from './PageListItem.vue'
</script>

<style lang="scss" scoped>
.page-base-card {
  width: 100%;
  .item {
    padding: 10px;
    border-radius: 15px;
    min-height: 60px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: $theme;
    .icon {
      width: 30px;
      height: 30px;
      fill: #fc7e7e;
    }
  }
  .item:hover {
    background-color: #fff;
    .icon {
      opacity: 0.8;
    }
  }
}
</style>
