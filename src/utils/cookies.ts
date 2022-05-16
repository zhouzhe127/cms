import Cookies from 'js-cookie'
const storageFre = import.meta.env.VITE_APP_STORAGE_PRE
const token = class token {
  // set token
  static setToken(token: string) {
    Cookies.set(`${storageFre.token}.token`)
  }
  // get token
  static getToken() {
    return Cookies.get(`${storageFre.token}.token`)
  }
  // remove token
  static removeToken() {
    Cookies.remove(`${storageFre.token}.token`)
  }
}

export { token }
