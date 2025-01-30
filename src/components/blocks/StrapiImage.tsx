import Image from 'next/image'
import { getStrapiMedia } from '@/lib/utils'

interface StrapiImageProps {
  src: string
  alt: string
  height?: number
  width?: number
  fill?: boolean
  className?: string
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  fill = false,
  className = '',
}: Readonly<StrapiImageProps>) {
  if (!src) return null

  const imageUrl = getStrapiMedia(src)
  const imageFallback = `https://placehold.co/${width}x${height}`

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height ? undefined : height}
      width={width ? undefined : width}
      fill={fill}
      className={className}
      sizes="100%"
    />
  )
}
