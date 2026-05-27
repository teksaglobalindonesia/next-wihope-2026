import Header from '../../components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
import SimpleHero from '@/components/web/HomePage/ServicePage/SimpleHero';
import Service1 from '@/components/web/HomePage/ServiceList/Service1';
import Service2 from '@/components/web/HomePage/ServiceList/Service2';
import Service3 from '@/components/web/HomePage/ServiceList/Service3';
export default function service() {
  return (
    <div className="mt-[84px]">
      <Header />
      <div className="flex flex-col gap-[40px]">
        <SimpleHero />
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
      <Footer />
    </div>
  );
}
