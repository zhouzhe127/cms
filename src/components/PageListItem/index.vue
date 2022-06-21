<template>
  <div :class="`page-base-card ${disable ? 'page-base-card__disable' : ''}`" @click.prevent="emits('click')">
    <div class="item">
      <div class="icon" v-if="!noIcon" :style="iconStyle">
        <slot name="icon"></slot>
      </div>
      <PageListItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageListItem from './PageListItem.vue'
interface IProps {
  iconStyle?: {[key:string]: string},
  disable?: boolean,
  noIcon?: boolean 
}

const emits = defineEmits(['click'])
const props = withDefaults(defineProps<IProps>(), {
  iconStyle: () => {
    return {
      marginRight: '10px'
    }
  },
  disable: false,
  noIcon: false
})

</script>

<style lang="scss" scoped>
.page-base-card {
  width: 100%;
  .item {
    padding: 10px;
    border-radius: 10px;
    min-height: 60px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: $theme;
    .icon {
      width: 30px;
      height: 30px;
      // margin-right: 10px;
      flex-basis: 30px;
    }
  }
  .item:hover {
    background-color: #fff;
    .icon {
      opacity: 0.8;
    }
  }
}

.page-base-card__disable {
  .item {
    color: #8a9290;
  }
}
</style>
