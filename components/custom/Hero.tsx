import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="flex gap-[104px] w-full items-center justify-center bg-neutral-silver py-[96px] px-[144px]">

          <div className="flex flex-col gap-8 items-start w-[657px] h-[276px]">
            <span className="text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
              Lessons and insights
              <span className="text-brand-primary"> from 8 years</span>
            </span>

            <span className="text-neutral-grey">
              Where to grow your business as a photographer: site or social media?
            </span>

            <button className="bg-brand-primary text-neutral-white rounded-[4px] py-[14px] px-8">
              Register
            </button> 
          </div>

          <div>
            <Image  
              src="/illustration/illustration_1.png"
              width={391}
              height={407}
              alt="Illustration"
            />
          </div>
          
      </div>
    </>
  );
}
