<template>
  <div class="row-setting-item">
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
}

withDefaults(defineProps<Props>(), {
  title: 'Hide From Navigation'
})
</script>

<style lang="scss">
.row-setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
