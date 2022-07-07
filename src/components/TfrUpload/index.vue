<template>
  <div class="upload-field">
    <div v-if="pictureList.length === 0" class="upload-box">
      <el-upload
        action=""
        list-type="picture-card"
        :http-request="handleUploadHttpRequest"
        :on-progress="onProgress"
        :on-success="handlePictureSuccess"
        :on-error="handlePictureError"
        drag
      >
        <span><svg-icon icon-class="upload" /></span>
        <div class="el-upload__text">
          Drop file here<br />
          or <br />
          <tfr-button plain class="upload-btn">UPLOAD</tfr-button>
        </div>
      </el-upload>
    </div>
    <div
      v-else
      class="picture-box"
      :class="{ 'picture-box-one': uploadProps.isOnlyOne }"
    >
      <div
        v-for="(item, index) in pictureList"
        :key="'picturesItem' + index"
        class="picture-item"
        :class="{ 'is-select': item.isSelect && uploadProps.isSelect }"
        @click="selectedHandle(index)"
      >
        <div v-if="item.link" class="has-picture">
          <span class="del-icon" @click.stop="deleteMediaItem(item, index)"
            ><svg-icon icon-class="remove_black" />
          </span>
          <img v-if="item.content_type === 'image'" :src="item.link" />
          <video
            v-else
            autoplay
            width="100%"
            :src="item.link"
            frameborder="0"
            allowfullscreen
            loop
            muted
          ></video>
        </div>
        <div v-if="item.loading === true" class="progress-layer">
          <div class="progress">
            <el-progress :percentage="item.progress" :show-text="false" />
          </div>
        </div>
      </div>
      <div v-if="!uploadProps.isOnlyOne" class="picture-item picture-add">
        <el-upload
          action=""
          list-type="picture-card"
          :http-request="handleUploadHttpRequest"
          :on-progress="onProgress"
          :on-success="handlePictureSuccess"
          :on-error="handlePictureError"
        >
          <svg-icon icon-class="add_black" />
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TfrButton from '@/components/TfrButton/index.vue'
import { getMediaExt } from '@/utils/getMediaExt'
import uploadHandle from './upload'
import { computed, getCurrentInstance } from 'vue'
import type { UploadRequestOptions, UploadFile } from 'element-plus'
const $tfrMessage: any =
  getCurrentInstance()?.appContext?.config?.globalProperties?.$tfrMessage

interface PictureItem {
  [propName: string]: any
}
interface PropsType {
  pictureList: Array<PictureItem> // 图片数据
  isSelect?: boolean // 是否可勾选
  isOnlyOne?: boolean // 是否只显示一张图片
}

const uploadProps = withDefaults(defineProps<PropsType>(), {
  pictureList: () => [], // 默认值
  isSelect: false,
  isOnlyOne: false
})

const uploadEmits = defineEmits([
  'update:pictureList',
  'updateSelectedIndexHandle'
])

const pictureList = computed({
  get: () => uploadProps.pictureList,
  set: (newPictureList: Array<PictureItem>) => {
    uploadEmits('update:pictureList', newPictureList)
  }
})

