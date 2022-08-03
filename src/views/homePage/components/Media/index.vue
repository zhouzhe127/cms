<template>
  <div class="photo-view">
     <CardView>
       <PhotoCard
        v-for="(item, index) in basic.properties"
        :key="index"
        :site="site"
        :child-site="index"
        :imgurl="item.style?.background.path || getAssetsImage('photoLeft.webp')"
        :tips="item.style?.credit"
        :describ="item.style?.body"
        :describ_title="item.style?.title"
      />
    </CardView>
  </div>
</template>

<script setup lang="ts">
import { ComponentsSchema } from '@/views/homePage/type/index'
import CardView from '@/views/homePage/components/Media/CardView.vue'
import PhotoCard from '@/views/homePage/components/Media/PhotoCard.vue'
import { getAssetsImage } from '@/utils/fileSource'
import appStore from '@/store'
interface Props {
  site?: number,
  basic?: ComponentsSchema,
}
const props = withDefaults(defineProps<Props>(), {
  site: 0,
  basic: () => ({
    componentName: '',
    style: {},
    properties: []
  })
})
console.log(props.basic)
const edit = (index: number):void => {
  if (index === 1) {
    openedit()
  }
}
const openedit = () => {
  const l = props.basic.properties?.length || 0
  appStore.setBuilder.pageState.addChildModle({
    componentName: 'Media',
  }, props.site, l - 1)
}
</script>

<style lang="scss" scoped>
  .photo-view {
    padding: 20px;
  }
</style>
