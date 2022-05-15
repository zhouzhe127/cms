<template>
  <div>
    <Pagetop />
    <CmsEdit @optionClick="edit">
      <Banner />
    </CmsEdit>
    <AddModule />
    <FootContent />
  </div>
</template>

<script setup lang="ts">
import Pagetop from '@/views/pagecontent/components/Pagetop.vue'
import Banner from '@/views/pagecontent/components/Banner.vue'
import AddModule from '@/views/pagecontent/components/AddModule.vue'
import FootContent from '@/views/pagecontent/components/FootContent.vue'
import CmsEdit from '@/components/CmsEdit/index.vue'
const edit = (index: number):void => {
  console.log(index)
}
</script>

<style lang="scss" scoped>
</style>
