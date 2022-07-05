<template>
  <div class="tfr-radio">
    <el-radio v-bind="$attrs" @change="change">
      <slot></slot>
    </el-radio>
  </div>
</template>

<script setup lang="ts">
const radioGroupEmits = defineEmits(['change'])
const change = (label: string) => {
  radioGroupEmits('change', label)
}
</script>

<style lang="scss" scoped>
.tfr-radio {
  ::v-deep(.el-radio) {
    line-height: 50px;
    .is-checked {
      .el-radio__inner {
        background-color: #ffffff;
        &::after {
          width: 8px;
          height: 8px;
          background-color: #1B2B27;
        }
      }
    }
    .el-radio__inner {
      width: 16px;
      height: 16px;
      box-sizing: 2px;
      border: 1px solid #1B2B27;
    }
    .el-radio__label {
      color: black;
    }
  }
}
// .tfr-radio-group {
//   ::v-deep(.el-radio__input.is-checked) {
//     .el-radio__inner {
//       background-color: $theme;
//       border-color: $theme;
//       &::after {
//         transform: translate(-50%, -50%) scale(1.25);
//       }
//       &:hover {
//         border-color: $theme;
//       }
//     }
//     & + .el-radio__label {
//       color: $theme;
//     }
//   }
//   ::v-deep(.el-radio__label) {
//     color: rgba(27, 42, 39, 0.5);
//   }
//   ::v-deep(.el-radio__inner) {
//     width: 15px;
//     height: 15px;
//     border-color: rgba(27, 42, 39, 0.5);
//     &:hover {
//       border-color: rgba(27, 42, 39, 0.5);
//     }
//   }
// }
</style>
