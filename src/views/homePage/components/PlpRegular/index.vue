<template>
  <div class="plpregular" @click="onPlpRegular">
    <div class="topoption">
      <div>
        Filter
        <svg-icon icon-class="sort" class="sicon" />
      </div>
      <div class="rightcon">
        <div>
          <span>Product view</span>
          <svg-icon icon-class="expand_more" class="sicon" />
        </div>
        <div class="rightms">
          <span>Price (high)</span>
          <svg-icon icon-class="expand_more" class="sicon" />
        </div>
      </div>
    </div>
    <div class="tablist">
      <span>Home</span>&nbsp;/&nbsp;
      <span>Jewelry</span>&nbsp;/&nbsp;
      <span>Rings</span>&nbsp;/&nbsp;
      <span>Maren Jewellery</span>
    </div>
    <div class="content-main">
      <div class="text-content">
        <div class="title">{{ info.title }}</div>
        <div v-html="info.body" class="doc" />
        <div class="laun">{{ info.launch_title }} {{ info.start_time }}</div>
        <div class="inputbox">
          <div class="ueb">{{ info.submit_to }}</div>
          <div class="ibt">{{ info.lunch_button }}</div>
        </div>
      </div>
      <CmsEdit class-name="editbox" :options="['edit_cms', 'lock_white']">
        <SquareImage :src="info.background.path" />
      </CmsEdit>
    </div>
    <div class="pagebox">
      <Pagination />
    </div>
    <div class="centbox">
      <div class="tablist">
        <span>Home</span>&nbsp;/&nbsp;
        <span>Jewelry</span>&nbsp;/&nbsp;
        <span>Rings</span>&nbsp;/&nbsp;
        <span>Maren Jewellery</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
import Pagination from '@/components/TfrPagination/index.vue'
import SquareImage from '@/components/TfrImage/SquareImage.vue'
import { useRoute, useRouter } from 'vue-router'
interface Props {
  info?: any
}
const props = withDefaults(defineProps<Props>(), {
  info: {}
})
console.log(props.info)
const router = useRouter()

const onPlpRegular = () => {
  router.push({
    path: '/siteBuilder/plpSettings'
  })
}
</script>
<style lang="scss" scoped>
.plpregular {
  padding: 0 20px;
  cursor: pointer;
  .topoption {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .sicon {
      font-size: 20px;
      display: inline-block;
      margin-left: 8px;
    }
    .rightcon {
      display: flex;
      .rightms {
        margin-left: 34px;
      }
    }
  }
  .tablist {
    display: inline-block;
    font-family: "Brown Light", serif;
  }
  .centbox {
    display: flex;
    justify-content: center;
  }
  .content-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    .text-content {
      flex: 1;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 24px;
        margin-bottom: 30px;
      }
      .doc {
        font-family: "Brown Light", serif;
        line-height: 1.3;
      }
      .laun {
        margin-top: 30px;
      }
    }
    .editbox {
      flex: 1 ;
      min-width: 400px;
      border: 1px black dashed;
    }
    .inputbox {
      margin: 30px 0;
      width: 308px;
      height: 50px;
      border: 1px $theme solid;
      display: flex;
      line-height: 50px;
      .ueb {
        flex: 1;
        padding-left: 15px;
        color: #cecece;
      }
      .ibt {
        padding: 0 20px;
        color: #ffffff;
        text-align: center;
        background-color: $theme;
      }
    }
  }
  .pagebox {
    margin: 45px 0;
    padding: 0 40px;
  }
}
</style>