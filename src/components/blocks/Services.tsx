'use client'

import Link from 'next/link'
// import { Button } from '@/components/ui/button'
import Icon from './ui/Icon'
import { ServicesProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Services = ({ title, service }: Readonly<ServicesProps>) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const router = useRouter()

  const handleCardClick = (index: number, link: string) => {
    if (activeIndex === index) {
      router.push(link)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div>
        <span className="text-lg font-semibold md:text-2xl">{title}</span>
      </div>
      {/* <div className="mt-6 flex flex-col justify-between md:mt-10 md:flex-row md:gap-5">
        {service.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="group relative h-[60px]  w-full overflow-hidden md:h-[320px] xl:h-[405px]"
          >
            <StrapiImage
              alt={item.title || 'background'}
              src={item.image.url}
              className="absolute inset-0 object-cover duration-300 group-hover:scale-110"
              fill
            />
            <div className="absolute inset-0 bg-black opacity-30 duration-300 group-hover:opacity-50" />
            <div className="relative z-10 flex h-full w-full items-end justify-between px-2 pb-2 md:px-4 md:pb-6">
              <div className="flex flex-col justify-center font-heading  duration-300 ease-in-out md:justify-end">
                <span className="text-xl text-white md:text-3xl">
                  {item.title}
                </span>
                {item.description && (
                  <div className="hidden group-hover:block">
                    <span className="text-white opacity-70">
                      {item.description}
                    </span>
                  </div>
                )}
              </div>
              <Button variant="link" size="icon" className="h-6 w-6 md:hidden">
                <Icon icon="caret" className="text-white" />
              </Button>
            </div>
          </Link>
        ))}
      </div> */}
      <div className="hidden md:flex md:gap-5">
        {service.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="group relative h-[320px] w-full overflow-hidden xl:h-[405px]"
          >
            <StrapiImage
              alt={item.title || 'background'}
              src={item.image.url}
              fill
              className="absolute inset-0 object-cover duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50" />
            <div className="relative z-10 flex h-full items-end justify-between px-4 pb-6">
              <div className="text-white">
                <span className="text-3xl">{item.title}</span>
                {item.description && (
                  <span className="block opacity-70">{item.description}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1 md:hidden">
        {service.map((item, index) => {
          const isActive = activeIndex === index

          return (
            <div
              key={item.title}
              onClick={() => handleCardClick(index, item.link)}
              className={clsx(
                'relative w-full overflow-hidden rounded-sm transition-all duration-300',
                {
                  'h-[300px]': isActive,
                  'h-[65px]': !isActive,
                },
              )}
            >
              <StrapiImage
                alt={item.title || 'background'}
                src={item.image.url}
                fill
                className="absolute inset-0 object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex h-full items-end justify-between px-3 pb-3 text-white">
                <div>
                  <span className="font-heading text-lg font-semibold">
                    {item.title}
                  </span>
                  {isActive && item.description && (
                    <p className="mt-2 text-sm opacity-80">
                      {item.description}
                    </p>
                  )}
                </div>
                <div
                  className={clsx(
                    'h-5 w-5 md:hidden',
                    isActive && '-rotate-90',
                  )}
                >
                  <Icon icon="caret" className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
