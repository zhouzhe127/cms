<template>
  <div>
    <div class="menu_item">
      <div class="itemlist">
        <div class="hidden">
          <svg-icon icon-class="delete_red" class="sicon" />
        </div>
        <div>
          <svg-icon icon-class="home" class="sicon" />
        </div>
        <div>
          New in
        </div>
        <div class="hidden">
          <svg-icon icon-class="tool_gray" class="sicon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.menu_item {
  padding: 10px 0;
  .itemlist {
    height: 40px;
    padding: 0 10px;
    line-height: 20px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 20px 20px 1fr 20px;
    grid-gap: 10px;
    align-items: center;
    cursor: pointer;
    .sicon {
      font-size: 24px;
    }
    .hidden {
      opacity: 0;
      transition: opacity .5s;
      transition: .5s;
    }
    &:hover {
      background-color: #ffffff;
      .hidden {
        opacity: 1;
      }
    }
  }
}
</style>