<template>
  <div class="discover">
    <div class="tag base-text mb30">STYLE</div>
    <div class="title mb30">
      TFR’s Valentines:<br />
      3 Fashion Creatives on Love Languages & Unconventional <br />
      V-Day Traditions
    </div>
    <div class="introduction mb30">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="user base-text">Words by Someone</div>
    <div class="date base-text">1 Mar 2022</div>
    <div class="book">
      <div class="title base-text">LOOKBOOK</div>
      <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.discover {
  text-align: center;
  color: $theme;
  .mb30 {
    margin-bottom: 30px;
  }
  .base-text {
    font-family: 'Brown Regular', serif;
    font-size: 14px;
  }
  & > .title {
    font-size: 36px;
    font-family: 'Signifier Regular', serif;
    white-space: pre-line;
  }
  .introduction {
    font-family: 'Brown Regular', serif;
    font-size: 18px;
  }
  .date.base-text {
    font-family: 'Brown Light', serif;
  }
  .user {
    margin-bottom: 10px;
  }
  .book {
    margin-top: 60px;
    .title {
      font-size: 12px;
    }
    .container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box {
        background-color: #f8f8f8;
        width: 33%;
        padding-bottom: 33%;
        margin-top: 20px;
      }
    }
  }
}
</style>
