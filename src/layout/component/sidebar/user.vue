<template>
  <div class="user-con">
    <transition name="fade">
      <div class="user" v-show="!isConfirmLogout">
        <span>title</span>
        <span>username</span>
        <svg-icon icon-class="logout" @click="onLogout" />
      </div>
    </transition>
    <transition name="fade">
      <div class="confirm-con" v-show="isConfirmLogout">
        <span>Sign out?</span>
        <span class="btn" @click="isConfirmLogout = false">YES</span>
        <span class="btn" @click="isConfirmLogout = false">NO</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isConfirmLogout = ref<boolean>(false)
const onLogout = () => {
  isConfirmLogout.value = true
}
</script>

<style lang="scss" scoped>
.user-con {
  margin-top: 20px;
  position: relative;
  height: 20px;
  padding: 0 20px;
}
.user {
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    margin-right: 10px;
  }
  span:last-of-type {
    font-family: 'San Francisco';
  }
  svg {
    width: 20px;
    height: 20px;
    font-size: 20px;
    cursor: pointer;
  }
}

.confirm-con {
  line-height: 20px;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  .btn {
    cursor: pointer;
    margin-left: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
