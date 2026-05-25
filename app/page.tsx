import Header from '../components/header';
import Hero from '../components/Hero';
import OurClient from '@/components/OurClient';
import Community from '@/components/Community';
export default function Page() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-[40px]'>
        <Hero />
        <OurClient />
        <Community />
      </div>
    </div>
  );
}
