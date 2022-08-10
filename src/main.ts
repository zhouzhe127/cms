import { createApp } from 'vue'
import '@/router/permission'
// @ts-ignore
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { registerStore } from '@/store'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/styles/index.scss' // global css
// @ts-ignore
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import '@/icons/material/materialIcons.css'
import TfrMessage from '@/utils/tfrMessage'
import elSelectInput from '@/directive/elSelectInput'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.config.globalProperties.$tfrMessage = TfrMessage
app.component('SvgIcon', SvgIcon)
app.use(router).use(pinia).mount('#app')
app.use(elSelectInput)
registerStore()
