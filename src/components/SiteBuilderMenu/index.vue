<template>
  <div>
    <second-side>
      <div class="scroll-affix-con">
        <Navigation />
        <FooterNavigation />
        <Navigation />
      </div>
    </second-side>
    <div class="footbox">
      <div class="clearset" @click="clearBin">
        <SvgIcon icon-class="delete_fill" class="clearicon" />
        <span class="text">CLEAR BIN</span>
      </div>
    </div>
    <ClearBinDialog v-model="visibleClearDialog" @confirm="visibleClearDialog = false" @cancel="visibleClearDialog = false"/>
  </div>
</template>

<script setup lang="ts">
import SecondSide from '@/components/SecondSide/index.vue'
import Navigation from '@/components/SiteBuilderMenu/Navigation.vue'
import FooterNavigation from '@/components/SiteBuilderMenu/components/footerNavigation/index.vue'
import ClearBinDialog from './ClearBinDialog.vue'
import { ref } from 'vue'

const visibleClearDialog = ref(false)

const clearBin = () => {
  visibleClearDialog.value = true
}
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
