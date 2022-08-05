<template>
  <div>
    <second-side v-loading="loading">
      <div class="scroll-affix-con">
        <Navigation />
      </div>
    </second-side>
    <div class="footbox">
      <div class="clearset" @click="toClear">
        <SvgIcon icon-class="delete_fill" class="clearicon" />
        <span class="text">CLEAR BIN</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SecondSide from '@/components/SecondSide/index.vue'
import Navigation from '@/components/DiscoverMenu/Navigation.vue'
import { useRouter } from 'vue-router'
import store from '@/store'
const router = useRouter()

const toClear = () => {
  router.push({
    path: '/siteBuilder/editclearbin'
  })
}
const setBuilder = store.setBuilder
const loading = setBuilder.basic.loading
onMounted(() => {
  setBuilder.getSetBuilderList()
})
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
    opacity: 0.5;
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
