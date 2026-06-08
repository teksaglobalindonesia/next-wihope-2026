'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/use-auth-store';

export default function Header() {
  const name = useAuthStore((state: any) => state.name);
  const clearName = useAuthStore((state: any) => state.clearName);
  const router = useRouter();
  const handleLogout = () => {
    clearName();
    router.push('/');
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-silver ">
      <div className="flex h-[84px] flex-row items-center px-[144px]">
        <img alt="logo" src="/logo.svg" width={154} height={24} />

        <nav className="flex h-[24px] flex-1 items-center justify-center gap-[50px] text-[16px] font-normal leading-[24px] text-gray-900">
          <Link
            href="/"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Services
          </Link>

          <Link
            href="/features"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Features
          </Link>
          
          <Link
            href="/product"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Product
          </Link>

          <Link
            href="/testimonials"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary">
            Testimonials
          </Link>

          <Link
            href="/faq"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary">
            FAQ
          </Link>

          <Link
            href="/cart"
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Cart
          </Link>

        </nav>
        {name ? (
          <div className="flex items-center gap-4">
            <span className="font-inter font-bold text-[14px] leading-[20px] hover:underline text-brand-primary">{name}</span>

            <button
              onClick={handleLogout}
              className=" text-neutral-black font-inter text-[14px] leading-[20px] hover:underline "
            >
              Logout
            </button>
          </div>
        ) : (
          
          <div className="flex items-center gap-4">
    <Link
      href="/login"
      className="font-inter text-brand-primary hover:underline text-[14px] leading-[20px] hover:border rounded-[6px] px-[20px] py-[10px] "
    >
      Login
    </Link>

    <button className="font-inter text-white hover:scale-[1.05] transition-all duration-300 rounded-[6px] bg-brand-primary px-[20px] py-[10px] text-[14px] leading-[20px]">
      Sign Up
    </button>
  </div>
        )}
      </div>
    </header>
  );
}
