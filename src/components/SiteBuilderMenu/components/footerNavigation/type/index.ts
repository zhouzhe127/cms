// 这里的type与接口参数一致
export const enum SETPAGETYPE {
  EXTERNAL = 'external',
  INTERNAL = 'internal',
  CODE = 'code',
  EMAIL = 'email',
  DOWNLOAD_MEDIA = 'download_media',
  LEGAL = 'legal'
}

export interface ExternalForm {
  title: string
  link: string
  open_new?: boolean
}

export interface InternalForm {
  title: string
  page?: string
  open_new: boolean
}

export interface CodeForm {
  title: string
  code: string
  open_new?: boolean
}

export interface EmailForm {
  send_to: string
  subject: string
  body?: string
  cc?: string
  bcc?: string
}

export interface EditLinkData {
  [SETPAGETYPE.EXTERNAL]?: ExternalForm,
  [SETPAGETYPE.INTERNAL]?: InternalForm,
  [SETPAGETYPE.CODE]?: CodeForm,
  [SETPAGETYPE.EMAIL]?: EmailForm,
  [SETPAGETYPE.DOWNLOAD_MEDIA]?: any
}
