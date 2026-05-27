'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Function/button';
import marketingData from '@/lib/marketing-data';

export default function NewMarketing() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <div className="h-[618px] w-full bg-white ">
      <div className="flex flex-col items-center gap-[8px]">
        <p className="text-center font-inter text-[36px] font-semibold text-neutral-d_grey">
          Caring is the new marketing
        </p>
        <p className="h-[72px] w-[640px] text-center font-inter text-[16px] text-neutral-grey">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex justify-center mt-[16px] gap-[24px]">
        {marketingData.map((data, id) =>
     <div key={id} className="h-[366px] w-[368px] relative">
        <div className="">
          <Image
            src={`${data.img}.png`}
            alt=""
            width={368}
            height={286}
            quality={100}
            className="rounded-[8px]"
          />
        </div>
        <div className="flex h-[176px] w-[317px] flex-col items-center gap-[10px] rounded-[8px] bg-neutral-silver p-[14px] pt-[16px] shadow-[0px_8px_16px_0px_#ABBED166] absolute bottom-0 left-1/2 -translate-x-1/2">
          <p className="text-center font-inter text-[20px] font-semibold text-neutral-grey">
            {data.text}
          </p>
          <Button
            variant="Tertiary"
            className="h-[44px] w-[285px]"
            loading={loadingButton === `readmore-${id}`}
            disabled={loadingButton !== null && loadingButton !== `readmore-${id}`}
            onClick={() => handleButtonClick(`readmore-${id}`)}
            icon = {<span>→</span>}
          >
            Readmore
          </Button>
        </div>
      </div>
       )}
    </div>
  </div>
  );
}
