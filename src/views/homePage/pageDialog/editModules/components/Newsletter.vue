<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="newsletter">
        <div class="title">LOREM IPSUM</div>
        <div class="ms">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="inputbox">
          <div class="ueb">Your email address</div>
          <div class="ibt">LOREM IPSUM</div>
        </div>
        <div class="miue">
          By subscribing you agree with our Terms & Conditions and Privacy
          Policy. To opt out, click unsubscribe at the bottom of our emails.
        </div>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .newsletter {
    width: 406px;
    height: 406px;
    border: 1px black dashed;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin: 40px 0;
      font-size: 20px;
    }
    .ms {
      width: 285px;
      font-family: 'Brown Light', serif;
      text-align: center;
    }
    .inputbox {
      margin: 30px 0;
      width: 308px;
      height: 50px;
      border: 1px $theme solid;
      display: flex;
      line-height: 50px;
      .ueb {
        flex: 1;
        padding-left: 15px;
        color: #cecece;
      }
      .ibt {
        width: 133px;
        color: #ffffff;
        text-align: center;
        background-color: $theme;
      }
    }
    .miue {
      width: 305px;
      font-family: 'Brown Light', serif;
      text-align: center;
    }
  }
}
</style>
