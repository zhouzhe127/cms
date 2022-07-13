<template>
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
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .newsletter {
    padding: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-bottom: 40px;
      font-size: 20px;
    }
    .ms {
      font-family: 'Brown Light', serif;
      text-align: center;
    }
    .inputbox {
      width: 100%;
      margin: 30px 0;
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
</style>