<template>
  <div class="emptybox">
    <div>Dashed outline is for developer reference only.</div>
    <div>Do not code into CMS.</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.emptybox {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px black dashed;
  font-family: "Brown Regular Italic", serif;
  font-weight: bolder;
}
</style>