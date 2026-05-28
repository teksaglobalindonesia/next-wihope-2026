import Image from "next/image";

const Achievement = () => {
  return (
    <section className="w-full bg-neutral-silver">
      
      <div className="max-w-[1440px] h-[288px] mx-auto flex justify-between px-[144px] py-[64px]">

        <div className="w-[540px] h-[120px] flex flex-col gap-[8px]">

          <h2 className="w-[408px] h-[88px] font-inter font-semibold text-[36px] leading-[44px] text-neutral-d-grey">
            Helping a local{" "}
            <span className="text-primary-brand-primary">
              business reinvent itself
            </span>
          </h2>

          <p className="w-[540px] h-[24px] font-inter font-normal text-[16px] leading-[24px] text-gray-900">
            We reached here with our hard work and dedication
          </p>

        </div>

        <div className="w-[540px] h-[160px] grid grid-cols-2 gap-[40px]">

          <div className="w-[255px] h-[60px] flex gap-[16px]">

            <div className="relative w-[48px] h-[48px] shrink-0">

              <Image
                src="/achievement/members-icon copy.png"
                alt="Members"
                width={46.78}
                height={31.12}
                className="absolute top-[8.24px] left-[0.75px]"
              />

            </div>

            <div className="w-[191px] h-[60px]">

              <h3 className="font-inter font-bold text-[28px] leading-[36px] text-neutral-d-grey">
                2,245,341
              </h3>

              <p className="font-inter font-normal text-[16px] leading-[24px] text-neutral-grey">
                Members
              </p>

            </div>

          </div>

          <div className="w-[255px] h-[60px] flex gap-[16px]">

            <div className="relative w-[48px] h-[48px] shrink-0">

              <Image
                src="/achievement/clubs-icon.png"
                alt="Clubs"
                width={32.37}
                height={30}
                className="absolute top-[9px] left-[7.97px]"
              />

            </div>

            <div className="w-[191px] h-[60px]">

              <h3 className="font-inter font-bold text-[28px] leading-[36px] text-neutral-d-grey">
                46,328
              </h3>

              <p className="font-inter font-normal text-[16px] leading-[24px] text-neutral-grey">
                Clubs
              </p>

            </div>

          </div>

          <div className="w-[255px] h-[60px] flex gap-[16px]">

            <div className="relative w-[48px] h-[48px] shrink-0">

              <Image
                src="/achievement/events-icon.png"
                alt="Event Bookings"
                width={32}
                height={36}
                className="absolute top-[6px] left-[8px]"
              />

            </div>

            <div className="w-[191px] h-[60px]">

              <h3 className="font-inter font-bold text-[28px] leading-[36px] text-neutral-d-grey">
                828,867
              </h3>

              <p className="font-inter font-normal text-[16px] leading-[24px] text-neutral-grey">
                Event Bookings
              </p>

            </div>

          </div>

          <div className="w-[255px] h-[60px] flex gap-[16px]">

            <div className="relative w-[48px] h-[48px] shrink-0">

              <Image
                src="/achievement/payments-icon.png"
                alt="Payments"
                width={42}
                height={33}
                className="absolute top-[10px] left-[3px]"
              />

            </div>

            <div className="w-[191px] h-[60px]">

              <h3 className="font-inter font-bold text-[28px] leading-[36px] text-neutral-d-grey">
                1,926,436
              </h3>

              <p className="font-inter font-normal text-[16px] leading-[24px] text-neutral-grey">
                Payments
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Achievement;