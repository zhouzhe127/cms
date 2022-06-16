<template>
  <div>
    <TfrDialog v-bind="$attrs" width="336px" append-to-body class="page-add-dialog" :is-close="false">
      <div class="type-list">
        <ul>
          <li v-for="(item, index) in listArr" :key="index" @click="addpage">
            <svg-icon :icon-class="item.icon"/>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
import store from '@/store'
console.log(store.setBuilder)
const addSidebar = store.setBuilder.sideState.addSidebar
const listArr = [
  {
    title: 'PAGE',
    icon: 'tablet'
  },
  {
    title: 'ARTICLE',
    icon: 'article'
  },
  {
    title: 'PLP',
    icon: 'scratchable'
  },
  {
    title: 'LINK',
    icon: 'link'
  },
  {
    title: 'CLIP',
    icon: 'clip'
  },
  {
    title: 'FOLDER',
    icon: 'folder'
  },
  {
    title: 'SMART',
    icon: 'smart'
  }
]
const emit = defineEmits(['update:modelValue'])
const addpage = () => {
  addSidebar({
    title: 'New Custom',
    icon: 'check_box'
  })
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.page-add-dialog{
  .type-list{
    ul{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding:10px;
        font-size:12px;
        cursor: pointer;
        opacity: 0.5;
        .svg-icon{
          font-size:30px;
          margin-bottom: 10px;
        }
        &:hover{
          opacity: 1;
        }
      }
    }

  }
}
</style>
