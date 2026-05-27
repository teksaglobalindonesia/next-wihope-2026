import Header from '../components/web/HomePage/Header&Footer/header';
import Hero from '@/components/web/HomePage/Hero';
import OurClient from '@/components/web/HomePage/OurClient';
import Community from '@/components/web/HomePage/Community';
import UnseenSpending from '@/components/web/HomePage/UnseenSpending';
import Achievement from '@/components/web/HomePage/Achievement';
import HowToDesign from '@/components/web/HomePage/HowToDesign';
import NewMarketing from '@/components/web/HomePage/NewMarketing';
import Ribbon from '@/components/web/HomePage/Ribbon';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
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
