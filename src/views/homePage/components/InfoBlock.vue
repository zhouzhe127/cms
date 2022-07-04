<template>
  <div class="infobox_container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="infobox">
        <div class="nhes">
          <div class="pictop">
            <div class="dot" />
          </div>
          <div class="nt">LOREM IPSUM</div>
          <div class="lt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="nt">Action</div>
        </div>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
</script>

<style lang="scss" scoped>
.infobox_container {
  padding: 16px;
  .infobox {
    width: 100%;
    height: 295px;
    border: 1px black dashed;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nhes {
      width: 255px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .pictop {
      margin-top: 48px;
      width: 50px;
      height: 50px;
      background-color: #f8f8f8;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .dot {
        width: 18px;
        height: 18px;
        background-color: $theme;
        border-radius: 50%;
      }
    }
    .nt {
      margin: 20px 0;
    }
    .lt {
      padding: 0 20px;
      font-family: 'Brown Light', serif;
    }
  }
}
</style>
