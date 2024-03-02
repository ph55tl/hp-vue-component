export interface AnchorLinkItemProps {
  key: string | number
  title?: string
  href?: string
  target?: Window | HTMLElement | undefined
  style?: { [x: string]: string | number }
  children?: AnchorLinkItemProps[]
}
