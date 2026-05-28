import Image from "next/image";

const Quote = () => {
  return (
    <section className="w-full bg-neutral-silver">
      <div className="mx-auto flex h-[390px] w-[1440px] items-center gap-[78px] px-[144px] py-[32px]">
        
        <div className="shrink-0 overflow-hidden rounded-[8px] w-[326px] h-[326px] drop-shadow-[0px_8px_16px_rgba(171,190,209,0.4)]">
          <Image
            src="/assets/quote.png"
            alt="Tim Smith"
            width={326}
            height={326}
            className="object-cover w-full h-full scale-[1.15]"
          />
        </div>

        <div className="flex h-[324px] w-[748px] flex-col gap-[32px]">
          
          <div className="flex h-[244px] w-[748px] flex-col gap-[16px]">
            
            <p className="text-neutral-grey w-[748px] h-[168px] font-inter font-medium text-[16px] leading-[24px] tracking-normal overflow-hidden">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>

            <div className="flex h-[60px] w-[748px] flex-col gap-[8px]">
              <p className="text-primary-brand-primary w-[748px] h-[28px] font-inter font-semibold text-[20px] leading-[28px] tracking-normal">
                Tim Smith
              </p>
              <p className="text-neutral-l-grey w-[748px] h-[24px] font-inter font-normal text-[16px] leading-[24px] tracking-normal">
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>

          <div className="flex h-[48px] w-[748px] items-center gap-[32px]">
            
            <div className="flex h-[48px] w-[493px] items-center gap-[41px]">
              <div className="h-[48px] w-[48px] shrink-0 overflow-hidden rounded-[8px]">
                <Image src="/clients/quote1.png" alt="Logo 1" width={48} height={48} className="object-contain w-full h-full" />
              </div>
              <div className="flex h-[48px] w-[40px] shrink-0 items-center justify-center">
                <Image src="/clients/client2.png" alt="Logo 2" width={40} height={28} className="object-contain" />
              </div>
              <div className="flex h-[48px] w-[55px] shrink-0 items-center justify-center">
                <Image src="/clients/client3.png" alt="Logo 3" width={55} height={30} className="object-contain" />
              </div>
              <div className="flex h-[48px] w-[47px] shrink-0 items-center justify-center">
                <Image src="/clients/client4.png" alt="Logo 4" width={47} height={29} className="object-contain" />
              </div>
              <div className="flex h-[48px] w-[41px] shrink-0 items-center justify-center">
                <Image src="/clients/client5.png" alt="Logo 5" width={41} height={27} className="object-contain" />
              </div>
              <div className="flex h-[48px] w-[52px] shrink-0 items-center justify-center">
                <Image src="/clients/client6.png" alt="Logo 6" width={52} height={20} className="object-contain" />
              </div>
            </div>

            <div className="flex h-[44px] w-[223px] cursor-pointer items-center gap-[8px] p-[8px]">
              <span className="w-[188px] h-[28px] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-primary-brand-primary whitespace-nowrap">
                Meet all customers
              </span>
              <Image src="/marketing/arrow-right.svg" alt="arrow" width={24} height={24} className="shrink-0" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;