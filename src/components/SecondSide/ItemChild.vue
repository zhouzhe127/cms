<template>
  <div>
    <div class="menu_item">
      <div
        class="itemlist"
        :class="{ active: active }"
        @click="clickItems"
      >
        <div class="hidden" @click="leftClick">
          <svg-icon :icon-class="leftIcon" class="sicon" />
        </div>
        <div class="nextmi" @change="centerIconClick">
          <svg-icon
            icon-class="return_right"
            class="sicon"
            color="rgba(27, 43, 39, .5)"
          />
        </div>
        <div @change="centerIconClick">
          <svg-icon :icon-class="centerIcon" class="sicon" />
        </div>
        <div>
          {{ title }}
        </div>
        <div class="hidden" @click="rightClick">
          <svg-icon :icon-class="rightIcon" class="sicon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  leftIcon?: string
  rightIcon?: string
  centerIcon?: string
  active?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '--',
  leftIcon: 'delete_red',
  rightIcon: 'tool_gray',
  centerIcon: 'scratchable',
  active: false,
})
const emit = defineEmits(['leftClick', 'rightClick', 'centerIconClick', 'clickItem'])
const clickItems = () => {
  emit('clickItem')
}
const leftClick = () => {
  emit('leftClick')
}
const rightClick = () => {
  emit('rightClick')
}
const centerIconClick = () => {
  emit('centerIconClick')
}
</script>

<style lang="scss" scoped>
.menu_item {
  margin: 10px 0;
  .itemlist {
    height: 40px;
    padding: 0 10px;
    line-height: 20px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 20px 35px 20px 1fr 20px;
    grid-gap: 10px;
    align-items: center;
    cursor: pointer;
    .sicon {
      font-size: 24px;
    }
    .nextmi {
      padding-left: 15px;
    }
    .hidden {
      opacity: 0;
      transition: opacity 0.5s;
      transition: 0.5s;
    }
    &:hover {
      background-color: #ffffff;
      .hidden {
        opacity: 1;
      }
    }
  }
  .active {
    background-color: #ffffff;
    .hidden {
      opacity: 1;
    }
  }
}
</style>
