import Community from '@/components/custom/community';
import { CustButton } from '@/components/custom/CustButton';
import Header from '@/components/custom/header';
import Hero from '@/components/custom/hero';
import OurClients from '@/components/custom/our-clients';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <OurClients />
      <Community />
    </div>
  );
}
