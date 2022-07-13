<template>
  <div class="card-view">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex-wrap: wrap;
}
</style>
