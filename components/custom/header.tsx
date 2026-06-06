'use client'

import { CustButton } from './CustButton';
import Link from 'next/link';
import { useAuthStore } from '@/stores/use-auth-store';

export default function Header() {
  const {name, isLoggedin, clearName } = useAuthStore();
  const handleLogout = () => {
    clearName();
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex max-w-7xl h-[78px] mx-auto w-full justify-between bg-[#F5F7FA] px-8">
      <div className="ml-[30px] mt-[25px] flex h-[24px] w-[154.49px] flex-row items-center gap-[8px]">
        <img src="/image/Icon2.png" className="ml-105 h-[24px] w-[35px]" alt="Icon"/>
        <h1 className="h-[20.66px] w-[111.49px] pb-8 text-2xl font-bold text-brand-secondary">Nexcent</h1>
      </div>

      <div className="mt-7 ml-6 flex h-[24px] w-[588px] flex-row items-center gap-9 text-gray-900 font-inter text-sm">
        <Link href="/" passHref legacyBehavior><CustButton variant={'header'}>Home</CustButton></Link>
        <Link href="/service" passHref legacyBehavior><CustButton variant={'header'}>Service</CustButton></Link>
        <Link href="/" passHref legacyBehavior><CustButton variant={'header'}>Feature</CustButton></Link>
        <Link href="/product" passHref legacyBehavior><CustButton variant={'header'}>Product</CustButton></Link>
        <Link href="/" passHref legacyBehavior><CustButton variant={'header'}>Testimonial</CustButton></Link>
        <Link href="/" passHref legacyBehavior><CustButton variant={'header'}>FAQ</CustButton></Link>
        <Link href="/cart" passHref legacyBehavior><CustButton variant={'header'}>Cart</CustButton></Link>
      </div>

      <div className="mr-6 flex flex-row items-center gap-2 px-[20px] py-[10px]">
        {isLoggedin ? (
          <>
            <Link href={'/'}><CustButton size={'medium'} variant={'secondary2'} onClick={handleLogout} className="font-inter text-sm font-medium">{name}</CustButton></Link>
            <Link href={'/'}><CustButton size={'medium'} variant={'secondary3'} className="font-inter text-sm font-medium"onClick={handleLogout}>Logout</CustButton></Link>
          </>
        ) : (
          <>
          
        <Link href="/login"><CustButton size={'medium'} variant={'secondary'} className="font-inter text-sm font-medium ">
          Login
        </CustButton></Link>
        <CustButton size={'medium'} className="font-inter text-sm font-medium text-white">
          Sign Up
        </CustButton>
        </>
        )}
      </div>
    </div>
  );
}
