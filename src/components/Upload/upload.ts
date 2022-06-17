import { uploadHttp } from './uploadHttp'
// import context from '@/main'

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
    const filesType = ['jpeg', 'jpg', 'png', 'mp4']
    if (!filesType.includes(ext)) {
      // context.$tfrMessage({
      //   show: true,
      //   type: 'error',
      //   content: 'Invalid the format. (Upload JPG, PNG, or MP4)'
      // })
      return reject(file)
    } else {
      if (
        (ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'JPG') &&
        file.size > 1024 * 1024 * 5
      ) {
        // context.$tfrMessage({
        //   show: true,
        //   type: 'success',
        //   content: 'JPG/PNG size limit: 5MB'
        // })
        // Message.warning('JPG/PNG size limit:1MB')
        return reject(file)
      } else if (ext === 'mp4' && file.size > 1024 * 1024 * 20) {
        // Message.warning(`MP4 size limit:1MB`)
        // context.$tfrMessage({
        //   show: true,
        //   type: 'success',
        //   content: 'MP4 size limit: 20MB'
        // })
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
