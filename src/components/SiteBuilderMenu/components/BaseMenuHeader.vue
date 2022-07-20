<template>
  <div
    :class="`menu_header ${disable ? 'isdisable' : ''}`"
    @click.prevent="() => (disable ? '' : emit('headClick'))"
  >
    <slot name="header">
      <div class="header_con">
        <span>{{ title }}</span>
        <svg-icon
          :icon-class="icon"
          class="add"
          color="black"
          @click="addClick"
        />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  title: string
  disable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'add_black',
  title: '--',
  disable: false
})
const emit = defineEmits(['iconClick', 'headClick'])
const addClick = () => {
  if (!props.disable) emit('iconClick')
}
</script>

<style lang="scss" scope>
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
  background-color: #f8f8f8;
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

.isdisable {
  &.menu_header {
    border-bottom: 1px #8a9290 solid;
    color: #8a9290;
  }
}
</style>
