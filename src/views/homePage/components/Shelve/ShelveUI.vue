<template>
  <div class="shelve-item">
    <div class="imgbox">
      <div class="imgstar">
        <img class="pric" src="https://framerusercontent.com/modules/IJMCmYONqb0JJCrbl69T/RpsAsAKyolq7x03XCRW0/assets/512/4m4BEfnGmf7jjFV1hM0EVtVEREM.png" alt="" />
      </div>
    </div>
    <div class="footbox">
      <div class="barbox">
        <div class="baritem active" />
        <div class="baritem yellow" />
        <div class="baritem pink" />
      </div>
      <div class="cl">Available in # colors</div>
      <div class="me">product name</div>
      <div class="cl">Brand Name</div>
      <div>Rsp 0000</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.shelve-item {
  width: 100%;
  .imgbox {
    height: 0;
    padding-bottom: 100%;
    background-color: #f8f8f8;
    position: relative;
    .imgstar {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      .pric {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .footbox {
    padding: 0 10px;
    .barbox {
      display: flex;
      padding: 20px 0 10px 0;
      .baritem {
        height: 5px;
        background-color: rgb(242, 242, 242);
        flex: 1;
        margin-right: 5px;
        &:last-child {
          margin-right: initial;
        }
      }
      .yellow {
        background-color: rgb(250, 237, 203);
      }
      .pink {
        background-color: rgb(250, 223, 214);
      }
    }
    .cl {
      font-size: 12px;
      font-family: 'Brown Light', serif;
      margin: 10px 0;
    }
  }
}
</style>
