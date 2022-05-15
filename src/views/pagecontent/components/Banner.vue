<template>
  <div class="banner_content">
    <video src="https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4" muted autoplay loop class="showitem" />
    <div class="textdec">
      <div class="br">First Diamond</div>
      <div class="tb">new rocks for new experiences</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.banner_content {
  width: 100%;
  height: 560px;
  position: relative;
  .showitem {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textdec {
    position: absolute;
    left: 35px;
    bottom: 75px;
    color: #ffffff;
    .br {
      font-size: 28px;
      font-family: "Brown Bold Italic";
    }
    .tb {
      font-size: 14px;
      font-family: "Brown Light Italic";
    }
  }
}
</style>