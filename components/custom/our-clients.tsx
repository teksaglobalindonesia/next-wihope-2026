export default function Clients() {
  const Logo = [
    "/Logo (1).svg",
    "/Logo (2).svg",
    "/Logo (3).svg",
    "/Logo (4).svg",
    "/Logo (5).svg",
    "/Logo (6).svg",
    "/Logo (7).svg"
  ];

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

          {Logo.map((logo, index) => (
            <img
              key={index}
              alt={`Client logo ${index + 1}`}
              src={logo}
              width={48}
              height={48}
              className="hover:bg-brand-primary hover:scale-[1.025] transition-all duration-200"
            />
          ))}

        </div>

      </div>

    </div>
  );
}