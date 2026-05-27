import Achievements from "@/components/custom/achievement";
import Clients from "@/components/custom/our-clients";
import Community from "@/components/custom/community";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import UnseenSpending from "@/components/custom/unseen-spending";
import HowToDesign from "@/components/custom/how-to-design";
import NewMarketing from "@/components/custom/new-marketing";
import Ribbon from "@/components/custom/ribbon";
import Footer from "@/components/custom/footer";


export default function Page() {
  return(
    <>
    <Header />
    <Hero />
    <Clients />
    <Community />
    <UnseenSpending />
    <Achievements />
    <HowToDesign />
    <NewMarketing />
    <Ribbon />
    <Footer />


    </>
  );
}
