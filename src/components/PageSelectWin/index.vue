<template>
  <div>
    <TfrDialog v-bind="$attrs" width="336px" append-to-body class="page-add-dialog" :is-close="false">
      <div class="type-list">
        <ul>
          <li>
            <svg-icon icon-class="tablet"/>
            <span>PAGE</span>
          </li>
          <li>
            <svg-icon icon-class="article"/>
            <span>ARTICLE</span>
          </li>
          <li>
            <svg-icon icon-class="scratchable"/>
            <span>PLP</span>
          </li>
          <li>
            <svg-icon icon-class="link"/>
            <span>LINK</span>
          </li>
          <li>
            <svg-icon icon-class="clip"/>
            <span>CLIP</span>
          </li>
          <li>
            <svg-icon icon-class="folder"/>
            <span>FOLDER</span>
          </li>
          <li>
            <svg-icon icon-class="smart"/>
            <span>SMART</span>
          </li>
        </ul>
      </div>
    </TfrDialog>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import TfrDialog from '@/components/TfrDialog/index.vue'
// interface Props {
//   visible?: boolean,
// }
// const prop = withDefaults(defineProps<Props>(), {
//   visible: false
// })
// const emit = defineEmits(['update:visible'])
// const creatWin = computed({
//   get: () => {
//     console.log(111)
//     return prop.visible
//   },
//   set: (value) => {
//     emit('update:visible', value)
//   }
// })
// const closeWin = () => {
//   creatWin.value = false
// }
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