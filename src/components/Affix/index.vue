<template>
  <div ref="root" class="affix-placeholder" :style="{...wrapStyle}">
    <div :class="{'affix': affixed}" :style="{...myStyle, ...styles}">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { ref, reactive, onMounted, computed, nextTick, inject, onBeforeUnmount, Ref, getCurrentInstance } from 'vue'
  interface Props {
    offset?: number, // 设置的固定值
    onAffix?: Function,
    boundary?: string, // 自动计算的元素的类名，取其top来进行自动的offset计算
    myStyle?: object,
    isScrollView?: boolean, // 是否为el-scroll元素
    paddingTop?: number // 传入的向上对齐边界值
  }
  const prop = withDefaults(defineProps<Props>(), {
    offset: 0,
    onAffix: () => {},
    boundary: '',
    myStyle: () => ({}),
    isScrollView: false,
    paddingTop: 20
  })
  const affixed = ref(false)
  const affixedClientHeight = ref<number>(0)
  const styles = reactive({
    top: '',
    left: '',
    width: ''
  })
  const wrapStyle = reactive({
    height: '0'
  })
  const root = ref<HTMLElement | null>(null)
  const offsets = computed(() => {
    return prop.offset
  })
  let offset: number;
  const handleScroll = (target: any, element: HTMLElement) => {
    if (!offset) {
      if (prop.boundary) {
        const element = document.querySelector(`${prop.boundary}`)
        offset = (getOffset(<HTMLElement>element).top || offsets.value) - prop.paddingTop;
      } else {
        offset = offsets.value
      }
    }
    const scrollTop = (target.scrollTop || getScroll(window, true)) + offset // handle setting offset
    const elementOffset = getOffset(element)
    const parentOffset = getOffset(element?.parentElement)
    const childrenOffset = getOffset(<HTMLElement>element?.firstElementChild)

    // false走赋值
    if (!affixed.value) {
      if (prop.isScrollView && parentOffset.top <= offset + elementOffset.height) {
        affixed.value = true
        styles.top = `${offset}px`
        styles.left = `${childrenOffset.left}px`
        styles.width = `${childrenOffset.width}px`
        prop.onAffix(affixed)
      }
      // 非滚动范围内的赋值处理
      if (!prop.isScrollView && scrollTop > elementOffset.top) {
        affixed.value = true
        styles.top = `${offset}px`
        styles.left = `${elementOffset.left}px`
        styles.width = `${childrenOffset.width}px`
        prop.onAffix(affixed)
      }
    }
    // 还原逻辑
    if (affixed.value) {
      // 向上推一下逻辑
      if (prop.isScrollView && parentOffset.bottom  > 0 && parentOffset.bottom <= offset + elementOffset.height) {
        styles.top = `${parentOffset.bottom - elementOffset.height}px`
      }
      // scroll还原
      if (prop.isScrollView && (parentOffset.top > offset || parentOffset.bottom < offset)) {
        affixed.value = false
        styles.top = ''
        styles.left = ''
        styles.width = ''
        prop.onAffix(affixed)
      }
      // 非滚动范围的赋值还原
      if (!prop.isScrollView && scrollTop <= offset) {
        affixed.value = false
        styles.top = ''
        styles.left = ''
        styles.width = ''
        prop.onAffix(affixed)
      }
    }

    if (document.documentElement.scrollTop === 0) {
      styles.width = `${elementOffset.width}px`
      prop.onAffix(`${elementOffset.width}px`)
    }
    nextTick(() => {
      styles.width = `${elementOffset.width}px`
      prop.onAffix(`${elementOffset.width}px`)
    })
    return true
  }
  const getOffset = (element: HTMLElement | null) => {
    const body = document.body
    const curElementBounding = useElementBounding(element || body)
    const clientTop = curElementBounding.top.value || 0
    const clientLeft = curElementBounding.left.value || 0
    return {
      top: clientTop,
      left: clientLeft,
      width: curElementBounding?.width.value,
      height: curElementBounding?.height.value,
      bottom: curElementBounding?.bottom.value,
      y: curElementBounding.y.value
    }
  }
  const getScroll = (w:any, top?:any) => {
    let ret = w[`page${(top ? 'Y' : 'X')}Offset`]
    const method = `scroll${top ? 'Top' : 'Left'}`
    if (typeof ret !== 'number') {
      const d = w.document
      // ie6,7,8 standard mode
      ret = d.documentElement[method]
      if (typeof ret !== 'number') {
        // quirks mode
        ret = d.body[method]
      }
    }
    return ret
  }
  const getParentRef = inject<any>('getRef', null)
  const getScrollRef = inject<any>('scrollRef')
  let  addEventHandleScroll: any;
  onMounted(() => {
    const currentInstance = getCurrentInstance()?.refs.root as HTMLElement
    addEventHandleScroll = (target: any, curElement: any = currentInstance) => {
      handleScroll(target, curElement)
    }
    affixedClientHeight.value = root.value?.children[0].clientHeight || 0
    wrapStyle.height = `${affixedClientHeight.value}px`
    if (getParentRef) {
      const drawerContent = getParentRef.value
      drawerContent.addEventListener('scroll', addEventHandleScroll)
      drawerContent.addEventListener('resize', addEventHandleScroll)
      drawerContent.addEventListener('orientationchange', addEventHandleScroll, false)
    }
    if (getScrollRef) {
      const scoll = getScrollRef.value
      if( scoll ) {
        const baseFunc = scoll.$.emitsOptions.scroll
        scoll.$.emitsOptions.scroll = (target: any) => {
          baseFunc(target, currentInstance)
          addEventHandleScroll(target, currentInstance)
        }
      }
    }
    if (!getScrollRef && !getParentRef){
      window.addEventListener('scroll', addEventHandleScroll)
      window.addEventListener('resize', addEventHandleScroll)
      window.addEventListener('orientationchange', addEventHandleScroll, false)
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', addEventHandleScroll)
    window.removeEventListener('resize', addEventHandleScroll)
    window.removeEventListener('orientationchange', addEventHandleScroll, false)
    if (getParentRef) {
      const drawerContent = getParentRef.value
      drawerContent && drawerContent.removeEventListener('scroll', addEventHandleScroll)
      drawerContent && drawerContent.removeEventListener('resize', addEventHandleScroll)
      drawerContent && drawerContent.removeEventListener('orientationchange', addEventHandleScroll, false)
    }
  })
</script>

<style scoped>
.affix{
  position: fixed;
  background-color:#fff;
  z-index: 1000;
}
</style>
