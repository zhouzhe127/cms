import Article from '@/components/SiteBuilderMenu/components/setmodules/Article.vue'
import External from '@/components/SiteBuilderMenu/components/footerNavigation/setpages/External.vue'

export default [
  {
    icon: 'link',
    title: 'External',
    component: External 
  },
  {
    icon: 'internal',
    title: 'Internal',
    component: Article
  },
  {
    icon: 'codeicon',
    title: 'Code',
    component: Article
  },
  {
    icon: 'mail_fill',
    title: 'Email',
    component: Article
  },
  {
    icon: 'download',
    title: 'Download',
    component: Article
  },
]