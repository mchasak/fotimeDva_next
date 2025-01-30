import Link from 'next/link'
import { StrapiImage } from './StrapiImage'
import type { HeroSectionProps } from '@/types/blocks'

export const HeroSection = ({
  heading,
  subHeading,
  image,
  link,
  advantages,
}: Readonly<HeroSectionProps>) => {
  return (
    <div className="relative h-[800px] w-full">
      <StrapiImage
        alt={image.alternativeText || 'background'}
        src={image.url}
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container relative z-10 mx-auto flex h-full w-full px-3 md:max-w-[700px] md:px-0 lg:max-w-[900px] xl:max-w-[1200px]">
        <div className="flex h-full flex-col justify-end pb-[70px] font-heading lg:pb-[180px]">
          <h1 className="mb-3 text-3xl text-white md:mb-4 md:text-6xl">
            {heading}
          </h1>
          <p className="mb-5 max-w-[180px] text-lg text-white md:mb-9 md:max-w-full md:text-xl">
            {subHeading}
          </p>
          <Link
            href={link.url}
            className="mb-3 w-fit rounded-md bg-button px-10 py-2 text-black md:mb-0"
          >
            {link.text}
          </Link>
          <ul className="flex max-w-[250px] flex-wrap md:hidden">
            {advantages.map((adv) => (
              <li key={adv.id} className="mb-1 mr-3 flex font-heading text-xs">
                {adv.title}
              </li>
            ))}
          </ul>
        </div>
        <ul className="ml-auto hidden h-full flex-col justify-end md:flex lg:pb-[180px]">
          {advantages.map((adv) => (
            <li
              key={adv.id}
              className="mb-6 flex flex-col items-start gap-4 font-heading duration-300 hover:scale-110"
            >
              <span>{adv.title}</span>
              <div className="h-[1px] w-full bg-white" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
