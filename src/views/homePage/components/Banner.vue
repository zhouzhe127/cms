<template>
  <CmsEdit @optionClick="edit">
    <div class="banner_content">
      <video
        src="https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4"
        muted
        autoplay
        loop
        class="showitem"
      />
      <div class="textdec">
        <div class="br">First Diamond</div>
        <div class="tb">new rocks for new experiences</div>
      </div>
    </div>
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { useRouter } from 'vue-router'
const properties = appStore.setBuilder.pageState.basic.schema.properties || []
interface Props {
  index?: number,
}
const props = withDefaults(defineProps<Props>(), {
  index: 0
})
const edit = (index: number):void => {
  if (index === 2) {
    openedit()
  }
}
const router = useRouter()
const openedit = () => {
  router.push({
    path: '/siteBuilder/editModules',
    query: { site: properties?.length }
  })
}
</script>

<style lang="scss" scoped>
.banner_content {
  width: 100%;
  height: 465px;
  position: relative;
  .showitem {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textdec {
    position: absolute;
    left: 35px;
    bottom: 75px;
    color: #ffffff;
    .br {
      font-size: 28px;
      font-family: 'Brown Bold Italic';
    }
    .tb {
      font-size: 14px;
      font-family: 'Brown Light Italic';
    }
  }
}
</style>
