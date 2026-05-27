export default function NewMarketing() {
  const marketing = [
    {
      image: '/image 18.png',
      title: 'Creating Streamlined Safeguarding Processes with OneRen'
    },
    {
      image: '/image 19.png',
      title:
        'What are your safeguarding responsibilities and how can you manage them?'
    },
    {
      image: '/image 20.png',
      title: 'Revamping the Membership Model with Triathlon Australia'
    }
  ];

  return (
    <div className=" h-[506px] py-[48px] w-full bg-white mt-[2px]">

      <div className="mx-auto flex max-w-[1110px] flex-col items-center gap-[16px]  font-inter"> 
        <div className="flex flex-col items-center gap-[8px]">
          <h2 className="h-[44px] text-center text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Caring is the new marketing
          </h2>

          <p className="w-[628px] h-[72px] text-center text-[16px] leading-[24px] text-neutral-grey">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
          </p>
        </div>
         </div>

        <div className=" mt-[16px] flex mx-auto h-[366px] max-w-[1440px] justify-between px-[144px]">

            {marketing.map((item, index) => (
            <div
              key={index}
              className="relative flex w-[368px] flex-col items-center"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="marketing image"
                className="h-[286px] w-full rounded-[8px] object-cover"
              />

             <div className="absolute mt-[190px] w-[317px] h-[176px] flex flex-col gap-[16px] rounded-[8px] p-[16px] shadow-[0px_8px_16px_0px_#ABBED166] bg-neutral-silver items-center">

                <h4 className="text-center text-[20px] font-semibold leading-[28px] -w-[285px] h-[84px] font-inter text-neutral-grey">
                  {item.title}
                </h4>

                <button className="w-[285px] h-[44px] flex p-[8px] gap-[8px] text-[20px] font-semibold leading-[28px] font-inter text-brand-primary items-center justify-center">
                  Readmore →
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
