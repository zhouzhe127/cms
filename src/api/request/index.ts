import Request from './request'
import tfrMessage from '@/utils/tfrMessage'
import router from '@/router'
import { startsWith, get } from 'lodash'
import type { RequestResponse, RequestConfig } from './types'
import qs from 'qs'
import { getToken } from '@/utils/cookies'
const { VITE_APP_API_ADDRESS, VITE_APP_MOCK_ADDRESS, VITE_APP_DEMO_ADDRESS } =
  import.meta.env
const apiAddress = VITE_APP_API_ADDRESS.replace('dev', 'pre')
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
      error.message = 'Unauthorized, Please Login'
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
  error.message &&
    $tfrMessage({
      message: error.message,
      type: 'error'
    })
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
    // ???????????????
    requestInterceptors: config => requestHandler(config),
    // ???????????????
    requestInterceptorsCatch: (result: RequestResponse) => errorHandler(result),
    responseInterceptors: res => responseHandler(res),
    responseInterceptorsCatch: (result: RequestResponse) => errorHandler(result)
  }
})

/**
 * @description: ???????????????
 * @generic D ????????????
 * @generic T ????????????
 * @param {TSRequestConfig} config ?????????GET??????POST???????????????data
 * @returns {Promise}
 */
export interface TSZResponse<T> {
  status: number
  msg: string
  data?: T
}
// ??????????????????
interface TSRequestConfig<T> extends RequestConfig<T> {
  data?: T
  params?: T
}
const tszRequest = <D, T = any>(config: TSRequestConfig<D>) => {
  // const { method = 'GET' } = config
  // if (method === 'get' || method === 'GET') {
  //   config.params = config.data
  // }
  return request.request<T>(config)
}
// ????????????
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// ??????????????????
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default tszRequest
