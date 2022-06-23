import request from '@/api/request'
import app from '@/main'
const { $tfrMessage } = app.config.globalProperties

export const getPolicy = (
  resourceId: string,
  merchantId: string,
  content_type: string,
  uid: number
) => {
  // const urlMap = new Map([
  //   ['cms', `${apiAddress}general/aws/bucket/policy/cms?content_type=${contentType}`],
  //   ['product', `${apiAddress}general/aws/bucket/policy/${target}?resource_id=${resourceId}&merchant_id=${merchantId}&content_type=${contentType}`],
  //   ['media', `${apiAddress}general/bucket/aws/policy/content?content_type=${contentType}`]
  // ])
  const url = `${
    import.meta.env.VITE_APP_API_ADDRESS
  }general/aws/bucket/policy/product?resource_id=${resourceId}&merchant_id=${merchantId}&content_type=${content_type}&uid=${uid}`
  return request({
    url,
    method: 'get'
  })
}
/**
 * uploadApi media
 * @param {(file)} file
 * @param {string} resourceId
 * @param {string} merchantId
 * @param {string} pid
 * @param {string} target
 * @param {function} proc
 * @returns { string }
 */
export function uploadHttp({
  file,
  resourceId = '',
  merchantId = '',
  pid = 0,
  proc
}: any) {
  return new Promise(async (resolve, reject) => {
    try {
      const ext = file.name.substring(file.name.lastIndexOf('.') + 1)
      const contentType = `image/${ext}`
      const res: any = await getPolicy(
        resourceId,
        merchantId,
        file.type || contentType,
        file.uid
      )
      const fd = new FormData()
      console.log(res)
      const { action } = res.policy
      const {
        key,
        acl,
        success_action_redirect,
        policy,
        bucket,
        object_id,
        url
      } = res.policy.fields
      const exts = file.name.substring(file.name.lastIndexOf('.'))
      fd.append('acl', acl)
      fd.append('Policy', policy)
      fd.append('bucket', bucket)
      fd.append('key', key + '/' + object_id + exts)
      fd.append('X-Amz-Algorithm', res.policy.fields['x-amz-algorithm'])
      fd.append('X-Amz-Credential', res.policy.fields['x-amz-credential'])
      fd.append('X-Amz-Date', res.policy.fields['x-amz-date'])
      fd.append('x-amz-meta-uuid', res.policy.fields['x-amz-meta-uuid'])
      fd.append(
        'x-amz-server-side-encryption',
        res.policy.fields['x-amz-server-side-encryption']
      )
      fd.append('X-Amz-Signature', res.policy.fields['x-amz-signature'])
      fd.append('success_action_redirect', success_action_redirect)
      fd.append('Content-Type', res.policy.fields['Content-Type'])
      fd.append('file', file, key + exts)
      const xhr = new XMLHttpRequest()
      xhr.upload.addEventListener(
        'progress',
        evt => {
          const percentComplete = Math.round((evt.loaded / evt.total) * 100)
          proc && proc(percentComplete, file)
        },
        false
      )
      xhr.addEventListener(
        'load',
        (e: any) => {
          const status: number = e?.target?.status ?? 0
          if (status !== 204) {
            $tfrMessage({
              type: 'error',
              message: 'Oops...something went wrong, please try again.'
            })
            reject(status)
          }
          if (status === 204) {
            resolve({ path: url + key + '/' + object_id + exts, file })
          }
        },
        false
      )
      xhr.addEventListener('error', () => {
        $tfrMessage({
          type: 'error',
          message: 'Oops...something went wrong, please try again.'
        })
        reject()
      })
      xhr.open('post', action, true)
      xhr.send(fd)
    } catch (e) {
      console.log(e)
      reject()
    }
  })
}
