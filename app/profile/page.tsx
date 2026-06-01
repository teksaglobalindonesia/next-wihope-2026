import Header from '@/components/web/HomePage/Header&Footer/header';
import Profile from '@/components/web/HomePage/Profile';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
export default function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="mt-[84px]"></div>
      <Profile />
      <div className='mb-[355px]'></div>
      <Footer />
    </div>
  );
}
