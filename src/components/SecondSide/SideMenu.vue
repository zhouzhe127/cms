<template>
  <div class="menu">
    <div class="menu_header">
      <span>{{ props.title }}</span>
      <svg-icon icon-class="add_black" class="add" color="black" @click="addClick" />
    </div>
    <div class="menu_container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts" name="SideMenu">
interface Props {
  title?: string,
}
const props = withDefaults(defineProps<Props>(), {
  title: '--',
})
const emit = defineEmits(['addClick'])
const addClick = () => {
  emit('addClick')
}
</script>

<style lang="scss" scoped>
.menu {
  .menu_header {
    padding: 10px 10px;
    border-bottom: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: -50px;
    z-index: 10;
    background-color: #F8F8F8;
    .add {
      font-size: 22px;
      cursor: pointer;
    }
  }
}
</style>