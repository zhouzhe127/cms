import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


export default function comwim() {
  const router = useRouter()
  const showWin = ref(false)
  const closeWin = () => {
    router.push({
      path: '/siteBuilder'
    })
  }
  onMounted(() => {
    showWin.value = true
  })
  return {
    showWin,
    closeWin
  }
}