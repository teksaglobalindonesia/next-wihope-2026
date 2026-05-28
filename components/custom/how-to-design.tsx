import Image from "next/image";
import Button from "@/components/custom/green-button";

const HowToDesign = () => {
  return (
    <section className="w-full bg-neutral-white py-[48px]">

      <div className="max-w-[1440px] h-[433.4px] mx-auto flex items-center px-[144px] ">

        <div className="w-[441.53px] h-[433.4px] shrink-0 relative">

          <Image
            src="/assets/pana.png"
            alt="How to design illustration"
            fill
            className="object-contain"
          />

        </div>

        <div className="w-[661px] h-[308px] flex flex-col gap-[32px] ml-[49px]">

          <div className="w-[601px] h-[224px] flex flex-col gap-[16px]">

            <h2 className="w-[601px] h-[88px] font-inter font-semibold text-[36px] leading-[44px] text-neutral-d-grey">
              How to design your site footer like we did
            </h2>

            <p className="w-[601px] h-[120px] font-inter font-normal text-[14px] leading-[20px] text-neutral-grey">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt 
              molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
              libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta 
              nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer 
              in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi 
              ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

          </div>

          <Button>
            Learn More
          </Button>

        </div>

      </div>

    </section>
  );
};

export default HowToDesign;