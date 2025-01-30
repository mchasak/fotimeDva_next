'use client'

import { ReviewsProps } from '@/types/blocks'
import { StrapiImage } from './StrapiImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Reviews = ({ title, reviews }: Readonly<ReviewsProps>) => {
  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[85px] md:px-12 lg:mt-[120px] xl:px-0">
      <div>
        <span className="text-lg font-semibold md:text-2xl">{title}</span>
      </div>

      <div className="mt-6 flex justify-between md:mt-10 md:flex-row md:gap-5 ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <div className="flex flex-col">
                <div className="relative h-[65px] w-[65px] overflow-hidden rounded-full">
                  <StrapiImage
                    className="absolute inset-0 object-cover"
                    src={review.avatar.url}
                    alt={review.name}
                    fill
                  />
                </div>
                <h4 className="mt-6 text-2xl font-semibold">{review.name}</h4>
                <p className="text-md mt-6 font-semibold leading-6 opacity-60">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
