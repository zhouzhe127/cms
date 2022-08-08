import { App, DirectiveBinding } from 'vue'

export default (app: App<Element>) => {
  app.directive('elSelectInput', {
    // mounted: (el: HTMLElement, binding: DirectiveBinding, node: VNode) => {
    //   const element = el
    //   element.addEventListener('change', function () {
    //     console.log(element)
    //   })
    //   console.log(el, 'kkk', binding)
    // },

    updated: (el: HTMLElement, binding: DirectiveBinding) => {
      const element = el.getElementsByClassName('el-select-tags-wrapper')[0]
      const arg = binding.arg
      const value = binding.value
      const targetValue: string[] = value.targetValue
      const targetOptions: any[] = value.targetOptions
      const optionsLength = targetOptions.length
      const length = targetValue.length
      try {
        const elTags = Array.from(element.children)
        if (arg === 'accounts') {
          if (length + 1 === optionsLength) {
            elTags.forEach(item => {
              let currentNode = item as HTMLElement
              currentNode.style.display = 'none'
              if (item?.className?.indexOf('all-tag') === -1) {
                currentNode.style.display = 'none'
              } else {
                currentNode.style.display = 'inline-block'
              }
            })
            setTimeout(() => {
              const allTagNode = document.createElement('span')
              allTagNode.className = 'all-tag'
              allTagNode.innerText = `ALL ${arg.toUpperCase()}`
              const firstElementChild = element.firstElementChild
              const firstChild = element.firstChild
              if (firstElementChild?.className?.indexOf('all-tag') === -1) {
                element.insertBefore(allTagNode, firstChild)
              }
            }, 500)
          } else {
            elTags.forEach((item: Element) => {
              if (item?.className?.indexOf('all-tag') === -1) {
                let currentNode = item as HTMLElement
                currentNode.style.display = 'inline-block'
              } else {
                element.removeChild(item)
              }
            })
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  })
}
