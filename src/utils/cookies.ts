import Cookies from 'js-cookie'
const storagePrefix = import.meta.env.VITE_APP_STORAGE_PREFIX

export function getToken() {
  return Cookies.get(`${storagePrefix}.token`)
}
export function setToken(token: string) {
  Cookies.set(`${storagePrefix}.token`, token)
}

export function removeToken() {
  Cookies.remove(`${storagePrefix}.token`)
}
// const token = class token {
//   // set token
//   static setToken(token: string) {
//     Cookies.set(`${storageFre.token}.token`, token)
//   }
//   // get token
//   static getToken() {
//     return Cookies.get(`${storageFre.token}.token`)
//   }
//   // remove token
//   static removeToken() {
//     Cookies.remove(`${storageFre.token}.token`)
//   }
// }
//
// export { token }
