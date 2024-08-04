import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Hero from '@/components/Home/Hero';
import LoadingContainer from '@/components/global/LoadingContainer';
import { Suspense } from 'react';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};

export default Homepage;
