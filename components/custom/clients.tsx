export default function Clients() {
  return (
    <div className="w-full bg-white">
      <div className="mt-10 mx-auto flex h-[190px] max-w-[1440px] flex-col items-center gap-[16px] px-[144px]">
        <div className="flex h-[76px] w-[1110px] flex-col gap-[8px] text-center">

          <h2 className="font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Our Clients
          </h2>

          <p className="font-inter text-[16px] leading-[24px] text-neutral-grey">
            We have been working with some Fortune 500+ clients
          </p>

        </div>

        <div className="flex h-[98px] w-[1152px] items-center justify-between ">

          <img alt="client logo" src="/Logo (1).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (2).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (3).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (4).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (5).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (6).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>
          <img alt="client logo" src="/Logo (7).svg" width={48} height={48} className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"/>

        </div>

      </div>

    </div>
  );
}