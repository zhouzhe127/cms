<template>
  <div class="side_container">
    <el-scrollbar>
      <slot />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.side_container {
  width: 100%;
  overflow: auto;
  margin-top: 20px;
}
</style>
