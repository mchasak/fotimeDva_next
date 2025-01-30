import { BlogSectionProps } from '@/types/blocks'
import Link from 'next/link'
import { StrapiImage } from './StrapiImage'

export const BlogSection = ({ title, blog }: Readonly<BlogSectionProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div>
        <span className="text-lg font-semibold md:text-2xl">{title}</span>
      </div>
      <div className="mt-6 flex flex-col justify-between md:mt-10 md:flex-row md:gap-5">
        {blog.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="group relative h-full w-full md:h-[320px] xl:h-[405px]"
          >
            <StrapiImage
              alt={item.title || 'background'}
              src={item.image.url}
              className="absolute inset-0 object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black opacity-30 duration-300 group-hover:opacity-50" />
            <div className="relative z-10 flex h-full w-full items-center  justify-between px-2 md:items-end md:px-4 md:pb-6">
              <div className="flex flex-col justify-center font-heading md:justify-end ">
                <span className="text-xl md:text-3xl">{item.title}</span>
                {item.description && (
                  <div>
                    <span>{item.description}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
