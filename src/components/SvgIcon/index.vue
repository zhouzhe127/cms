<template>
  <div v-if="external" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-bind="$attrs" />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate'
import { computed } from 'vue'
interface Props {
  iconClass?: string,
  className?: string
}
const props = withDefaults(defineProps<Props>(), {
  iconClass: '',
  className: ''
})
const external = computed(() => isExternal(props.iconClass))
const iconName = computed(() => `#icon-src-icons-svg-${props.iconClass}`)
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
}))
const svgClass = computed(() => props.className ? 'svg-icon ' + props.className : 'svg-icon')
// export default {
//   name: 'SvgIcon',
//   props: {
//     iconClass: {
//       type: String,
//       required: true
//     },
//     className: {
//       type: String,
//       default: ''
//     }
//   },
//   computed: {
//     isExternal() {
//       return isExternal(this.iconClass)
//     },
//     iconName() {
//       return `#icon-${this.iconClass}`
//     },
//     svgClass() {
//       if (this.className) {
//         return 'svg-icon ' + this.className
//       } else {
//         return 'svg-icon'
//       }
//     },
//     styleExternalIcon() {
//       return {
//         mask: `url(${this.iconClass}) no-repeat 50% 50%`,
//         '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
//       }
//     }
//   }
// }
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
