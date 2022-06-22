import {
  AppContext,
  VNode,
  render,
  ComponentPublicInstance,
  h,
  isVNode
} from 'vue'
import {
  ElMessageBoxOptions,
  Action,
  Callback
} from 'element-plus/es/components/message-box'
import { isClient, isObject, isString } from '@vueuse/shared'
import MessageBoxConstructor from './tfrMessageBox.vue'
import { ITfrMessageBox } from './trrMessageBox.type'
import { MessageBoxState, MessageBoxData } from 'element-plus/lib/components/message-box/src/message-box.type'
import { hasOwn } from '@vue/shared'

const isUndefined = (val: any): val is undefined => val === undefined

const messageInstance = new Map<
  ComponentPublicInstance<{ doClose: () => void }>, // marking doClose as function
  {
    options: any
    callback?: Callback
    resolve: (res: any) => void
    reject: (reason?: any) => void
  }
>()

const initInstance = (
  props: any,
  container: HTMLElement,
  appContext: AppContext | null = null
) => {
  const vnode = h(MessageBoxConstructor, props)
  vnode.appContext = appContext
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)
  return vnode.component
}

const genContainer = () => {
  return document.createElement('div')
}

const showMessage = (options: any, appContext?: AppContext | null) => {
  const container = genContainer()

  options.onVanish = () => {
    render(null, container)
    messageInstance.delete(vm)
  }

  options.onAction = (action: Action) => {
    const currentMsg = messageInstance.get(vm)!
    let resolve: Action | { value: string; action: Action }
    if (options.showInput) {
      resolve = { value: vm.inputValue, action }
    } else {
      resolve = action
    }
    if (options.callback) {
      options.callback(resolve, instance.proxy)
    } else {
      if (action === 'cancel' || action === 'close') {
        if (options.distinguishCancelAndClose && action !== 'cancel') {
          currentMsg.reject('close')
        } else {
          currentMsg.reject('cancel')
        }
      } else {
        currentMsg.resolve(resolve)
      }
    }
  }

  const instance = initInstance(options, container, appContext)!

  const vm = instance.proxy as ComponentPublicInstance<
    { visible: boolean; doClose: () => void } & MessageBoxState
  >

  for (const prop in options) {
    if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
      vm[prop as keyof ComponentPublicInstance] = options[prop]
    }
  }

  // vm.visible = true
  return vm
}

async function MessageBox(
  options: ElMessageBoxOptions,
  appContext?: AppContext | null
): Promise<MessageBoxData>
function MessageBox(
  options: ElMessageBoxOptions | string | VNode,
  appContext?: AppContext | null
): Promise<{ value: string; action: MessageBoxType } | Action> {
  if (!isClient) return Promise.reject()

  let callback: Callback | undefined
  if (isString(options) || isVNode(options)) {
    options = {
      message: options
    }
  } else {
    callback = options.callback
  }

  return new Promise((resolve, reject) => {
    let vm: any;
    try {
      vm = showMessage(options, appContext)
    } catch (e) {
      console.log(e)
    }
    if (vm) {
      messageInstance.set(vm, {
        options,
        callback,
        resolve,
        reject
      })
    }
  })
}

type MessageBoxType = Action 

export const MESSAGE_BOX_VARIANTS: (Action)[] = [ 'confirm', 'cancel', 'close']

const MESSAGE_BOX_DEFAULT_OPTS: Record<
  MessageBoxType,
  Partial<ElMessageBoxOptions>
> = {
  confirm: { showCancelButton: true },
  close: {},
  cancel: {},
}

MESSAGE_BOX_VARIANTS.forEach((boxType) => {
  (MessageBox as Record<string, any>)[boxType] = messageBoxFactory(boxType)
})

function messageBoxFactory(boxType: typeof MESSAGE_BOX_VARIANTS[number]) {
  return (
    message: string,
    titleOrOpts: string | ElMessageBoxOptions,
    options?: ElMessageBoxOptions,
    appContext?: AppContext | null
  ) => {
    let title: string
    if (isObject(titleOrOpts)) {
      options = titleOrOpts
      title = 'DELETE?'
    } else if (isUndefined(titleOrOpts)) {
      title = 'DELETE?'
    } else {
      title = titleOrOpts
    }

    return MessageBox(
      Object.assign(
        {
          title,
          message,
          type: '',
          ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
        },
        options,
        {
          boxType
        }
      ),
      appContext
    )
  }
}

MessageBox.close = () => {
  messageInstance.forEach((_, vm) => {
    vm.doClose()
  })

  messageInstance.clear()
}

export default MessageBox as ITfrMessageBox
