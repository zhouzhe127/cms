<template>
  <div class="row-setting-item" :class="{ 'p10': hasPadding }">
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
  hasPadding: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Hide From Navigation',
  hasPadding: true
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
  margin-top: 45px;
  color: black;
  .line {
    height: 1px;
    border-bottom: 1px #c7caca solid;
    margin: 0 30px;
    flex: 1;
  }
}
</style>
