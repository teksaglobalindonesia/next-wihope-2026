export default function Footer() {
  const iconSosmed = [
    {
      image: '/ig Icons.svg',
      alt: 'instagram'
    },
    {
      image: '/twitter Icons.svg',
      alt: 'twitter'
    },
    {
      image: '/yt Icons.svg',
      alt: 'yt'
    }
  ];
  return (
    <footer className="flex justify-center gap-[125px] bg-neutral-black px-[165px] py-[64px]">
      <div className="flex w-full max-w-[1110px] justify-between">
        <div className="flex h-[189.67px] w-[350px] flex-col gap-[40px]">
          <img
            src="/Logo-white.svg"
            alt="logo"
            className="h-[29.67px] w-[191px] gap-[9.89px]"
          />

          <div className="font-inter flex h-[48px] w-[350px] flex-col gap-[8px] text-[14px] leading-[20px] text-neutral-silver">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>

          <div className="flex h-[32px] w-[128px] flex-row gap-[16px]">
            {iconSosmed.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.alt}
                className="h-[32px] w-[32px]"
              />
            ))}
          </div>
        </div>

        <div className="flex h-[200px] w-[635px] gap-[30px]">
          <div className="flex w-[160px] flex-col gap-[24px]">
            <h4 className="font-inter h-[28px] text-[20px] font-semibold leading-[28px] text-neutral-white">
              Company
            </h4>

            <div className="font-inter flex h-[148px] flex-col gap-[12px] text-[14px] leading-[20px] text-neutral-silver">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>

          <div className="flex w-[160px]  flex-col gap-[24px]">
            <h4 className="font-inter text-[20px] font-semibold leading-[28px] text-neutral-white">
              Support
            </h4>

            <div className="font-inter flex h-[148px] flex-col gap-[12px] text-[14px] leading-[20px] text-neutral-silver">
              <p>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
