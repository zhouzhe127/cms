export enum PAGE_SELECT {
  PAGE = 'PAGE',
  ARTICLE = 'ARTICLE',
  PLP = 'PLP',
  LINK = 'LINK',
  CLIP = 'CLIP',
  FOLDER = 'FOLDER',
  SMART = 'SMART',
  HOME = 'HOME'
}

export const PAGE_ICONS = {
  [PAGE_SELECT.PAGE]: 'tablet',
  [PAGE_SELECT.ARTICLE]: 'article',
  [PAGE_SELECT.PLP]: 'scratchable',
  [PAGE_SELECT.LINK]: 'link',
  [PAGE_SELECT.CLIP]: 'clip',
  [PAGE_SELECT.FOLDER]: 'folder',
  [PAGE_SELECT.SMART]: 'smart',
  [PAGE_SELECT.HOME]: 'home'
}