const handleUploadHttpRequest = async (
  requestOptions: UploadRequestOptions
): Promise<any> => {
  const file: any = requestOptions.file
  try {
    const ext: any = await getMediaExt(file)
    const mediaExt: Array<string> = ['jpg', 'jpeg', 'png', 'gif', 'mp4']
    let type = ''
    if (mediaExt.includes(ext || '')) {
      type = ext === 'mp4' ? 'video' : 'image'
    }
    if (!type) {
      $tfrMessage({
        type: 'error',
        message: 'Invalid the format. (Upload JPG, PNG, or MP4)'
      })
      return false
    }
    const options = {
      file,
      proc: onProgress
    }
    const pictureItem: PictureItem = {
      action: 'create',
      progress: 5,
      content_type: type,
      loading: true,
      resource_id: '629dc1bb3d2b140008054f62',
      uid: file.uid
    }
    pictureList.value.push(pictureItem)
    return await uploadHandle(options)
  } catch (e) {
    const uid: number = file.uid
    pictureList.value.forEach((item, index) => {
      if (item.uid === uid) {
        pictureList.value.splice(index, 1)
      }
    })
  }
}
const onProgress = (progress: number, file: UploadFile) => {
  try {
    const ext = file.name
      .substring(file.name.lastIndexOf('.') + 1)
      .toLowerCase()
    const imageExt = ['jpg', 'jpeg', 'png', 'gif']
    const type = imageExt.includes(ext) ? 'image' : 'video'
    pictureList.value.forEach(item => {
      if (type === 'image') {
        if (item.uid === file.uid) {
          if (progress === 5) {
            item.progress = progress + 5
          }
          if (progress === 100) {
            item.progress = progress - 5
          }
        }
      } else {
        if (item.uid === file.uid) {
          item.progress = progress
        }
      }
    })
  } catch (e) {
    console.log(e)
  }
}
const handlePictureSuccess = (response: any) => {
  const { path, file } = response || {}
  if (!path) return
  const ext = path.substring(path.lastIndexOf('.') + 1).toLowerCase()
  const imageExt = ['jpg', 'jpeg', 'png', 'gif']
  const type = imageExt.includes(ext) ? 'image' : 'video'
  pictureList.value.forEach(item => {
    if (item.uid === file.uid) {
      item.conetype_type = type
      item.link = path
      item.progress = 100
      item.loading = false
      item.error = false
    }
  })
}
const handlePictureError = (file: UploadFile) => {
  pictureList.value.forEach(item => {
    if (item.uid === file.uid) {
      item.loading = false
    }
  })
}
const deleteMediaItem = async (item: any, index: number) => {
  pictureList.value.splice(index, 1)
  // item.id &&
  //   (await saveProductImage({
  //     product_id: this.productId * 1,
  //     media_items: [{ ...item, action: 'delete' }]
  //   }))
  // this.$emit('change', picturesList)
}

const selectedHandle = (index: number) => {
  if (uploadProps.isSelect) {
    pictureList.value.forEach((item, i) => {
      if (index === i) {
        item.isSelect = !item.isSelect
      } else {
        item.isSelect = false
      }
    })
    uploadEmits('updateSelectedIndexHandle', index)
  }
}
</script>

<style lang="scss" scoped>
.upload-field {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.picture-box {
  padding: 10px;
  border-radius: 8px;
  border: 1px dashed rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  &.picture-box-one {
    grid-template-columns: repeat(1, 1fr);
  }
  .picture-item {
    position: relative;
    &.is-select {
      border: 1px solid $theme;
    }
    .has-picture {
      width: 100%;
      height: 0;
      padding-top: 60%;
      .del-icon {
        width: 30px;
        height: 30px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
        svg {
          font-size: 20px;
        }
      }
    }
    .progress-layer {
      width: 100%;
      height: 0;
      padding-top: 60%;
      .progress {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ::v-deep(.el-progress) {
        width: 80%;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        .el-progress-bar__outer {
          background-color: #54605d;
        }
        .el-progress-bar__inner {
          background-color: #fff;
        }
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .picture-add {
    background-color: $bg;
    height: 0;
    padding-top: 60%;
    .svg-icon {
      font-size: 20px;
      cursor: pointer;
    }
    ::v-deep(.el-upload-list--picture-card) {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .el-upload-list__item {
        display: none;
      }
      .el-upload--picture-card {
        background-color: transparent;
        border: none;
        width: auto;
        height: auto;
        &:hover {
          border: none;
          color: $theme;
        }
      }
      :focus {
        border: none;
      }
    }
  }
}
.upload-box ::v-deep(.el-upload) {
  width: 100%;
  height: 207px;
  padding: 30px;
  border-radius: 8px;
  border: 1px dashed rgba(0, 0, 0, 0.25);
  .el-upload-dragger {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    .svg-icon {
      font-size: 30px;
    }
    .el-upload__text {
      height: auto;
      line-height: 2.2;
      color: $theme;
      .upload-btn {
        width: 95px;
      }
    }
  }
}
::v-deep(.el-upload-list--picture-card) {
  display: block;
  .el-upload-list__item {
    display: none;
  }
  .el-upload--picture-card {
    background-color: #fff;
    &:hover {
      border-color: rgba(0, 0, 0, 0.25);
      color: $theme;
    }
  }
}
</style>
