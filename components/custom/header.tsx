import { CustButton } from './CustButton';

export default function Header() {
  return (
    <div className="flex h-[84px] w-full flex-row justify-between bg-neutral-d-grey px-8">
      <div className="ml-[30px] mt-[25px] flex h-[24px] w-[154.49px] flex-row items-center gap-[8px]">
        <img
          src="/image/Icon.png"
          className="ml-105 h-[24px] w-[35px]"
          alt="Icon"
        />
        <h1 className="h-[20.66px] w-[111.49px] pb-8 text-2xl font-bold text-brand-secondary">
          Nextcent
        </h1>
      </div>

      <div className="ml-[80px] mt-[30px] flex h-[24px] w-[588px] flex-row items-center gap-[50px]">
        <p className="h-[24px] w-[46px] gap-[10px] font-inter text-[16px] text-gray-900">
          Home
        </p>
        <p className="h-[24px] w-[57px] gap-[10px] font-inter text-[16px] text-gray-900">
          Service
        </p>
        <p className="h-[24px] w-[58px] gap-[10px] font-inter text-[16px] text-gray-900">
          Feature
        </p>
        <p className="h-[24px] w-[60px] gap-[10px] font-inter text-[16px] text-gray-900">
          Product
        </p>
        <p className="h-[24px] w-[86px] gap-[10px] font-inter text-[16px] text-gray-900">
          Testimonial
        </p>
        <p className="h-[24px] w-[31px] gap-[10px] font-inter text-[16px] text-gray-900">
          FAQ
        </p>
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
