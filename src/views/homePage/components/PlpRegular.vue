<template>
  <div class="plpregular">
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
        <div class="title">LOREM IPSUM</div>
        <div class="doc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.Duis aute irure dolor in reprehenderit in voluptuous velit
          esse cillum dolore eu fugiat nulla pariatur.Excepteur are occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="laun">Launches 2022年7月1日</div>
        <div class="inputbox">
          <div class="ueb">Your email address</div>
          <div class="ibt">NOTIFY ME</div>
        </div>
      </div>
      <CmsEdit class="editbox" :options="['edit_cms', 'lock_white']">
        <div></div>
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
</script>
<style lang="scss" scoped>
.plpregular {
  padding: 0 20px;
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
    justify-content: space-between;
    margin-top: 20px;
    .text-content {
      width: 50%;
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
      width: 50%;
      height: 534px;
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