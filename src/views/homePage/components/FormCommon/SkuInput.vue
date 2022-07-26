<template>
  <div class="contentbox">
    <div class="imgbox"></div>
    <div class="inpbox">
      <EdgeInput v-model="sku" :has-clear="false" placeholder="Enter TFRID..." />
      <span v-if="hasAdd" class="add" @click="addClick">ADD</span>
    </div>
    <svg-icon v-if="!hasAdd" icon-class="drag_indicator" class="svgicon" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EdgeInput from '@/components/TfrInput/EdgeInput.vue'
interface PropsType {
  hasAdd?: boolean
}
// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<PropsType>(), {
  hasAdd: false
})
const sku = ref('')
const inputEmits = defineEmits([
  'addClick',
])
const addClick = () => {
  inputEmits('addClick', sku)
}
</script>

<style lang="scss" scoped>
.contentbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .inpbox {
    position: relative;
    width: 218px;
    height: 50px;
    display: flex;
    margin: 0 16px 0 10px;
    align-items: flex-end;
  }
  .imgbox {
    width: 50px;
    height: 50px;
    background-color: $bg;
  }
  .add {
    position: absolute;
    right: 10px;
    top: 15px;
    line-height: initial;
    cursor: pointer;
  }
  .svgicon {
    font-size: 20px;
    opacity: .5;
  }
}
</style>