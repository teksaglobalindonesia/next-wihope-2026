import Header from '@/components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
import MiniHero from '@/components/web/HomePage/Header&Footer/MiniHero';
import ProductList from '@/components/web/HomePage/ProductList';
export default function ProductPage() {
  return (
    <div>
      <Header />
      <div className="mt-[84px]"></div>
      <MiniHero Title="Product" />
      <div className="mb-[16px] mt-[40px]">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
