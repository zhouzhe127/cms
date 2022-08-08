<template>
  <div class="photobox">
    <CmsEdit :options="['edit_cms', 'add_white']" @optionClick="edit">
      <PhotoCard
        :imgurl="info.style?.background.path || getAssetsImage('photoLeft.webp')"
        :tips="info.style?.credit"
        :describ="info.style?.body"
        :describ_title="info.style?.title"
      />
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import PhotoCard from '@/views/homePage/components/Media/PhotoCard.vue'
import { getAssetsImage } from '@/utils/fileSource'
import appStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
interface Props {
  site?: number,
  childSite?: number,
  info?: any
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  childSite: 0,
  info: {
    componentName: 'markdown',
    style: {}
  }
})
const edit = (index: number):void => {
  if (index === 0) {
    router.push({
      path: '/siteBuilder/mediaSettings',
      query: {
        site: props.site,
        childSite: props.childSite
      }
    })
  }
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'media',
  }, props.site, props.childSite)
}
</script>

<style lang="scss" scoped>
.photobox {
  min-width: 45%;
  flex: 1;
  margin-bottom: 20px;
  &:nth-child(2n) {
    margin-left: 20px;
  }
  &:last-child {
    margin-bottom: initial;
  }
}
</style>