import Article from '@/components/SiteBuilderMenu/components/setmodules/Article.vue'
import Button from '@/components/SiteBuilderMenu/components/setmodules/Button.vue'
import Campaign from '@/components/SiteBuilderMenu/components/setmodules/Campaign.vue'
import Cinema from '@/components/SiteBuilderMenu/components/setmodules/Cinema.vue'
import InfoBlock from '@/components/SiteBuilderMenu/components/setmodules/InfoBlock.vue'
import Markdown from '@/components/SiteBuilderMenu/components/setmodules/Markdown.vue'
import Media from '@/components/SiteBuilderMenu/components/setmodules/Media.vue'
import Newsletter from '@/components/SiteBuilderMenu/components/setmodules/Newsletter.vue'
import Shelve from '@/components/SiteBuilderMenu/components/setmodules/Shelve.vue'
import TitleBar from '@/components/SiteBuilderMenu/components/setmodules/TitleBar.vue'
import Typeform from '@/components/SiteBuilderMenu/components/setmodules/Typeform.vue'

export default [
  {
    icon: 'scanner',
    title: 'Article',
    component: Article
  },
  {
    icon: 'smart_button',
    title: 'Button',
    component: Button
  },
  {
    icon: 'campaign_hei',
    title: 'Campain',
    component: Campaign
  },
  {
    icon: 'panorama',
    title: 'Cinema',
    component: Cinema
  },
  {
    icon: 'info',
    title: 'Info Block',
    component: InfoBlock
  },
  {
    icon: 'format_text',
    title: 'Markdown',
    component: Markdown
  },
  {
    icon: 'mms',
    title: 'Media',
    component: Media
  },
  {
    icon: 'mail_fill',
    title: 'Newsletter',
    component: Newsletter
  },
  {
    icon: 'category_fill',
    title: 'Shelve',
    component: Shelve
  },
  {
    icon: 'space_bar',
    title: 'Title Bar',
    component: TitleBar
  },
  {
    icon: 'title_fill',
    title: 'Typeform',
    component: Typeform
  },
]