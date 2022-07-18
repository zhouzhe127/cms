<template>
  <div class="culture-con">
    <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
      <CardView>
        <PhotoCard :imgurl="getAssetsImage('jewely.webp')" tips="" />
        <div class="text-card">
          <HomeText />
        </div>
      </CardView>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CardView from '@/views/homePage/components/Media/CardView.vue'
import PhotoCard from '@/views/homePage/components/Media/PhotoCard.vue'
import HomeText from '@/views/homePage/components/Culture/HomeText.vue'
import { getAssetsImage } from '@/utils/fileSource'
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
interface LooseObject {
  [key: string]: any
}
interface Props {
  site?: number,
  childSite?: number,
  basic?: LooseObject,
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0,
  basic: () => ({
    componentName: '',
    cinema: {},
    properties: []
  })
})
const edit = (index: number):void => {
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'article',
  }, props.site, props.childSite)
}
</script>

<style lang="scss" scoped>
.culture-con {
  padding: 60px;
  background-color: #f8f8f8;
  border: 5px solid #fff;
}
.text-card {
  width: 50%;
  padding: 0px 30px;
}

@media screen and (max-width: 1200px) {
  .culture-con {
    padding: 5px;
  }
  .text-card {
    width: 100%;
  }
}
</style>
