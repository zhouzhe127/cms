import { createApp } from 'vue'
// import '@/router/permission'
// @ts-ignore
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { registerStore } from '@/store'
import '@/styles/index.scss' // global css
// @ts-ignore
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import '@/icons/material/materialIcons.css'
import TfrMessage from '@/utils/tfrMessage'
const app = createApp(App)
app.config.globalProperties.$tfrMessage = TfrMessage
app.component('SvgIcon', SvgIcon)
app.use(router).use(createPinia()).mount('#app')
registerStore()
