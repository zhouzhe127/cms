<template>
  <div class="row-setting-item" :style="{margin: margin}" :class="{ 'p10': hasPadding }">
    <span>{{ title }}</span>
    <div class="line" />
    <div class="bg-switch">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  hasPadding: boolean,
  margin: string
}

withDefaults(defineProps<Props>(), {
  title: 'Hide From Navigation',
  hasPadding: true,
  margin: '45px 0 0 0'
})
</script>

<style lang="scss">
.p10 {
  padding: 0 10px
}
.row-setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  .line {
    height: 1px;
    border-bottom: 1px #c7caca solid;
    margin: 0 30px;
    flex: 1;
  }
}
</style>
