<template>
  <div class="photo-view">
     <CardView>
       <PhotoCard
        v-for="(item, index) in basic.properties"
        :key="index"
        :site="site"
        :child-site="index"
        :imgurl="getAssetsImage('photoLeft.webp')"
        tips="Back To Love: This Valentine’s Day, Celebrate Love’s Various Faces"
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
    properties: []
  })
})
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
