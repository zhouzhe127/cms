// 首字母大写
export function upperCaseFirstLetter(str: string) {
  if (!str) return
  return str.replace(str.slice(0, 1), str.slice(0, 1).toUpperCase())
}
