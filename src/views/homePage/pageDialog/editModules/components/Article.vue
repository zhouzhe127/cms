<template>
  <div class="article_box">
    <div>
      <CmsEdit :options="['edit_cms', 'add_white']">
        <div class="article_com">
          <div class="imgcontant"></div>
          <ul class="info">
            <li>GASAHNX</li>
            <li class="nuem">GASAHNX</li>
            <li class="lint">GASAHNX</li>
            <li>GASAHNX</li>
          </ul>
        </div>
      </CmsEdit>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import appStore from '@/store'
import { useRoute } from 'vue-router'
import { SITE_MODULES } from '@/views/homePage/config/pageComponents'

interface Props {
  close?: Function
}
const props = withDefaults(defineProps<Props>(), {
  close: () => {}
})
const route = useRoute()
const site = route.query.site
const confirm = () => {
  appStore.setBuilder.pageState.addPageModle(
    {
      componentName: SITE_MODULES.ARTICLE,
      properties: [
        {
          componentName: SITE_MODULES.ARTICLE
        }
      ]
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
.article_box {
  display: flex;
  justify-content: center;
  align-items: center;
  .article_com {
    width: 328px;
    height: 508px;
    border: 1px dashed black;
    .imgcontant {
      height: 328px;
      border-bottom: 1px dashed black;
    }
    .info {
      padding-top: 20px;
      padding-left: 28px;
      li {
        padding: 5px 0;
        line-height: 1.3;
      }
      .nuem {
        font-size: 24px;
      }
      .lint {
        font-family: 'Brown Light', serif;
      }
    }
  }
}
</style>
