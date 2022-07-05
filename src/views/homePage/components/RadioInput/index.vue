<template>
  <div class="optionbox">
    <tfr-radio>
      Full Width
    </tfr-radio>
    <div class="falmu">
      <div class="fullradio">
        <tfr-radio>
          Padding
        </tfr-radio>
      </div>
      <div class="screen_form">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.optionbox {
  .falmu {
    display: flex;
    .fullradio {
      height: 40px;
      display: flex;
      align-items: center;
    }
    .screen_form {
      margin-left: 16px;
    }
  }
}
</style>