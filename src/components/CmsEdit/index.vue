<template>
  <div class="optionmain" :class="className" :style="style">
    <div class="contant">
      <div class="optionbox">
        <div
          v-for="(item, index) in props.options"
          :key="index"
          class="option_item"
          @click="optionClick(index)"
        >
          <svg-icon :icon-class="item" class="svg_item" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
  options?: Array<string>
  style?: () => {}
}
const props = withDefaults(defineProps<Props>(), {
  className: '',
  options: () => ['suspended', 'edit_cms', 'add_white'],
  style: () => ({})
})
const emit = defineEmits(['optionClick'])
const optionClick = (index: number) => {
  emit('optionClick', index)
}
</script>

<style lang="scss" scoped>
.optionmain {
  width: 100%;
  position: relative;
  &:hover {
    .optionbox {
      opacity: 1;
    }
  }
  .contant {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .optionbox {
    display: flex;
    background-color: rgb(27, 43, 39);
    opacity: 0.5;
    .option_item {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .svg_item {
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
</style>
