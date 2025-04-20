import HeroSection from '@/sections/HeroSection'
import Header from './sections/Header';
import HowReiWorks from './sections/HowReiWorks';

export default function Home() {
  return (
    <div className='max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12'>
      <Header/>
      <HeroSection />
      <HowReiWorks/>
    </div>
  );
}