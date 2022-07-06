import Request from './request'
import tfrMessage from '@/utils/tfrMessage'
import router from '@/router'
import { startsWith, get } from 'lodash'
import type { RequestResponse, RequestConfig } from './types'
import qs from 'qs'
import { getToken } from '@/utils/cookies'
const { VITE_APP_API_ADDRESS, VITE_APP_MOCK_ADDRESS, VITE_APP_DEMO_ADDRESS } =
  import.meta.env
const apiAddress = VITE_APP_API_ADDRESS
const mockAddress = VITE_APP_MOCK_ADDRESS
const demoAddress = VITE_APP_DEMO_ADDRESS
const { apiAddress: testAddress } = qs.parse(location.search, {
  ignoreQueryPrefix: true
})
const $tfrMessage = tfrMessage
const errorHandler = (error: RequestResponse) => {
  const status = get(error, 'response.status')
  switch (status) {
    case 400:
      error.message = 'Request error'
      break
    case 401:
      $tfrMessage({
        message: 'Unauthorized, Please Login',
        type: 'error'
      })
      router.push({ path: '/login' })
      break
    case 403:
      error.message = 'Access denied'
      break
    case 408:
      error.message = 'Request timed out'
      break
    case 500:
      error.message = 'Server internal error'
      break
    case 501:
      error.message = 'Service not implemented'
      break
    case 502:
      error.message = 'Gateway error'
      break
    case 503:
      error.message = 'Service is not available'
      break
    case 504:
      error.message = 'Gateway timeout'
      break
    case 505:
      error.message = 'HTTP version is not supported'
      break
    default:
      break
  }
  return Promise.reject(error)
}

const requestHandler = (config: RequestConfig) => {
  // do something before request is sent
  let { baseURL, url = '' } = config
  if (startsWith(config.url, '@mock') && mockAddress) {
    baseURL = mockAddress
    url = url.replace(/^@mock/, '')
  } else if (startsWith(config.url, '@demo') && demoAddress) {
    baseURL = demoAddress
    url = url.replace(/^@demo/, '')
  }
  config.headers['Authorization'] = getToken()
  // if (store.getters.token) {
  //   if (!config.headers['Authorization']) {
  //     config.headers['Authorization'] = getToken()
  //     config.headers['Locale'] = 'US'
  //     config.headers['Language'] = 'en'
  //   }
  // }
  // config.cancelToken = new CancelToken((cancel) => {
  //   const axiosPromiseCancel = store.getters.axiosPromiseCancel
  //   axiosPromiseCancel.push(cancel)
  //   store.dispatch('app/axiosPromiseCancel', axiosPromiseCancel)
  // })
  console.log(config, 'kkk888')
  return {
    ...config,
    params: {
      ...config.params,
      t: new Date().getTime() // fix: .API cache
    },
    baseURL,
    url
  }
}
const responseHandler = (response: any) => {
  const res = response.data
  if (res.status === 0 || res.status === 10) return res.data && res.data
  if (res.status === 1) {
    $tfrMessage({
      message: res.msg || 'Error',
      type: 'error'
    })
    return Promise.reject()
  }
  return res
}
const request = new Request({
  baseURL: testAddress || apiAddress,
  timeout: 30000,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => requestHandler(config),
    // 响应拦截器
    requestInterceptorsCatch: (result: RequestResponse) => errorHandler(result),
    responseInterceptors: res => responseHandler(res),
    responseInterceptorsCatch: (result: RequestResponse) => errorHandler(result)
  }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {TSRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export interface TSZResponse<T> {
  status: number
  msg: string
  data?: T
  params?: T
}
// 重写返回类型
interface TSRequestConfig<T, R> extends RequestConfig<TSZResponse<R>> {
  data?: T
  params?: T
}
const tszRequest = <D = any, T = any>(config: TSRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    console.log(config)
    config.params = config.params // method:get 统一用params
  }
  return request.request<TSZResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default tszRequest
