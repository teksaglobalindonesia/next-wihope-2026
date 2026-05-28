import Header from "@/components/custom/header";
import SimpleHero from "@/components/service/simple-hero";
import ServiceList from "@/components/service/service-list";
import Quote from "@/components/service/quote";
import Footer from "@/components/custom/footer";

export default function ServicePage() {
  return (
    <div>
        <Header />
        <SimpleHero />
        <ServiceList />
        <Quote />
        <Footer />
    </div>
  );
}