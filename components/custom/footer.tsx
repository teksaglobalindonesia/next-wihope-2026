const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-neutral-black px-[165px] py-[64px]">
      <div className="flex w-full max-w-[1440px] items-start gap-[125px]">
        <div className="flex h-[189.67px] w-[350px] flex-col gap-[40px]">
          <div className="flex h-[29.67px] w-[191px] items-center gap-[9.89px]">
            <img
              src="/assets/logo-white.png"
              alt="logo-footer"
              className="h-[29.67px] w-[43.27px]"
            />

            <h2 className="h-[25.54px] w-[137.83px] text-[36px] font-semibold leading-[30px] text-neutral-white">
              Nexcent
            </h2>
          </div>

          <div className="flex h-[48px] w-[350px] flex-col gap-[8px]">
            <p className="h-[20px] w-[350px] text-[14px] font-normal leading-[20px] tracking-[0%] text-neutral-silver">
              Copyright © 2020 Nexcent ltd.
            </p>

            <p className="h-[20px] w-[350px] text-[14px] font-normal leading-[20px] tracking-[0%] text-neutral-silver">
              All rights reserved
            </p>
          </div>

          <div className="flex h-[32px] w-[128px] gap-[16px]">
            <img
              src="/footers/instagram.png"
              alt="instagram"
              className="h-[32px] w-[32px]"
            />

            <img
              src="/footers/twitter.png"
              alt="twitter"
              className="h-[32px] w-[32px]"
            />

            <img
              src="/footers/youtube.png"
              alt="youtube"
              className="h-[32px] w-[32px]"
            />
          </div>
        </div>

        <div className="flex h-[200px] w-[635px] gap-[30px]">
          <div className="flex h-[200px] w-[160px] flex-col gap-[24px]">
            <h3 className="h-[28px] w-[160px] text-[20px] font-semibold leading-[28px] tracking-[0%] text-neutral-white">
              Company
            </h3>

            <div className="flex h-[148px] w-[160px] flex-col gap-[12px]">
              {[
                "About us",
                "Blog",
                "Contact us",
                "Pricing",
                "Testimonials",
              ].map((item) => (
                <p
                  key={item}
                  className="h-[20px] w-[160px] text-[14px] font-normal leading-[20px] tracking-[0%] text-neutral-silver"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flex h-[200px] w-[160px] flex-col gap-[24px]">
            <h3 className="h-[28px] w-[160px] text-[20px] font-semibold leading-[28px] tracking-[0%] text-neutral-white">
              Support
            </h3>

            <div className="flex h-[148px] w-[160px] flex-col gap-[12px]">
              {[
                "Help center",
                "Terms of service",
                "Legal",
                "Privacy policy",
                "Status",
              ].map((item) => (
                <p
                  key={item}
                  className="h-[20px] w-[160px] text-[14px] font-normal leading-[20px] tracking-[0%] text-neutral-silver"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;