import Image from "next/image";

const marketingData = [
  {
    image: "/marketing/marketing-1.png",
    title: ["Creating Streamlined Safeguarding Processes with OneRen"],
  },
  {
    image: "/marketing/marketing-2.png",
    title: ["What are your safeguarding responsibilities and how can you manage them?"],
  },
  {
    image: "/marketing/marketing-3.png",
    title: ["Revamping the Membership", " Model with Triathlon", " Australia"],
  },
];

export default function NewMarketing() {
  return (
    <section className="w-full bg-neutral-white flex justify-center pb-[176px]">
      <div className="w-[1440px] flex flex-col gap-4">
        <div className="w-[1110px] h-[124px] mx-auto flex flex-col items-center gap-2">
          <h2 className="w-[1110px] h-[44px] font-inter text-center text-[36px] leading-[44px] font-semibold text-neutral-d-grey">
            Caring is the new marketing
          </h2>
          <p className="w-[628px] h-[72px] font-inter text-center text-[16px] leading-[24px] font-normal text-neutral-grey">
            The Nexcent blog is the best place to read about the latest membership insights, 
            trends and more. See who's joining the community, read about how our community 
            are increasing their membership income and lot's more.
          </p>
        </div>

        <div className="w-[1440px] flex justify-between px-[144px]">
          {marketingData.map((item, index) => (
            <div key={index} className="relative w-[368px]" style={{ height: '366px' }}>
              <div className="relative w-[368px] h-[286px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title.join(" ")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[317px] h-[176px] rounded-[8px] p-4 flex flex-col gap-4 items-center bg-neutral-silver shadow-[0px_8px_16px_0px_#ABBED166]">
                <h3 className="w-[285px] h-[84px] font-inter text-center text-[20px] leading-[28px] font-semibold text-neutral-grey whitespace-pre-line">
                  {item.title.map((line, i) => (
                    <span key={i}>{line}{i < item.title.length - 1 && <br />}</span>
                  ))}
                </h3>
                <button className="w-[285px] h-[44px] flex items-center justify-center gap-2 p-2">
                  <span className="text-[20px] leading-[28px] font-semibold text-primary-brand-primary">
                    Readmore
                  </span>
                  <Image
                    src="/marketing/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}