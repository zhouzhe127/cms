<template>
  <div v-bind="$attrs">
    <div class="menu_item">
      <div
        class="itemlist"
        :class="{ active: props.active }"
        @click="clickItems"
      >
        <div class="hidden" @click.stop="leftClick">
          <svg-icon
            v-if="props.hasLeftIcon"
            :icon-class="props.leftIcon"
            class="sicon"
          />
        </div>
        <div @click.stop="centerIconClick">
          <svg-icon :icon-class="props.centerIcon" class="sicon" />
        </div>
        <div>
          {{ props.title }}
        </div>
        <div class="hidden" @click.stop="rightClick">
          <svg-icon
            v-if="props.hasRightIcon"
            :icon-class="props.rightIcon"
            class="sicon"
          />
        </div>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="showChild">
        <slot />
        <div v-if="isEmpty" class="emptybox">
          <div class="empty">Empty</div>
        </div>
        <div class="addbox" @click="onAdd">
          <svg-icon icon-class="add_black" class="sicon" />
          <span class="addtext">Add</span>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  title?: string
  leftIcon?: string
  rightIcon?: string
  centerIcon?: string
  isEmpty?: boolean
  active?: boolean
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '--',
  leftIcon: 'delete_red',
  rightIcon: 'tool_gray',
  centerIcon: 'home',
  isEmpty: false,
  active: false,
  hasLeftIcon: true,
  hasRightIcon: true
})
const showChild = ref(false)
const clickItems = () => {
  showChild.value = !showChild.value
}
const emit = defineEmits(['leftClick', 'rightClick', 'centerIconClick', 'add'])
const leftClick = () => {
  if (props.hasLeftIcon) emit('leftClick')
}
const rightClick = () => {
  if (props.hasRightIcon) emit('rightClick')
}
const centerIconClick = () => {
  emit('centerIconClick')
}
const onAdd = () => {
  emit('add')
}
</script>

<style lang="scss" scoped>
.menu_item {
  padding-top: 10px;
  .itemlist {
    height: 40px;
    padding: 0 10px;
    line-height: 20px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 20px 20px 1fr 20px;
    grid-gap: 10px;
    align-items: center;
    cursor: pointer;
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
.emptybox {
  height: 40px;
  padding: 0 10px 0 40px;
  .empty {
    border: 1px black dashed;
    text-align: center;
    line-height: 40px;
  }
}
.addbox {
  height: 40px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  line-height: 20px;
  cursor: pointer;
  .addtext {
    display: inline-block;
    margin-left: 10px;
  }
}
.sicon {
  font-size: 24px;
}
</style>
