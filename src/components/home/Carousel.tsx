'use client';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/swiper.css';

import {slides} from '@/config/carousels';
import {Button} from '@heroui/react';
import {useTranslations} from 'next-intl';

function Carousel() {
  const t = useTranslations('ProductPage');

  return (
    <section className="-m-16 w-full h-[560px]">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        style={{height: '100%'}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {slide.type === 'image' ? (
                <Image
                  src={slide.src}
                  alt={slide.name}
                  fill
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              )}
            </div>

            <div className="md:ml-20 text-left p-4 absolute top-1/2 transform -translate-y-1/2 text-white max-w-3xl md:max-w-2xl lg:max-w-xl xl:max-w-3xl">
              <h1 className="text-4xl text-white font-bold mb-4">
                {slide.name}
              </h1>
              <p className="text-xl mb-8">{slide.description}</p>
              
              <Link href={`/product/${slide.pid}`}>
                <Button
                  radius="full"
                  className="w-32 h-10 font-bold text-black bg-white hover:bg-gray-200"
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;
