import Header from '../components/header';
import Hero from '../components/Hero';
import OurClient from '@/components/OurClient';
import Community from '@/components/Community';
import UnseenSpending from '@/components/UnseenSpending';
import Achievement from '@/components/Achievement';
import HowToDesign from '@/components/HowToDesign';
import NewMarketing from '@/components/NewMarketing';
export default function Page() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-[40px]'>
        <Hero />
        <OurClient />
        <Community />
      </div>
      <div className='flex flex-col mt-[42px] gap-[48px]'>
      <UnseenSpending />
      <Achievement />
      <HowToDesign />
      <NewMarketing />
      </div>
    </div>
  );
}
