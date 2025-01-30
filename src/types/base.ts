export interface LinkProps {
  id: number
  url: string
  text: string
  isExternal?: boolean
}

export interface ImageProps {
  id: number
  url: string
  alternativeText: string
}

export interface Logo {
  url: string
  logo: ImageProps
}
