'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Function/button';
import gsap from 'gsap';

export default function UnseenSpending() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to('.foto', { scale: active? 1.15 : 1, duration: 0.5 }, 0)
      .to('.judul', { x:active? 40 : 0, duration: 0.5 }, 0)
      .to('.text', { x:active? -40 : 0, duration: 0.5 }, 0);
  }, [active]);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <div className="mt-[76px] flex h-[529px] w-full justify-center gap-[56px] bg-white py-[48px]">
      <div className="">
        <Image
          src="/Illustration/Illustration-2.png"
          width={442}
          height={329}
          quality={100}
          alt=""
          className='foto'
        />
      </div>
      <div className="flex h-[300px] w-[600px] flex-col">
        <p className="judul font-inter text-[36px] font-semibold text-neutral-d_grey">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="text mb-[32px] mt-[16px] font-inter text-[14px] text-neutral-d_grey">
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
          onClick={() => {handleButtonClick('learn more'); setActive(!active)}}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
