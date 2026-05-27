import { CustButton } from './CustButton';

export default function NewMarketing() {
  return (
    <div className="mt-[14px] h-[506px] w-full gap-4">
      <div className="mx-32 flex h-32 w-[1000px] flex-col items-center justify-center gap-2 px-60 text-center font-inter">
        <h1 className="text-4xl font-semibold text-[#4D4D4D]">
          Caring is the new marketing
        </h1>
        <p className="mt-2 text-[#717171]">
          {"The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."}
        </p>
      </div>

      <div className="mt-6 flex w-full justify-between gap-6 px-36">
        {/* card 1 */}
        <div className="relative pb-32">
          <img
            className="block w-full rounded-xl"
            src="/marketing-logo/image 18.png"
            alt="pict 1"
          />

          <div className="absolute bottom-0 left-1/2 z-10 flex w-[285px] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-xl">
            <div className="flex h-[84px] w-full items-center justify-center">
              <h1 className="text-center font-inter text-[20px] font-semibold leading-[28px] text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
            </div>
            <CustButton variant="secondary" iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative pb-32">
          <img
            className="block w-full rounded-xl"
            src="/marketing-logo/image 19.png"
            alt="pict 2"
          />

          <div className="absolute -bottom-4 left-1/2 z-10 flex w-[285px] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-xl">
            <div className="flex h-[84px] w-full items-center justify-center">
              <h1 className="text-center font-inter text-[20px] mt-4 font-semibold leading-[28px] text-[#717171]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h1>
            </div>
            <CustButton variant={'secondary'} className="mt-4" iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative pb-32">
          <img
            className="block w-full rounded-xl"
            src="/marketing-logo/image 20.png"
            alt="pict 3"
          />

          <div className="absolute bottom-0 left-1/2 z-10 flex w-[285px] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-xl">
            <div className="flex h-[84px] w-full items-center justify-center">
              <h1 className="text-center font-inter text-[20px] font-semibold leading-[28px] text-[#717171]">
                Revamping the Membership Model with Triathlon Australia
              </h1>
            </div>
            <CustButton variant="secondary" iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>
      </div>
    </div>
  );
}
