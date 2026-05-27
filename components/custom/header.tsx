import { CustButton } from './CustButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 flex h-[84px] w-full flex-row justify-between bg-[#F5F7FA] px-8">
      <div className="ml-[30px] mt-[25px] flex h-[24px] w-[154.49px] flex-row items-center gap-[8px]">
        <img src="/image/Icon.png" className="ml-105 h-[24px] w-[35px]" alt="Icon"/>
        <h1 className="h-[20.66px] w-[111.49px] pb-8 text-2xl font-bold text-brand-secondary">Nexcent</h1>
      </div>

      <div className="mt-7 ml-6 flex h-[24px] w-[588px] flex-row items-center gap-8">
        <Link href="/" passHref legacyBehavior><CustButton variant={'header'}>Home</CustButton></Link>
        <Link href="/service" passHref legacyBehavior><CustButton variant={'header'}>Service</CustButton></Link>
        <CustButton variant={'header'}>Feature</CustButton>
        <CustButton variant={'header'}>Product</CustButton>
        <CustButton variant={'header'}>Testimonial</CustButton>
        <CustButton variant={'header'}>FAQ</CustButton>
      </div>

      <div className="mr-6 mt-2 flex flex-row gap-2 px-[20px] py-[10px]">
        <CustButton size={'medium'} variant={'secondary'} className="font-inter text-sm font-medium ">
          Login
        </CustButton>
        <CustButton size={'medium'} className="font-inter text-sm font-medium text-white">
          Sign Up
        </CustButton>
      </div>
    </div>
  );
}
