<template>
  <div class="logo-user">
    <div class="logo">
      <svg-icon icon-class="logo" />
    </div>
    <div class="user">
      <span>title</span>
      <span>username</span>
      <svg-icon icon-class="logout" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo-user {
  padding: 30px;
  .logo {
    width: 97px;
    height: 60px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
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
