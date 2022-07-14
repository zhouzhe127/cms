export function getAssetsImage(name: string) {
  return new URL(`../assets/image/${name}`, import.meta.url).href;
}