<template>
  <div class="user-con">
    <transition name="fade">
      <div v-show="!isConfirmLogout" class="user">
        <span>{{ myToUpperCase(user.title) }}</span>
        <span>{{ myToUpperCase(user.username) }}</span>
        <svg-icon icon-class="logout" @click="onLogout" />
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isConfirmLogout" class="confirm-con">
        <span>Sign out?</span>
        <span class="btn" @click="confirmLogoutHandle">YES</span>
        <span class="btn" @click="isConfirmLogout = false">NO</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
const { user } = storeToRefs(userStore()),
  router = useRouter(),
  route = useRoute(),
  isConfirmLogout = ref<boolean>(false),
  onLogout = () => {
    isConfirmLogout.value = true
  },
  confirmLogoutHandle = async () => {
    await userStore().layoutHttp()
    router.push({ path: `/login?redirect=${route.fullPath}` })
    isConfirmLogout.value = false
  },
  myToUpperCase = (str: string) => {
    if (str) return str.toUpperCase()
  }
</script>

<style lang="scss" scoped>
.user-con {
  margin-top: 20px;
  position: relative;
  height: 20px;
}
.user {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  span {
    font-size: 14px;
    margin-right: 10px;
    word-break: break-all;
  }
  span:last-of-type {
    font-family: 'Brown Light';
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
