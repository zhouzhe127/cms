<template>
  <!-- <div>
    <Pagetop />
    <CmsEdit @optionClick="edit">
      <Banner />
    </CmsEdit>
    <AddModule />
    <FootContent />
  </div> -->
  <Empty />
  <router-view />
</template>

<script setup lang="ts">
import Pagetop from '@/views/homePage/components/Pagetop.vue'
import Banner from '@/views/homePage/components/Banner.vue'
import AddModule from '@/views/homePage/components/AddModule.vue'
import FootContent from '@/views/homePage/components/FootContent.vue'
import Empty from '@/views/homePage/components/Empty.vue'
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { getOrderInfo } from '@/api/test'
const edit = (index: number):void => {
  console.log(index)
}
const data = async () => {
  const d = await getOrderInfo()
  console.log(d)
}
data()
</script>

<style lang="scss" scoped>
</style>
