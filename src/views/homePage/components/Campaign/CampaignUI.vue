<template>
  <div class="campaignui">
    <div class="container">
      <div class="top">
        <img class="nimg" src="https://framerusercontent.com/modules/fxv7Wc3RferO8lceErMF/s4FHFbWZzj360mH1dIwB/assets/2048/Ho33nG5nBmgwQDIJ8Aq8ohemW4.png" alt="" />
      </div>
      <div class="text">
        cultivating a community of like-minded innovators , the future rocks serves as a stage for a constellation of jewelry brands from around the world with which it shares values of sustainability, innovation, and creativity.
      </div>
      <div class="gradbtn">MNJHS SN NMJA</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.campaignui {
  width: 100%;
  height: 645px;
  background: url('https://framerusercontent.com/modules/fxv7Wc3RferO8lceErMF/s4FHFbWZzj360mH1dIwB/assets/1024/NXOlDhcPq2LolZyiSOoPe5ZU.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 418px;
    .top {
      width: 100%;
      .nimg {
        width: 100%;
        object-fit: contain;
      }
    }
    .text {
      padding: 60px 0;
      font-size: 20px;
      color: #ffffff;
      line-height: 20px;
      font-weight: 400;
      text-align: center;
      white-space: pre-warp;
    }
    .gradbtn {
      margin: 0 auto;
      display: inline-block;
      padding: 18px;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
    }
  }
}
</style>