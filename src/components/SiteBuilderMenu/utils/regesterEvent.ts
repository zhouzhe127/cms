import { EventKey } from '@/components/SiteBuilderMenu/type'
import { useEventBus } from '@vueuse/core'
import { onUnmounted } from 'vue'
export function onSideEvent(key: string, func: Function) {
  const { on } = useEventBus<string>(EventKey[key])
  const unsubscribe = on((e, item) => {
    func(e, item)
  })
  onUnmounted(() => {
    unsubscribe() // unregister the listener
  })
}

export function emitSideEvent(key: string) {
  const  { emit } = useEventBus<string>(EventKey[key])
  return emit
}
