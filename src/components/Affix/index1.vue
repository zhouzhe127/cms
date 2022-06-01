<template>
  <div class="affix-placeholder" :style="{...wrapStyle}">
    <div :class="{'affix': affixed}" :style="{...myStyle, ...styles}">
      <slot />
    </div>
  </div>
</template>
<script>
/**
* @file Affix.vue
*/
export default {
  props: {
    offset: {
      type: Number,
      default: 0
    },
    onAffix: {
      type: Function,
      default() {}
    },
    boundary: {
      type: String,
      default: ''
    },
    myStyle: {
      type: Object,
      default: () => {}
    }
  },
  inject: {
    getParentRef: {
      from: 'getRef',
      default: () => {}
    },
  },
  data() {
    return {
      affixed: false,
      styles: {},
      affixedClientHeight: 0,
      wrapStyle: {}
    }
  },
  computed: {
    offsets() {
      if (this.boundary) {
        return 0
      }
      return this.offset
    }
  },
  mounted() {
    this.affixedClientHeight = this.$el.children[0].clientHeight
    this.wrapStyle = { height: `${this.affixedClientHeight}px` }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
    window.addEventListener('orientationchange', function(e) {
      this.handleScroll()
    }, false)
    if (this.getParentRef) {
      const rootRef = this.getParentRef()
      const drawerContent = rootRef.$refs.drawerContent
      drawerContent.addEventListener('scroll', this.handleScroll)
      drawerContent.addEventListener('resize', this.handleScroll)
      drawerContent.addEventListener('orientationchange', function(e) {
        this.handleScroll()
      }, false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
    window.removeEventListener('orientationchange', function(e) {
      this.handleScroll()
    }, false)
    if (this.getParentRef) {
      const rootRef = this.getParentRef()
      const drawerContent = rootRef.$refs.drawerContent
      drawerContent && drawerContent.removeEventListener('scroll', this.handleScroll)
      drawerContent && drawerContent.removeEventListener('resize', this.handleScroll)
      drawerContent && drawerContent.removeEventListener('orientationchange', function(e) {
        this.handleScroll()
      }, false)
    }
  },
  methods: {
    getScroll(w, top) {
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
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect() // 返回元素的大小以及相对于视口的位置
      const body = document.body
      const clientTop = element.clientTop || body.clientTop || 0
      const clientLeft = element.clientLeft || body.clientLeft || 0
      // const clientHeight = element.clientHeight || 0;
      const scrollTop = this.getScroll(window, true)
      const scrollLeft = this.getScroll(window)
      return {
        top: rect.bottom + scrollTop - clientTop - this.affixedClientHeight,
        left: rect.left + scrollLeft - clientLeft,
        width: rect.width
      }
    },
    handleScroll() {
      const scrollTop = this.getScroll(window, true) + this.offsets// handle setting offset
      const elementOffset = this.getOffset(this.$el)
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true
        this.styles = {
          top: `${this.offsets}px`,
          left: `${elementOffset.left}px`,
          width: `${elementOffset.width}px`
        }
        this.onAffix(this.affixed)
      }
      // if setting boundary
      if (this.boundary && scrollTop > elementOffset.top) {
        const el = document.getElementById(this.boundary.slice(1))
        if (el) {
          const boundaryOffset = this.getOffset(el)
          if ((scrollTop + this.offsets) > boundaryOffset.top) {
            const top = scrollTop - boundaryOffset.top
            this.styles.top = `-${top}px`
          }
        }
      }
      if (this.affixed && scrollTop <= elementOffset.top) {
        this.affixed = false
        this.styles = {}
        this.onAffix(this.affixed)
      }
      if (this.affixed && this.boundary) {
        const el = document.getElementById(this.boundary.slice(1))
        if (el) {
          const boundaryOffset = this.getOffset(el)
          if ((scrollTop + this.offsets) <= boundaryOffset.top) {
            this.styles.top = 0
          }
        }
      }
      if (document.documentElement.scrollTop === 0) {
        this.$set(this.styles, 'width', `${elementOffset.width}px`)
        this.onAffix(`${elementOffset.width}px`)
      }
      this.$nextTick(() => {
        this.$set(this.styles, 'width', `${elementOffset.width}px`)
        this.onAffix(`${elementOffset.width}px`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.affix{
  position:fixed;
  background-color:#fff;
  z-index: 1000;
}
</style>
