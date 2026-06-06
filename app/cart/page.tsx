import Header from '@/components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
import MiniHero from '@/components/web/HomePage/Header&Footer/MiniHero';
import CartList from '@/components/web/HomePage/CartList';

export default function CartPage() {
  return (
    <div className="">
      <Header />
      <div className="mt-[84px]"></div>
      <MiniHero Title="Cart" />
      <div className='py-[40px]'>
      <CartList />
      </div>
      <Footer />
    </div>
  );
}
