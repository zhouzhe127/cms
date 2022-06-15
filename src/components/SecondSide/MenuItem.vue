<template>
  <div>
    <div class="menu_item">
      <div class="itemlist" @click="clickItems">
        <div class="hidden" @click.stop="leftClick">
          <svg-icon :icon-class="prop.leftIcon" class="sicon" />
        </div>
        <div @click.stop="centerIconClick">
          <svg-icon :icon-class="prop.centerIcon" class="sicon" />
        </div>
        <div>
          {{ prop.title }}
        </div>
        <div class="hidden" @click.stop="rightClick">
          <svg-icon :icon-class="prop.rightIcon" class="sicon" />
        </div>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="showChild">
        <slot />
        <div v-if="isEmpty" class="emptybox">
          <div class="empty">
            Empty
          </div>
        </div>
        <div class="addbox">
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
  title?: string,
  leftIcon?: string,
  rightIcon?: string,
  centerIcon?: string,
  isEmpty?: boolean,
}
const prop = withDefaults(defineProps<Props>(), {
  title: '--',
  leftIcon: 'delete_red',
  rightIcon: 'tool_gray',
  centerIcon: 'home',
  isEmpty: false
})
const showChild = ref(false)
const clickItems = () => {
  showChild.value = !showChild.value
}
const emit = defineEmits(['leftClick', 'rightClick', 'centerIconClick'])
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
      transition: opacity .5s;
      transition: .5s;
    }
    &:hover {
      background-color: #ffffff;
      .hidden {
        opacity: 1;
      }
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