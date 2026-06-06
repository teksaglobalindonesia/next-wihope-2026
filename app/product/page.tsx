import Header from "@/components/custom/header"
import Footer from "@/components/custom/footer"
import ProductList from "@/components/custom/product-list"
import HeroSimple from "@/components/custom/hero-simple"

export default function Page (){
    return (
        <>
        <Header/>
        <HeroSimple judul="Product" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum."/>
        <ProductList/>
        <Footer/>
        </>
    )
}