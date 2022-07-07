<template>
  <div class="optionbox">
    <el-radio-group v-model="regularType" @change="onChange">
      <tfr-radio :label="ARTICLE_REGULAR.FULL_WIDTH"> Full Width </tfr-radio>
      <div class="falmu">
        <div class="fullradio">
          <tfr-radio :label="ARTICLE_REGULAR.PADDING"> Padding </tfr-radio>
        </div>
        <div
          :class="{
            'screen-form': true,
            'is-checked': regularType === ARTICLE_REGULAR.PADDING
          }"
        >
          <slot />
        </div>
      </div>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ARTICLE_REGULAR } from '../../type'
const emit = defineEmits(['change'])
const regularType = ref<string>()
const onChange = () => {
  emit('change')
}
</script>

<style lang="scss" scoped>
.optionbox {
  .el-radio-group {
    display: block;
    .tfr-radio {
      ::v-deep(.el-radio) {
        .el-radio__inner {
          border: 1px solid #c6c9c9;
        }
        .el-radio__label {
          color: #c6c9c9;
        }
      }
    }
    .tfr-radio {
      ::v-deep(.el-radio) {
        .is-checked {
          color: $theme;
          .el-radio__inner {
            border: 1px solid $theme;
            &::after {
              width: 8px;
              height: 8px;
              background-color: $theme;
            }
          }
          & + .el-radio__label {
            color: $theme;
          }
        }
      }
    }
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
