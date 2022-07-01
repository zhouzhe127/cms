import { markRaw } from 'vue'
import LegalEdit from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/LegalEdit.vue'

export default [
  {
    icon: 'legal',
    title: 'Legal',
    component: markRaw(LegalEdit)
  }
]
