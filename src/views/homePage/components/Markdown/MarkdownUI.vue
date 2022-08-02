<template>
  <div class="markdown">
    <div class="title">LOREM IPSUM</div>
    <div v-if="!props.info.style?.body" class="doc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div v-else v-html="props.info.style?.body" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  info?: any
}
const props = withDefaults(defineProps<Props>(), {
  info: {
    componentName: 'markdown',
    style: {
      body: ''
    }
  }
})
console.log(props.info)
</script>

<style lang="scss" scoped>
.markdown {
  width: 100%;
  border: 1px black dashed;
  padding: 20px 16px;
  .title {
    font-size: 28px;
    font-family: 'Brown Bold Italic', serif;
  }
  .doc {
    margin-top: 30px;
    line-height: 18px;
    font-family: 'Brown Light Italic', serif;
  }
}
</style>