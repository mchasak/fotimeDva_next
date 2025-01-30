import { ImageProps, LinkProps } from './base'

type ComponentType =
  | 'layout.hero-section'
  | 'layout.services'
  | 'layout.text-block'
  | 'layout.work-process'
  | 'layout.mini-gallery'
  | 'layout.reviews'
  | 'layout.blog-section'
  | 'layout.cta'

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>,
> {
  id: number
  __component?: T
  documentId?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  data?: D
}

export type Block =
  | HeroSectionProps
  | ServicesProps
  | TextBlockProps
  | WorkFlowProps
  | MiniGalleryProps
  | ReviewsProps
  | BlogSectionProps
  | ctaProps

export interface Advantages {
  id: number
  title: string
}

export interface HeroSectionProps extends Base<'layout.hero-section'> {
  heading: string
  subHeading: string
  image: ImageProps
  link: LinkProps
  advantages: Advantages[]
}

export interface Service {
  title: string
  description?: string
  image: ImageProps
  url: string
  link: string
}

export interface ServicesProps extends Base<'layout.services'> {
  title: string
  service: Service[]
}

export interface TextBlockProps extends Base<'layout.text-block'> {
  title: string
  description: string
  link: LinkProps
}

export interface Stepps {
  icon: 'calendar' | 'camera' | 'edit' | 'cloud'
  title: string
  description: string
}

export interface WorkFlowProps extends Base<'layout.work-process'> {
  title: string
  step: Stepps[]
}

export interface MiniGalleryProps extends Base<'layout.mini-gallery'> {
  title: string
  images: ImageProps[]
  link: LinkProps
}

export interface Review {
  avatar: ImageProps
  name: string
  review: string
}

export interface ReviewsProps extends Base<'layout.reviews'> {
  title: string
  reviews: Review[]
}

export interface Blog {
  title: string
  description: string
  text: string
  id: number
  image: ImageProps
  link: string
}

export interface BlogSectionProps extends Base<'layout.blog-section'> {
  title: string
  blog: Blog[]
}

export interface ctaProps extends Base<'layout.cta'> {
  title: string
  subTitle: string
  links: LinkProps[]
  image: ImageProps
}
