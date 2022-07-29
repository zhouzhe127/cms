import { EventKey } from '@/components/SiteBuilderMenu/type'
import { useEventBus } from '@vueuse/core'
import { onUnmounted } from 'vue'
export function onSideEvent(key: string, func: Function) {
  onRegesterEvent(EventKey[key], func) 
}

export function emitSideEvent(key: string) {
  return emitRegesterEvent(EventKey[key])
}

export function onRegesterEvent(key: string | Symbol, func: Function) {
  if (!key) return
  const { on } = useEventBus<string>(key)
  const unsubscribe = on((e, item) => {
    func(e, item)
  })
  onUnmounted(() => {
    unsubscribe() // unregister the listener
  })
}

export function emitRegesterEvent(key: string | Symbol) {
  if (!key) return false
  const { emit } = useEventBus<string>(key)
  return emit
}
