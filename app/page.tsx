import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

import Hero from "@/components/custom/home/hero";
import OurClients from "@/components/custom/home/our-clients";
import Community from "@/components/custom/home/community";
import UnseenSpending from "@/components/custom/home/unseen-spending";
import Achievement from "@/components/custom/home/achievement";
import HowToDesign from "@/components/custom/home/how-to-design";
import NewMarketing from "@/components/custom/home/new-marketing";
import Ribbon from "@/components/custom/home/ribbon";

export default function Page() {
  return (
    <>
      <Header/>
      
      <div className="flex flex-col gap-10">
        <Hero/>
        <OurClients/>
        <Community/>
        <UnseenSpending/>
        <Achievement/>
        <HowToDesign/>
        <NewMarketing/>
        <Ribbon/>
      </div>
      
      <Footer/>
    </>
  )
}
