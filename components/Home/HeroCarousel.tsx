import hero1 from '@/public/images/carousel1.jpg';
import hero2 from '@/public/images/carousel2.jpg';
import hero3 from '@/public/images/carousel3.jpg';
import hero4 from '@/public/images/carousel4.jpg';
import hero5 from '@/public/images/carousel5.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const carouselImages = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  return (
    <div className=' hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className=' p-2'>
                    <Image
                      src={img}
                      alt='hero'
                      className=' w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
