import { createApp } from 'vue'
// import '@/router/permission'
import App from '@/App.vue'
import router from '@/router'
import { store, key } from '@/store'
import '@/styles/index.scss' // global css
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import '@/icons/material/materialIcons.css'
const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router).use(store, key).mount('#app')
