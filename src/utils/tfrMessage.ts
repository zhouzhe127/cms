import { ElMessage } from 'element-plus'

export default function TfrMessage(options: any) {
  // eslint-disable-next-line no-undef
  ElMessage({
    customClass: 'tfr-message',
    ...options
  })
}
