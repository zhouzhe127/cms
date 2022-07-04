<template>
  <div class="container">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="cinema">
          <swiper :modules="[Pagination]" :pagination="pagination">
            <swiper-slide>
              <video
                src="https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4"
                muted
                autoplay
                loop
                class="showitem"
              />
            </swiper-slide>
            <swiper-slide>
              <video
                src="https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4"
                muted
                autoplay
                loop
                class="showitem"
              />
            </swiper-slide>
          </swiper>
          <div class="textdec">
            <div class="br">First Diamond</div>
            <div class="tb">new rocks for new experiences</div>
            <div class="barbox" />
          </div>
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import CmsEdit from '@/components/CmsEdit/index.vue'
import { defineExpose } from 'vue'
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
import 'swiper/css'
interface Props {
  close?: Function
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const pagination = {
  el: '.barbox',
  clickable: true,
  bulletActiveClass: 'active',
  bulletClass: 'baritem'
}
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.addPageModle(
    {
      componentName: SITE_MODULES.CINEMA
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
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .cinema {
    width: 406px;
    height: 406px;
    border: 1px black dashed;
    background-color: #f8f8f8;
    position: relative;
    .showitem {
      width: 100%;
    }
    .textdec {
      margin: 30px 8px 0;
      .br {
        font-size: 28px;
        font-family: 'Brown Bold Italic';
      }
      .tb {
        font-size: 14px;
        font-family: 'Brown Light Italic';
      }
      .barbox {
        display: flex;
        margin-top: 30px;
        ::v-deep(.baritem) {
          height: 4px;
          background-color: #e2e3e3;
          flex: 1;
          margin-right: 5px;
          cursor: pointer;
          &:last-child {
            margin-right: initial;
          }
        }
        ::v-deep(.active) {
          background-color: $theme;
        }
      }
    }
  }
}
</style>
