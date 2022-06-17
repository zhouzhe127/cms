// 如果传入的类型与实际不符，则不上传，防止图片类型上传视频，或视频类型上传图片
import { UploadRawFile } from 'element-plus'
interface VideoProps {
  ext: string
  width?: number
  height?: number
}
export function getMediaExt(file: UploadRawFile) {
  return new Promise((resolve: (value: any) => void, reject) => {
    if (file.type.startsWith('image')) {
      // 从文件头信息无法识别图片类型时，以后缀名为图片类型
      getImageTypeByHeadContent(file)
        .then(type => {
          resolve(type)
        })
        .catch(() => {
          reject()
        })
    } else if (file.type.startsWith('video')) {
      getVideoSize(file)
        .then((data: VideoProps) => {
          resolve(data.ext)
        })
        .catch(err => {
          reject(err)
        })
    } else {
      resolve(false)
    }
  })
}

const JPEG_SOI = [0xff, 0xd8]
// const JPEG_EOI = [0xFF, 0xD9]

// png的文件头就是png图片的前8个字节，其值为[0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]
const PNG_HEADER = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]

// GIF files start with a fixed-length header ("GIF87a" or "GIF89a") giving the version
const GIF89A_HEADER = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61]
const GIF87A_HEADER = [0x47, 0x49, 0x46, 0x38, 0x37, 0x61]

// 是否小端序
// const isLittleEndian: any = (function () {
//   const buffer = new ArrayBuffer(2)
//   new DataView(buffer).setInt16(0, 256, true)
//   return new Int16Array(buffer)[0] === 256
// })()

// byte数组元素是否相等
function isArrayEqual(a: number[], b: number[]) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

// 获取视频的 width height
function getVideoSize(file: UploadRawFile) {
  const filetype = file.type
  const suffix = filetype.substring(filetype.lastIndexOf('/') + 1)
  // 返回一个 promise
  return new Promise((resolve: (value: VideoProps) => void) => {
    const url = window.URL.createObjectURL(file)
    const video = document.createElement('video')
    video.onloadedmetadata = () => {
      // Revoke when you don't need the url any more to release any reference
      window.URL.revokeObjectURL(url)
      resolve({
        width: video.videoWidth,
        height: video.videoHeight,
        ext: suffix
      })
    }
    video.onerror = () => {
      // reject(`[${file.name}]解析失败，可能视频文件格式不正确`)
      resolve({ ext: '' })
    }
    video.src = url
    video.load()
  })
}

export function getImageTypeByHeadContent(file: UploadRawFile) {
  // file 实际上是一个 Blob 对象
  // 读取 Blob 对象的前8个字节
  const fileHeader = file.slice(0, 8)
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = function (e: any) {
      const data: any = e.target.result
      const header = new DataView(data)
      const bytesArr = []
      for (let i = 0; i < header.byteLength; i++) {
        bytesArr.push(header.getUint8(i))
      }
      if (isArrayEqual(JPEG_SOI, bytesArr.slice(0, 2))) {
        resolve('jpg')
      } else if (isArrayEqual(PNG_HEADER, bytesArr)) {
        resolve('png')
      } else if (
        isArrayEqual(GIF89A_HEADER, bytesArr.slice(0, 6)) ||
        isArrayEqual(GIF87A_HEADER, bytesArr.slice(0, 6))
      ) {
        resolve('gif')
      } else {
        resolve('')
      }
    }
    reader.readAsArrayBuffer(fileHeader)
  })
}
