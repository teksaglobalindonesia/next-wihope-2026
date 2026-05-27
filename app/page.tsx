import Header from '../components/header';
import Hero from '../components/Hero';
import OurClient from '@/components/OurClient';
import Community from '@/components/Community';
import UnseenSpending from '@/components/UnseenSpending';
import Achievement from '@/components/Achievement';
import HowToDesign from '@/components/HowToDesign';
import NewMarketing from '@/components/NewMarketing';
import Ribbon from '@/components/Ribbon';
import Footer from '@/components/Footer';
export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-[40px]">
        <Hero />
        <OurClient />
        <Community />
      </div>
      <div className="mt-[42px] flex flex-col gap-[48px]">
        <UnseenSpending />
        <Achievement />
        <HowToDesign />
        <NewMarketing />
      </div>
      <div className="mt-[112.6px] flex flex-col">
        <Ribbon />
        <Footer />
      </div>
    </div>
  );
}
