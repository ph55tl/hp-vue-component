export const getHTMLElement = (target: Window | HTMLElement): HTMLElement => {
  return target === window
    ? (document.documentElement as HTMLElement)
    : (target as HTMLElement)
}
