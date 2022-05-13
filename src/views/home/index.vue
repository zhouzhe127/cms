<template>
  <div class="container">
    Home...
    <div>{{showCount}}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore} from '@/store'
const store = useStore()
const count = ref(0)
const showCount = computed(()=>{
  return store.getters['getCount']
})
// const addBtn = ()=>{
//   store.commit('setCount',++count.value)
// }
</script>

<style scoped lang="scss">

</style>
