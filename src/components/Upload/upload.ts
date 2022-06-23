import { uploadHttp } from './uploadHttp'
import app from '@/main'
const { $tfrMessage } = app.config.globalProperties

export default async function uploadHandle({
  file,
  resourceId,
  merchantId,
  pid,
  proc
}: any) {
  return new Promise(async (resolve, reject) => {
    const ext = file.name
      .substring(file.name.lastIndexOf('.') + 1)
      .toLowerCase()
    const filesType = ['jpeg', 'jpg', 'png', 'gif', 'mp4']
    if (!filesType.includes(ext)) {
      $tfrMessage({
        type: 'error',
        message: 'Invalid the format. (Upload JPG, PNG, or MP4)'
      })
      return reject(file)
    } else {
      if (
        (ext === 'jpg' ||
          ext === 'png' ||
          ext === 'jpeg' ||
          ext === 'JPG' ||
          ext === 'gif') &&
        file.size > 1024 * 1024 * 5
      ) {
        $tfrMessage({
          type: 'error',
          message: 'JPG/PNG size limit: 5MB'
        })
        return reject(file)
      } else if (ext === 'mp4' && file.size > 1024 * 1024 * 20) {
        $tfrMessage({
          type: 'error',
          content: 'MP4 size limit: 20MB'
        })
        return reject(file)
      }
    }
    try {
      const option = {
        file,
        resourceId,
        merchantId,
        pid,
        proc
      }
      const data = await uploadHttp({ ...option })
      resolve(data)
    } catch (e) {
      reject(file)
    }
  })
}
