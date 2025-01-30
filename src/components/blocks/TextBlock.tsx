import { TextBlockProps } from '@/types/blocks'
import Link from 'next/link'

export const TextBlock = ({
  title,
  description,
  link,
}: Readonly<TextBlockProps>) => {
  return (
    <div className="mx-auto mt-[60px] flex flex-col items-center text-center md:mt-[85px] md:max-w-[600px] lg:mt-[120px] lg:max-w-[800px] xl:max-w-[1000px]">
      <div>
        <span className="text-2xl font-semibold">{title}</span>
      </div>
      <div className="mt-6 md:mt-7">
        <span>{description}</span>
      </div>
      <Link
        href={link.url}
        className="mb-3 mt-5 w-fit rounded-md bg-button px-10 py-2 font-heading text-black md:mb-0 md:mt-10"
      >
        {link.text}
      </Link>
    </div>
  )
}
