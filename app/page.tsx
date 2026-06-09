
import Header from '@/components/custom/header';
import OurClients from '@/components/custom/our-clients';
import Community from '@/components/custom/community';
import UnseenSpending from '@/components/custom/unseen-spending';
import Achievement from '@/components/custom/achievement';
import HowToDesign from '@/components/custom/how-to-design';
import NewMarketing from '@/components/custom/new-marketing';
import Ribbon from '@/components/custom/ribbon';
import Footer from '@/components/custom/footer';
import Hero from '@/components/custom/Hero';


export default function Page() {
  return (
    <>
      <Header/>
      <Hero />
      <OurClients/>
      <Community />
      <UnseenSpending/>
      <Achievement />
      <HowToDesign/>
      <NewMarketing />
      <Ribbon />
      <Footer />
    </>
  );
}
