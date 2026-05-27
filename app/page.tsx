import Header from '../components/custom/header';
import Hero from '@/components/custom/hero';
import Client from '@/components/custom/our-client';
import Community from '@/components/custom/community';
import UnseenSpending from '@/components/custom/unseen-spending';
import Achievement from '@/components/custom/achievement';
import HowToDesign from '@/components/custom/how-to-design';
import NewMarketing from '@/components/custom/new-marketing';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <Community/>
      <UnseenSpending/>
      <Achievement />
      <HowToDesign/>
      <NewMarketing/>
    </>
  );
}
