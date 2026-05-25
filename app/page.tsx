import Achievement from '@/components/custom/achievement';
import Community from '@/components/custom/community';
import { CustButton } from '@/components/custom/CustButton';
import Header from '@/components/custom/header';
import Hero from '@/components/custom/hero';
import HowToDesign from '@/components/custom/how-to-design';
import OurClients from '@/components/custom/our-clients';
import UnseenSpending from '@/components/custom/unseen-spending';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <OurClients />
      <Community />
      <UnseenSpending />
      <Achievement />
      <HowToDesign />
    </div>
  );
}
