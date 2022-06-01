<template>
  <div class="promotion-page">
    <StickFlow title="PROMO CODE">
      <template #right><TfrSwitch v-model="data.disabled" /></template>
    </StickFlow>
    <div v-if="target === 'add'" class="tips">
      <svg-icon icon-class="lock" />
      <p class="text">
        <em>Editing a promo code:</em>A promo code is locked down at the
        commencement of its effective period. Once locked down, you will not be
        able to make any changes until it expires.
      </p>
    </div>
    <StickFlow title="PROMO CODE2" />
    <StickFlow title="PROMO CODE3" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import StickFlow from '@/components/StickyFlow/index.vue'
import TfrSwitch from '@/components/TfrSwitch/index.vue'

const route = useRoute()
const { type, target } = route.params
console.log('route', type, target)
const data = reactive({
  disabled: false
})
</script>

<style lang="scss" scoped>
.promotion-page {
  padding: 20px;
}
</style>
