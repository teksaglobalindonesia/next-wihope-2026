'use client';

import { useState } from 'react';
import Button from '../Function/button';
import Image from 'next/image';
import quoteData from '@/lib/quote-data';

export default function Quote() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <div className="flex h-[390px] w-full items-center justify-center gap-[78px] bg-neutral-silver">
      <div className="shadow-[0px-8px_16px_0px_#ABBED166]">
        <Image
          src="/Illustration/image 9.png"
          alt=""
          width={326}
          height={326}
          quality={100}
        />
      </div>
      <div className="flex h-[324px] w-[748px] flex-col font-inter">
        <p className="text-[16px] font-medium text-neutral-grey">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <div className="mt-[12px] flex flex-col  font-inter gap-[2px]">
          <p className="text-[20px] font-semibold text-brand-primary">
            Tim Smith
          </p>
          <p className="text-[16px] text-neutral-l_grey">
            British Dragon Boat Racing Association
          </p>

          <div className="flex mt-[24px] ">
            <div className="flex gap-[41px] mr-[32px]">
              {quoteData.map((data, id) => (
                <div key={id} className="size-[48px]">
                  <Image
                    src={data}
                    alt=""
                    width={48}
                    height={48}
                    quality={100}
                  />
                </div>
              ))}
            </div>
            <Button
              variant="Tertiary"
              className="h-[44px] w-[223px]"
              loading={loadingButton === 'Meet all customers'}
              disabled={loadingButton !== null && loadingButton !== 'Meet all customers'}
              onClick={() => handleButtonClick('Meet all customers')}
              icon={<span>→</span>}
            >
              Meet all customers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
