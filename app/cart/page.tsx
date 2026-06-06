import Header from "@/components/custom/header"
import Footer from "@/components/custom/footer"
import HeroSimple from "@/components/custom/hero-simple"
import Cart from "@/components/custom/cart"

export default function Page (){
 return(
    <>
    <Header/>
    <HeroSimple judul="Cart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum."/>
    <Cart/>
    <Footer/>
    </>
 )
}