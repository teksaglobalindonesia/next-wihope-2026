import Header from "@/components/custom/header";
import SimpleHero from "@/components/custom/simple-hero";
import ServiceList from "@/components/custom/service-list";
import Quote from "@/components/custom/quote";
import Footer from "@/components/custom/footer";

export default function Page (){
    return (
        <>
        <Header/>
        <SimpleHero/>
        <ServiceList/>
        <Quote/>
        <Footer/>
        </>
    )
}