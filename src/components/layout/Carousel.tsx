import { Carousel } from 'antd';
import { Image } from '@chakra-ui/react';

import { carouselImages2 } from './config';

export const CarouselComponent = () => {
  return (
    <div className='w-[100%]'>
      <Carousel
        autoplay
        autoplaySpeed={4000}
        className='!z-[900]'
        style={{ width: '100vw' }}
        effect="fade"
      >
        {carouselImages2.map((img, idx) => (
          <div key={idx} className='flex justify-center items-center'>
            <Image
              src={img.url}
              alt='image'
              height={{ base: '180px', md: '300px' }}
              style={{ width: '100vw' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
