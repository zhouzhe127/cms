<template>
  <div class="infobox">
    <div class="nhes">
      <div class="pictop">
        <img v-if="icon" class="icon-img" :src="icon" alt="">
        <div v-else class="dot" />
      </div>
      <div class="nt">{{ title || dt.title }}</div>
      <div class="lt" v-html="description || dt.description" />
      <div class="nt">{{ action || dt.action }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title?: string;
  description?:  string;
  action?: string;
  icon?: string;
}
const dt = {
  title: 'LOREM IPSUM',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  action: 'action',
  icon: ''
}
const props = withDefaults(defineProps<Props>(), {
  title: 'LOREM IPSUM',
  description: '',
  action: 'Action'
})
</script>
<style lang="scss" scoped>
.infobox {
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nhes {
    width: 255px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .pictop {
    margin-top: 48px;
    width: 50px;
    height: 50px;
    background-color: #f8f8f8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .dot {
      width: 18px;
      height: 18px;
      background-color: $theme;
      border-radius: 50%;
    }
    .icon-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .nt {
    margin: 20px 0;
  }
  .lt {
    padding: 0 20px;
    font-family: 'Brown Light', serif;
  }
}
</style>
