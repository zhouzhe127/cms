<template>
  <div class="cinema">
    <swiper :modules="[Pagination]" :pagination="pagination">
      <swiper-slide v-for="(item, index) in cinema_items" :key="index">
        <div class="slidebox">
          <el-image v-if="item.medias?.content_type === 'image'" :src="item.medias?.path" fit="cover" class="showitem" />
          <video
            v-else
            :src="item.medias?.path"
            muted
            autoplay
            loop
            class="showitem"
          />
          <div class="textdec">
            <div class="br">{{ item.title }}</div>
            <div class="tb">{{ item.content }}</div>
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
import { generateUUID } from '@/utils/uuid'
import 'swiper/css'
interface LooseObject {
  [key: string]: any
}
interface Props {
  info?: LooseObject
}
const props = withDefaults(defineProps<Props>(), {
  info: () => ({}),
})
const defaultItem = [{
  medias: {
    path: 'https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4',
    type: 'video'
  },
  title: 'First Diamond',
  content: 'new rocks for new experiences'
}]
const cinema_items = props.info.cinema_items || defaultItem
console.log(props.info)
const paginationClass = `barbox${generateUUID()}`
const pagination = {
  el: `.${paginationClass}`,
  clickable: true,
  bulletActiveClass: 'active',
  bulletClass: 'baritem'
}
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
