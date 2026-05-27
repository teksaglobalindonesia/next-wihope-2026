'use client';

import { useState } from 'react';
import Button from '../Function/button';
import Image from 'next/image';
import serviceData from '@/lib/service-data';

export default function ServiceList() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <>
    {serviceData.map((data, id) => (
    <div key={id} className={`flex w-full items-center justify-center gap-[123px] ${id % 2 === 1 ? "bg-neutral-silver h-[433px]" : " bg-white h-[513px]"}`}>
     
       {id % 2 !== 1 && (
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
        )}

     
      <div className="flex h-[245px] w-[600px] flex-col font-inter">
        <p className="text-[36px] font-semibold text-neutral-d_grey">
         {data.judul}
        </p>
        <p className="text-[14px] text-neutral-grey mt-[16px] mb-[32px]">
         {data.text}
        </p>
        <Button
          variant="Primary"
          className="h-[52px] w-[151px] rounded-[4px]"
          loading={loadingButton === `learn more-${id}`}
          disabled={loadingButton !== null && loadingButton !== `learn more-${id}`}
          onClick={() => handleButtonClick(`learn more-${id}`)}
        >
          Learn More
        </Button>
      </div>

      {id % 2 === 1 && (
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
        )}

    </div>
    ))}
    </>
  );
}
