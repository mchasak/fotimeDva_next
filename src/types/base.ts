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
  dimensions?: { width: number; height: number }
}

export interface Logo {
  url: string
  logo: ImageProps
}

export interface Items {
  index: number
  icon:
    | 'calendar'
    | 'camera'
    | 'edit'
    | 'cloud'
    | 'archive'
    | 'image'
    | 'folder'
    | 'hourglass'
    | 'people'
    | 'group'
    | 'calendar1'
    | 'compass'
    | 'map'
  item: string
}
