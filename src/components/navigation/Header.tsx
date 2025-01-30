import Link from 'next/link'
import { StrapiImage } from '../blocks/StrapiImage'
import { Logo, LinkProps } from '@/types/base'

interface HeaderProps {
  logo: Logo
  link: LinkProps[]
  button: LinkProps
}

export const Header = ({ logo, link, button }: Readonly<HeaderProps>) => {
  return (
    <div className="absolute z-20 h-full w-full border-b border-borderLine/30 bg-black/50  px-3 md:px-7 lg:h-[72px]">
      <div className="flex items-center justify-between">
        <Link
          href={logo.url}
          className="relative h-[44px] w-[150px] lg:h-[70px] lg:w-[230px]"
        >
          <StrapiImage
            src={logo.logo.url}
            alt={logo.logo.alternativeText}
            fill
            className="absolute inset-0 object-cover"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            {link.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="relative cursor-pointer font-heading transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <Link
            href={button.url}
            className="mb-3 w-fit rounded-md bg-button px-10 py-2 font-heading text-black md:mb-0"
          >
            {button.text}
          </Link>
        </div>
      </div>
    </div>
  )
}
