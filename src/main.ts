import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router"
import { createPinia } from 'pinia';
import { registerStore } from '@/store'
import '@/styles/index.scss' // global css
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import '@/icons/material/materialIcons.css'
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router).use(createPinia()).mount('#app')
registerStore()
