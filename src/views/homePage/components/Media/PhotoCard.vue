<template>
  <div class="photo-card" :style="{'background-image': `url(${imgurl})`}">
    <CmsEdit :style="{ paddingBottom: '100%' }"  :options="['edit_cms', 'add_white']" @optionClick="edit" />
    <div class="tip-card" v-if="tips">
      {{ tips.toLocaleUpperCase() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImage } from '@/utils/fileSource'
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
interface IProps {
  imgurl?: string
  tips?: string
  site?: number
  childSite?: number
}

const props = withDefaults(defineProps<IProps>(), {
  imgurl: getAssetsImage('photoLeft.webp'),
  tips: 'Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces',
  site: 0,
  childSite: 0,
})
const edit = (index: number):void => {
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'Media',
  }, props.site, props.childSite)
  // router.push({
  //   path: '/siteBuilder/editModules',
  //   query: { site: properties?.length }
  // })
}
</script>

<style lang="scss" scoped>
.photo-card {
  width: 49%;
  padding-bottom: 49%;
  height: 0;
  display: inline-block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  .tip-card {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px 20px 20px 10px;
    max-width: 75%;
    background-color: #fff;
    font-size: 14px;
    font-family: "Brown Regular", serif;
  }
}

@media screen and (max-width:1200px) {
 .photo-card {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
 }
}
</style>
