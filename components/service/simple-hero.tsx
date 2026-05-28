import Link from "next/link";

const SimpleHero = () => {
  return (
    <section className="flex h-[308px] w-full items-center justify-center bg-neutral-silver gap-[104px] px-[144px] py-[96px]">
      <div className="flex h-[116px] w-[1152px] flex-col gap-[32px]">
        <div className="flex h-[76px] w-[1152px] items-center justify-center">
          <h1 className="font-inter text-center text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Our <span className="text-primary-brand-primary">Service</span>
          </h1>
        </div>

        <div className="flex h-[24px] w-[1152px] items-center justify-center">
          <p className="font-inter text-center text-[16px] font-normal leading-[24px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;