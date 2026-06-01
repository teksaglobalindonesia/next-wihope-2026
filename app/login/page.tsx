import LoginForm from '@/components/web/HomePage/LoginForm';
import Header from '@/components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
export default function LoginPage() {
  return (
    <div>
      <Header />
      <div className="mt-[84px]">
        <div className="mb-[355px]">
          <LoginForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
