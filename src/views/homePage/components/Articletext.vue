<template>
  <CmsEdit>
    <div class="edittetxbox">
      <div class="gradleft">
      </div>
      <div class="gradright">
        <div class="titlebox">
          <div class="t1">category</div>
          <div class="t2">Lorem Ipsum</div>
          <div class="t3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div class="t4">READ AND SHOP</div>
        </div>
      </div>
    </div>
  </CmsEdit>
</template>

<script setup lang="ts">
import CmsEdit from '@/components/CmsEdit/index.vue'
</script>

<style lang="scss" scoped>
.edittetxbox {
  border: 1px black dashed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .gradleft {
    border-right: 1px black dashed;
    height: 530px;
  }
  .gradright {
    padding: 30px;
    display: flex;
    align-items: center;
    .t2 {
      font-size: 24px;
      padding: 20px 0;
    }
    .t3 {
      font-family: "Brown Light", serif;
      line-height: 21px;
    }
    .t4 {
      font-weight: 400;
      margin-top: 16px;
    }
  }
}
</style>