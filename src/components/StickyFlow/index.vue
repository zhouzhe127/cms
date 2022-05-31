<template>
  <div class="sticky-section" :style="{ top: stickyProps.top + 'px' }">
    {{ stickyProps.title }}
    <slot name="right"></slot>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  title: string
  top?: number
}
const stickyProps = withDefaults(defineProps<PropsType>(), {
  type: '', // 默认值
  top: 60
})
</script>

<style lang="scss" scoped>
.sticky-section {
  height: 52px;
  padding: 10px;
  top: 60px;
  position: sticky;
  z-index: 1000;
  font-size: 14px;
  letter-spacing: 0;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $theme;
  background-color: #fff;
}
</style>
