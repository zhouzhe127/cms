<template>
  <div class="preannouncement">
    <header class="title">{{ info.title }}</header>
    <section>
      <div v-html="info.body">
      </div>
      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. -->
    </section>
    <time>{{ info.launch_title }} {{ info.start_time }}</time>
    <div class="inputbox">
      <div class="ueb">{{ info.submit_to }}</div>
      <div class="ibt">{{ info.lunch_button }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  info?: any
}
// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<PropsType>(), {
  info: {}
})
</script>
<style lang="scss" scoped>
.preannouncement {
    font-family: 'Brown Light', serif;
  .title {
    font-size: 24px;
    font-family: inherit;
  }
  section {
    font-size: 14px;
    font-family: inherit;
    text-align: left;
  }
  time {
    font-size: 14px;
    font-weight: 700;
  }
  .inputbox {
    margin: 30px 0;
    width: 308px;
    height: 50px;
    border: 1px $theme solid;
    display: flex;
    line-height: 50px;
    .ueb {
      flex: 1;
      padding-left: 15px;
      color: #cecece;
    }
    .ibt {
      padding: 0 20px;
      color: #ffffff;
      text-align: center;
      background-color: $theme;
    }
  }
}
</style>
