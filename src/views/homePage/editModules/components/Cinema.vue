<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="cinema">
        <video src="https://framerusercontent.com/modules/qAxyUgdzgkINJGI0AxxB/uHziABuy0VXWHbXCY7Ow/assets/RKTWhevPDx7sSt5NwHTElJVdLqc.mp4" muted autoplay loop class="showitem" />
        <div class="textdec">
          <div class="br">First Diamond</div>
          <div class="tb">new rocks for new experiences</div>
          <div class="barbox">
            <div class="baritem active" />
            <div class="baritem" />
            <div class="baritem" />
          </div>
        </div>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import { defineExpose } from 'vue'
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'
interface Props {
  close?: Function,
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {},
})
const route = useRoute()
const origin = route.query.origin
const confirm = () => {
  appStore.setBuilder.addPageModle({
    componentName: SITE_MODULES.CINEMA
  }, Number(origin))
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
    background-color: #F8F8F8;
    position: relative;
    .showitem {
      width: 100%;
    }
    .textdec {
      margin-top: 30px;
      margin-left: 8px;
      .br {
        font-size: 28px;
        font-family: "Brown Bold Italic";
      }
      .tb {
        font-size: 14px;
        font-family: "Brown Light Italic";
      }
      .barbox {
        display: flex;
        margin-top: 30px;
        .baritem {
          height: 4px;
          background-color: #E2E3E3;
          flex: 1;
          margin-right: 5px;
          &:last-child {
            margin-right: initial;
          }
        }
        .active {
          background-color: $theme;
        }
      }
    }
  }
}
</style>