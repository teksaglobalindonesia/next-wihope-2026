import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import Quote from "@/components/custom/service/quote";
import ServiceList from "@/components/custom/service/service-list";
import SimpleHero from "@/components/custom/service/simple-hero";

export default function Page() {
    return (
        <>
            <Header/>

            <div className="flex flex-col gap-10">
                <SimpleHero/>
                <ServiceList/>
                <Quote/>
            </div>

            <Footer/>
        </>
    )
}