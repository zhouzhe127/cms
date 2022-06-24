import { markRaw } from 'vue'
import Download from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Download.vue'
import External from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/External.vue'
import Code from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Code.vue'
import Email from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Email.vue'
import Internal from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Internal.vue'

export default [
  {
    icon: 'link',
    title: 'External',
    component: markRaw(External)
  },
  {
    icon: 'internal',
    title: 'Internal',
    component: markRaw(Internal)
  },
  {
    icon: 'codeicon',
    title: 'Code',
    component: markRaw(Code)
  },
  {
    icon: 'mail_fill',
    title: 'Email',
    component: markRaw(Email) 
  },
  {
    icon: 'download',
    title: 'Download',
    component: markRaw(Download)
  },
]