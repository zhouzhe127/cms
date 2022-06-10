<template>
  <div>
    <second-side>
      <div class="scroll-affix-con">
        <Navigation />
        <Footer />
        <Navigation />
      </div>
    </second-side>
    <div class="footbox">
      <div class="clearset" @click="clearBin">
        <SvgIcon icon-class="delete_fill" class="clearicon" />
        <span class="text">CLEAR BIN</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SecondSide from '@/components/SecondSide/index.vue'
import Navigation from '@/components/SiteBuilderMenu/Navigation.vue'
import Footer from '@/components/SiteBuilderMenu/Footer.vue'
const clearBin = () => {}
</script>

<style lang="scss" scoped>
.confirm-title-con {
  --framer-font-family: 'Brown Bold', serif;
  font-weight: 600;
}
.footbox {
  margin: 30px auto;
  width: 90px;
  .clearset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $theme;
    opacity: .5;
    cursor: pointer;
    .clearicon {
      font-size: 30px;
    }
    .text {
      display: block;
      margin-top: 10px;
    }
  }
}
</style>
