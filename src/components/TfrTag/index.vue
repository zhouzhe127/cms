<template>
  <sapn class="tfr-tag">
    <slot></slot>
    <svg-icon
      v-if="tagProps.closeable"
      icon-class="close"
      @click="handleClose"
    />
  </sapn>
</template>

<script setup lang="ts">
interface PropsType {
  closeable?: boolean
}
const tagProps = withDefaults(defineProps<PropsType>(), {
  closeable: true
})
const tagEmits = defineEmits(['close'])
const handleClose = (tag: any) => {
  tagEmits('close', tag)
}
</script>

<style lang="scss" scoped>
.tfr-tag {
  padding: 10px;
  background-color: $bg;
  height: 40px;
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
