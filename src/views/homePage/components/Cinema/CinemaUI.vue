<template>
  <div class="cinema">
    <swiper :modules="[Pagination]" :pagination="pagination">
      <swiper-slide>
        <div class="slidebox">
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
      </swiper-slide>
      <swiper-slide>
        <div class="slidebox">
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
      </swiper-slide>
    </swiper>
    <div :class="paginationClass" style="width: 100%;padding: 0 3%;display: flex;position: absolute;bottom: 30px;z-index: 10;" />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import { defineExpose } from 'vue'
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
import { generateUUID } from '@/utils/uuid'
import 'swiper/css'
interface Props {
  close?: Function
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const paginationClass = `barbox${generateUUID()}`
const pagination = {
  el: `.${paginationClass}`,
  clickable: true,
  bulletActiveClass: 'active',
  bulletClass: 'baritem'
}
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.CINEMA,
      properties: [{
        componentName: SITE_MODULES.CINEMA,
      }]
    },
    Number(site)
  )
  if (props.close) props.close()
}
defineExpose({
  confirm
})
</script>

<style lang="scss" scoped>
  .cinema {
    width: 100%;
    border: 1px black dashed;
    background-color: #f8f8f8;
    position: relative;
    .slidebox {
      height: 450px;
    }
    .showitem {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .textdec {
      position: absolute;
      left: 3%;
      bottom: 77px;
      color: #ffffff;
      .br {
        font-size: 48px;
        font-family: 'Brown Bold Italic';
        font-weight: 400;
      }
      .tb {
        font-size: 24px;
        font-family: 'Brown Light Italic';
        font-weight: 400;
      }
    }
    ::v-deep(.baritem) {
      height: 4px;
      background-color: #ffffff;
      opacity: .2;
      flex: 1;
      margin-right: 5px;
      cursor: pointer;
      &:last-child {
        margin-right: initial;
      }
    }
    ::v-deep(.active) {
      opacity: 1;
    }
  }
</style>
