<template>
  <div class="control_box">
    <div
      v-for="(item, index) in tpArr"
      :key="index"
      class="sitems"
      :class="{ active: item.key === select }"
      @click="changeType(item.key)"
    >
      <svg-icon :icon-class="item.icon" :class="{ rot: item.key === 'mobile' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DEVICE } from '@/config/constant'
import appStore from '@/store'
interface DEVI {
  key: string,
  icon: string
}
const tpArr: Array<DEVI> = [{
  key: DEVICE.MOBILE,
  icon: 'mobile'
}, {
  key: DEVICE.IPAD,
  icon: 'tablet'
}, {
  key: DEVICE.DESKTOP,
  icon: 'pc'
}]
const select = ref(DEVICE.MOBILE as string)
const changeType = (type: string): void => {
  select.value = type
  appStore.setBuilder.setItem(type)
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
