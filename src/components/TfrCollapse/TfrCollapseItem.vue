<template>
  <div class="menu">
    <slot name="header">
      <BaseMenuHeader
        title="About"
        :icon="isActive ? 'menu_subtrack' : 'add_black'"
        @headClick="handleHeaderClick"
      ></BaseMenuHeader>
    </slot>
  </div>
  <div class="container" v-show="isActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import BaseMenuHeader from '@/components/SiteBuilderMenu/components/BaseMenuHeader.vue'
import { collapseContextKey } from './index'

interface Props {
  name: string
}

const props = withDefaults(defineProps<Props>(), {})

const collapse: any = inject(collapseContextKey)

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name)
)

const handleHeaderClick = () => {
  collapse?.handleItemClick(props.name)
}
</script>

<style lang="scss" scope></style>
