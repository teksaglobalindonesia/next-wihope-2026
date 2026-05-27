import Header from '../../components/header';
import Footer from '@/components/Footer';
import SimpleHero from '@/components/SimpleHero';
export default function service() {
  return (
    <div className='mt-[84px]'>
      <Header />
      <div className="flex flex-col gap-[40px]">
        <SimpleHero />
      </div>
      <Footer />
    </div>
  );
}
