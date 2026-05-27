import Header from '../../components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
import SimpleHero from '@/components/web/HomePage/ServicePage/SimpleHero';
import Service1 from '@/components/web/HomePage/ServicePage/ServiceList/Service1';
import Service2 from '@/components/web/HomePage/ServicePage/ServiceList/Service2';
import Service3 from '@/components/web/HomePage/ServicePage/ServiceList/Service3';
import Quote from '@/components/web/HomePage/ServicePage/Quote';
export default function service() {
  return (
    <div className="mt-[84px]">
      <Header />
      <div className="flex flex-col gap-[40px]">
        <SimpleHero />
        <Service1 />
        <Service2 />
        <Service3 />
        <Quote />
      </div>
      <Footer />
    </div>
  );
}
