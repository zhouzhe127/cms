<template>
  <div class="side_container">
    <slot />
    <!-- <div class="menu">
      <div class="menu_header">
        <span>NAVIGATION</span>
        <svg-icon icon-class="add_black" class="add" color="black" />
      </div>
      <div class="menu_container">
        <div v-for="(item, index) in [1,2,3,4,5,6,7,8,32,11,23,34]" :key="index" class="menu_item">
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
    </div> -->
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.side_container {
  width: 100%;
  height: 500px;
  overflow: auto;
  padding-top: 50px;
}
</style>