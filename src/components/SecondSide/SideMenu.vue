<template>
  <div class="menu">
    <Affix :offset="230" :boundary="'.scroll-affix-con'" :is-scroll-view="true">
      <slot name="header">
        <BaseMenuHeader
          :disable="disable"
          :title="title"
          icon="add_black"
          v-bind="$attrs"
          @head-click="emit('headClick')"
          @icon-click="addClick"
        ></BaseMenuHeader>
      </slot>
    </Affix>
    <div class="menu_container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts" name="SideMenu">
import Affix from '@/components/Affix/index.vue'
import BaseMenuHeader from '../SiteBuilderMenu/components/BaseMenuHeader.vue'
interface Props {
  title?: string
  disable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '--',
  disable: false,
})
const emit = defineEmits(['addClick', 'headClick'])
const addClick = () => {
  emit('addClick')
}
</script>

<style lang="scss" scoped>
::v-deep(.affix-placeholder) {
  & > div {
    width: 100%;
  }
}
</style>
