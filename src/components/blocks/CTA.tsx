import Link from 'next/link'
import { StrapiImage } from './StrapiImage'
import { ctaProps } from '@/types/blocks'

export const CTA = ({ title, subTitle, image, links }: Readonly<ctaProps>) => {
  return (
    <div className="relative mt-[60px] h-[300px] w-full md:mt-[85px] lg:mt-[120px]">
      <StrapiImage
        alt={image.alternativeText || 'background'}
        src={image.url}
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="container relative z-10 mx-auto flex h-full w-full px-3 py-20 md:max-w-[700px] md:px-0 lg:max-w-[900px] xl:max-w-[1200px]">
        <div className="flex h-full flex-col font-heading ">
          <span className="font-body text-2xl font-semibold">{title}</span>
          <span className="mt-4  text-2xl font-normal">{subTitle}</span>
          <div className="mt-9 flex items-center gap-8">
            {links.map((link, index) => (
              <Link
                className={`${index === 0 ? 'mb-3 w-fit rounded-md bg-button px-10 py-2 text-black md:mb-0 ' : ''}`}
                key={link.id}
                href={link.url}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
