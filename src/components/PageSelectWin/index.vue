<template>
  <div>
    <el-dialog
      :visible.sync="creatWin"
      width="430px"
      @close="closeWin"
    >
      <div class="content">
        111
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  visible?: boolean,
}
const prop = withDefaults(defineProps<Props>(), {
  visible: true
})
const emit = defineEmits(['update:visible'])
const creatWin = computed({
  get: () => {
    return prop.visible
  },
  set: (value) => {
    emit('update:visible', value)
  }
})
const closeWin = () => {
  creatWin.value = false
}
</script>

<style lang="scss" scoped>

</style>