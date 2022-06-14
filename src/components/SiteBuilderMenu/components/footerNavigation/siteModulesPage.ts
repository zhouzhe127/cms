import Article from '@/components/SiteBuilderMenu/components/setmodules/Article.vue'
import External from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/External.vue'
import Code from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Code.vue'
import Email from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Email.vue'
import Internal from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/Internal.vue'

export default [
  {
    icon: 'link',
    title: 'External',
    component: External 
  },
  {
    icon: 'internal',
    title: 'Internal',
    component: Internal
  },
  {
    icon: 'codeicon',
    title: 'Code',
    component: Code
  },
  {
    icon: 'mail_fill',
    title: 'Email',
    component: Email 
  },
  {
    icon: 'download',
    title: 'Download',
    component: Article
  },
]