<template>
  <div :class="`menu ${disable ? 'menu__disable' : ''}`">
    <Affix :offset="232" :boundary="'.scroll-affix-con'" :is-scroll-view="true">
      <div class="menu_header" @click.prevent="emit('headClick')">
        <slot name="header">
          <div class="header_con">
            <span>{{ title }}</span>
            <svg-icon icon-class="add_black" class="add" color="black" @click="addClick" />
          </div>
        </slot>
      </div>
    </Affix>
    <div class="menu_container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts" name="SideMenu">
import Affix from '@/components/Affix/index.vue'
interface Props {
  title?: string,
  disable?: boolean
  
}
const props = withDefaults(defineProps<Props>(), {
  title: '--',
  disable: false
})
const emit = defineEmits(['addClick', 'headClick'])
const addClick = () => {
  emit('addClick')
}
</script>

<style lang="scss" scoped>
.menu {
  .menu_header {
    width: 100%;
    padding: 10px 10px;
    border-bottom: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: -50px;
    z-index: 10;
    background-color: #F8F8F8;
    .header_con {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between; 
    }
    .add {
      font-size: 22px;
      cursor: pointer;
    }
  }
}

.menu__disable {
  .menu_header {
   border-bottom: 1px #8a9290 solid; 
  }
  .menu_header {
    color: #8a9290;
  }
}
</style>