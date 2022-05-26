<template>
  <div class="user">
    <span>title</span>
    <span>username</span>
    <svg-icon icon-class="logout" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
</style>
