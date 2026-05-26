"use client";
import { useState } from 'react';

import Button from '../Function/button';

export default function Hero() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };

  return (
    <div className="flex h-[599px] w-full gap-[40px] bg-neutral-silver px-[50px] py-[96px] justify-center">
      <div className="ml-[35px] mt-[65.5px] flex flex-col font-inter">
        <p className="w-[724px] text-[64px] font-semibold text-neutral-d_grey">
          Lessons and insights{' '}
          <span className="text-brand-primary ">from 8 years</span>
        </p>
        <p className="mt-[16px] text-[16px] text-neutral-d_grey">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button
          variant="Primary"
          className="mt-[32px] h-[52px] w-[128px] rounded-[4px]"
          loading={loadingButton === 'register'}
          disabled={loadingButton !== null && loadingButton !== 'register'}
          onClick={() => handleButtonClick('register')}
        >
          Register
        </Button>
      </div>
      <div>
        <img
          src="../Illustration/Illustration-1.png"
          alt="Illustration"
          className="h-[407px] w-[391px]"
        />
      </div>
    </div>
  );
}
