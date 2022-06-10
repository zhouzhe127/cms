<template>
  <div ref="root" class="affix-placeholder" :style="{...wrapStyle}">
    <div :class="{'affix': affixed}" :style="{...myStyle, ...styles}">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, computed, nextTick, inject, onBeforeUnmount } from 'vue'
  interface Props {
    offset?: number,
    onAffix?: Function,
    boundary?: string,
    myStyle?: object
  }
  const prop = withDefaults(defineProps<Props>(), {
    offset: 0,
    onAffix: () => {},
    boundary: '',
    myStyle: () => ({})
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
  const root = ref<Element | null>(null)
  const offsets = computed(() => {
    if (prop.boundary) {
      return 0
    }
    return prop.offset
  })
  const handleScroll = (target?:any) => {
    const scrollTop = (target.scrollTop || getScroll(window, true)) + offsets.value// handle setting offset
    const elementOffset = getOffset(root.value)
    if (!affixed.value && scrollTop > elementOffset.top) {
      affixed.value = true
      styles.top = `${offsets.value}px`
      styles.left = `${elementOffset.left}px`
      styles.width = `${elementOffset.width}px`
      prop.onAffix(affixed)
    }
    // if setting boundary
    if (prop.boundary && scrollTop > elementOffset.top) {
      const el = document.getElementById(prop.boundary.slice(1))
      if (el) {
        const boundaryOffset = getOffset(el)
        if ((scrollTop + offsets.value) > boundaryOffset.top) {
          const top = scrollTop - boundaryOffset.top
          styles.top = `-${top}px`
        }
      }
    }
    if (affixed && scrollTop <= elementOffset.top) {
      affixed.value = false
      styles.top = ''
      styles.left = ''
      styles.width = ''
      prop.onAffix(affixed)
    }
    if (affixed && prop.boundary) {
      const el = document.getElementById(prop.boundary.slice(1))
      if (el) {
        const boundaryOffset = getOffset(el)
        if ((scrollTop + offsets.value) <= boundaryOffset.top) {
          styles.top = '0'
        }
      }
    }
    if (document.documentElement.scrollTop === 0) {
      styles.width = `${elementOffset.width}px`
      // this.$set(styles, 'width', `${elementOffset.width}px`)
      prop.onAffix(`${elementOffset.width}px`)
    }
    nextTick(() => {
      styles.width = `${elementOffset.width}px`
      prop.onAffix(`${elementOffset.width}px`)
    })
    return true
  }
  const getOffset = (element:Element|null) => {
    const rect = element?.getBoundingClientRect() // 返回元素的大小以及相对于视口的位置
    const body = document.body
    const clientTop = element?.clientTop || body.clientTop || 0
    const clientLeft = element?.clientLeft || body.clientLeft || 0
    // const clientHeight = element.clientHeight || 0;
    const scrollTop = getScroll(window, true)
    const scrollLeft = getScroll(window)
    return {
      top: rect?.bottom + scrollTop - clientTop - affixedClientHeight.value,
      left: rect?.left + scrollLeft - clientLeft,
      width: rect?.width
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
  const getParentRef = inject<Function>('getRef')
  const getScrollRef = inject<any>('scrollRef')
  onMounted(() => {
    affixedClientHeight.value = root.value?.children[0].clientHeight || 0
    wrapStyle.height = `${affixedClientHeight.value}px`
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    window.addEventListener('orientationchange', function(e) {
      handleScroll()
    }, false)
    if (getParentRef) {
      const rootRef = getParentRef()
      const drawerContent = rootRef.$refs.drawerContent
      drawerContent.addEventListener('scroll', handleScroll)
      drawerContent.addEventListener('resize', handleScroll)
      drawerContent.addEventListener('orientationchange', function() {
        handleScroll()
      }, false)
    }
    if (getScrollRef) {
      const scoll = getScrollRef.value
      console.log('---', scoll)
      scoll.$.emitsOptions.scroll = handleScroll
      // getScrollRef.scroll = handleScroll
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
    window.removeEventListener('orientationchange', function(e) {
      handleScroll()
    }, false)
    if (getParentRef) {
      const rootRef = getParentRef()
      const drawerContent = rootRef.$refs.drawerContent
      drawerContent && drawerContent.removeEventListener('scroll', handleScroll)
      drawerContent && drawerContent.removeEventListener('resize', handleScroll)
      drawerContent && drawerContent.removeEventListener('orientationchange', function() {
        handleScroll()
      }, false)
    }
  })
</script>

<style scoped>
.affix{
  position:fixed;
  background-color:#fff;
  z-index: 1000;
}
</style>
