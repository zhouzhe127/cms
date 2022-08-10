<template>
  <div class="wpdfull">
    <RadioInput v-model="type" @change="rdChange">
      <div>
        <div class="itemfox">
          <svg-icon icon-class="pc" class="svgicon" />
          <input v-model="form.pcWidth" type="text" class="pdipt" />
          <span>PX</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="straighten" class="svgicon" />
          <input v-model="form.pcMax" type="text" class="pdipt" />
          <span>Max</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="mobile" class="svgicon rot" />
          <input v-model="form.mbWidth" type="text" class="pdipt" />
          <span>PX</span>
        </div>
        <div class="itemfox">
          <svg-icon icon-class="straighten" class="svgicon" />
          <input v-model="form.mbMax" type="text" class="pdipt" />
          <span>Max</span>
        </div>
      </div>
    </RadioInput>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import RadioInput from './index.vue'
import { ARTICLE_REGULAR } from '../../type'
interface OptionItem {
  pcWidth: string
  pcMax: string
  mbWidth: string
  mbMax: string
  full_width: ARTICLE_REGULAR
}
interface PropsType {
  value?: OptionItem
}
const props = withDefaults(defineProps<PropsType>(), {})
const form = reactive({
  pcWidth: '',
  pcMax: '',
  mbWidth: '',
  mbMax: ''
})
const type = ref(ARTICLE_REGULAR.FULL_WIDTH)
onMounted(() => {
  if (props.value) {
    form.pcWidth = props.value.pcWidth
    form.pcMax = props.value.pcMax
    form.mbWidth = props.value.mbWidth
    form.mbMax = props.value.mbMax
    type.value = props.value.full_width
  }
})
const rdChange = (v: string) => {
  // form.pcWidth = ''
  // form.pcMax = ''
  // form.mbWidth = ''
  // form.mbMax = ''
}
defineExpose({
  type,
  form
})
</script>

<style lang="scss" scoped>
.wpdfull {
  .itemfox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .pdipt {
      width: 80px;
      height: 40px;
      text-align: center;
      padding: 10px;
      margin: 0 8px;
      border: 1px #c6c9c9 solid;
    }
    .svgicon {
      font-size: 20px;
    }
    .rot {
      transform: rotate(90deg);
    }
    span {
      font-size: 14px;
    }
  }

  // ::v-deep(.is-checked) {
  //   .pdipt {
  //     border: 1px $theme solid;
  //   }

  //   .svgicon.svg-icon {
  //     fill: $theme;
  //   }
  // }
}
</style>
