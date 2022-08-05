export enum PAGE_SELECT {
  PAGE = 'PAGE',
  ARTICLE = 'ARTICLE',
  PLP = 'PLP',
  LINK = 'LINK',
  CLIP = 'CLIP',
  FOLDER = 'FOLDER',
  SMART = 'SMART',
  HOME = 'HOME',
  LEGAL = 'LEGAL',
  POLICY = 'POLICY',
  DISCOVER = 'DISCOVER',
}
type stringKey = Record<string, string>
export const PAGE_ICONS: stringKey = {
  [PAGE_SELECT.PAGE]: 'tablet',
  [PAGE_SELECT.ARTICLE]: 'article',
  [PAGE_SELECT.PLP]: 'scratchable',
  [PAGE_SELECT.LINK]: 'link',
  [PAGE_SELECT.CLIP]: 'clip',
  [PAGE_SELECT.FOLDER]: 'folder',
  [PAGE_SELECT.SMART]: 'smart',
  [PAGE_SELECT.HOME]: 'home',
  [PAGE_SELECT.LEGAL]: 'legal',
  [PAGE_SELECT.POLICY]: 'legal_item',
  [PAGE_SELECT.DISCOVER]: 'folder_copy',
}

export const FILEPAGE = [PAGE_SELECT.FOLDER, PAGE_SELECT.SMART, PAGE_SELECT.LEGAL]