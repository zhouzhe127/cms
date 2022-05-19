<template>
  <div class="logo-user">
    <div class="logo">
      <TfrLogo />
    </div>
    <div class="user">
      <span>title</span>
      <span>username</span>
      <svg-icon icon-class="logout" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TfrLogo from '@/components/TfrLogo/index.vue'
</script>

<style lang="scss" scoped>
.logo-user {
  padding: 30px;
  .user {
    margin-top: 20px;
    span {
      font-size: 14px;
      margin-right: 10px;
    }
    span:last-of-type {
      font-family: 'San Francisco';
    }
    svg {
      width: 20px;
      height: 20px;
      font-size: 20px;
    }
  }
}
</style>
