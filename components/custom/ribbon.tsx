const Ribbon = () => {
  return (
    <section className="flex h-[300px] w-full flex-col items-center gap-[32px] bg-neutral-silver py-[32px]">
      <h2 className="h-[152px] w-[887px] font-inter text-center text-[64px] font-semibold leading-[76px] text-neutral-black">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h2>

      <button className="flex h-[52px] w-[178px] items-center justify-center gap-[8px] rounded-[4px] bg-primary-brand-primary px-[32px] py-[14px] transition-all hover:bg-green-700">
        <span className="font-inter text-[16px] font-medium leading-[24px] text-neutral-white whitespace-nowrap">
          Get a Demo
        </span>

        <img
          src="/assets/arrow-right-white.svg"
          alt="arrow-right"
          className="h-[16px] w-[16px]"
        />
      </button>
    </section>
  );
};

export default Ribbon;