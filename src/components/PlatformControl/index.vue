<template>
  <div class="control_box">
    <div
      v-for="(item, index) in tpArr"
      :key="index"
      class="sitems"
      :class="{ active: item === select }"
      @click="changeType(item)"
    >
      <svg-icon :icon-class="item" :class="{ rot: item === 'mobile' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import appStore from '@/store'
const tpArr: Array<string> = ['mobile', 'tablet', 'pc']
const select = ref('mobile')
const changeType = (type: string): void => {
  select.value = type
  appStore.pageconfig.setItem(type)
}
</script>

<style lang="scss" scoped>
.control_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  height: 60px;
  .sitems {
    font-size: 20px;
    padding: 10px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    .rot {
      transform: rotate(90deg);
    }
  }
  .active {
    opacity: 1;
  }
}
</style>
