'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Function/button';

export default function UnseenSpending() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <div className="mt-[76px] flex h-[529px] w-full justify-center bg-white py-[48px] gap-[56px]">
      <div className="">
        <Image
          src="/Illustration/Illustration-2.png"
          width={442}
          height={329}
          quality={100}
          alt=""
        />
      </div>
      <div className="flex flex-col w-[600px] h-[300px]">
        <p className="font-inter text-[36px] font-semibold text-neutral-d_grey">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="font-inter text-[14px] text-neutral-d_grey mt-[16px] mb-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button
          variant="Primary"
          className="h-[52px] w-[151px] rounded-[4px]"
          loading={loadingButton === 'learn more'}
          disabled={loadingButton !== null && loadingButton !== 'learn more'}
          onClick={() => handleButtonClick('learn more')}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
