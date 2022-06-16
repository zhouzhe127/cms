<template>
  <div class="container">
    <CmsEdit :options="['edit_cms', 'add_white']">
      <div class="campaign">
        <div class="imgoption">
          Image Option
        </div>
        <div class="textmain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="lorembtn">
          LOREM IPSUM
        </div>
      </div>
    </CmsEdit>
  </div>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'

</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .campaign {
    width: 406px;
    height: 360px;
    border: 1px black dashed;
    background-color: #F8F8F8;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 28px;
    .imgoption {
      width: 100%;
      margin-top: 60px;
      border: 1px black dashed;
      padding: 20px 0;
      color: rgb(27, 43, 39, .5);
      border-radius: 8px;
    }
    .textmain {
      width: 316px;
      line-height: 18px;
      margin: 30px 0;
    }
    .lorembtn {
      padding: 17px 20px;
      border: 1px black solid;
      border-radius: 8px;
    }
  }
}
</style>