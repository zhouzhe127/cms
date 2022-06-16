<template>
  <div class="link-show-con">
    <header>
      <div class="title">FAQ</div>
      <svg-icon icon-class="link" />
    </header>
    <div class="show-con">intercom('show');</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.link-show-con {
  width: 100%;
  padding: 20px;
  background-color: #f9f8f8;
  margin-bottom: 10px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5px;
    margin-top: 0px;
    .title {
      width: 100%;
      margin-right: 5px;
      color: $theme;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .show-con {
    font-size: 12px;
    color: $theme;
  }
}
</style>
