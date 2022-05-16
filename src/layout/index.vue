<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <PlatformControl />
        <div class="main_content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PlatformControl from '@/components/PlatformControl/index.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  background-color: #F8F8F8;
  .main_content {
    background-color: #ffffff;
  }
  .el-main {
    padding-top: 0;
  }
}
</style>
