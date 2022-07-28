<template>
  <div class="optionbox">
    <el-radio-group v-model="modelValue" v-bind="$attrs" @change="onChange">
      <div :class="{
        'active': modelValue !== ARTICLE_REGULAR.FULL_WIDTH
      }">
        <tfr-radio :label="ARTICLE_REGULAR.FULL_WIDTH"> {{ textOne }} </tfr-radio>
      </div>
      <div class="falmu" :class="{
        'active': modelValue !== ARTICLE_REGULAR.PADDING
      }">
        <div class="fullradio">
          <tfr-radio :label="ARTICLE_REGULAR.PADDING"> {{ textTwo }} </tfr-radio>
        </div>
        <div class="screen-form">
          <slot />
        </div>
      </div>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ARTICLE_REGULAR } from '../../type'
interface PropsType {
  modelValue?: string,
  textOne?: string,
  textTwo?: string,
}

withDefaults(defineProps<PropsType>(), {
  modelValue: '', // 默认值
  textOne: 'Full Width',
  textTwo: 'Padding'
})
const emit = defineEmits(['change', 'update:modelValue'])
const onChange = (v: string) => {
  emit('update:modelValue', v)
  emit('change', v)
}
</script>

<style lang="scss" scoped>
.optionbox {
  .el-radio-group {
    display: block;
  }
  .active {
    opacity: .4;
  }
  .falmu {
    display: flex;
    .fullradio {
      height: 40px;
      display: flex;
      align-items: center;
    }
    .screen-form {
      margin-left: 16px;
    }
  }
}
</style>
