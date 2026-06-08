'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';

export default function UnseenSpending() {
  const container = useRef(null);

  const handleLearnMore = () => {
    gsap.to('.animatedImage', { x: -50, scale: 1.1, duration: 1});
    gsap.to('.animatedTitle', { x: 50, duration: 1 });
    gsap.to('.animatedDesc', { x: -50, duration: 1 })
  };

  return (
    <div
      ref={container}
      className="flex w-full items-center justify-center gap-[49px] bg-neutral-white px-[144px]"
    >
      <div className="animatedImage flex items-center justify-center">
        <Image
          src="/illustrations/mobile-login-illustration.png"
          width={375}
          height={250}
          alt="Illustration"
        />
      </div>

      <div className="flex w-[661px] flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="animatedTitle text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="animatedDesc text-sm text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>

        <Button className="" variant="standardPrimary" size="medium" onClick={handleLearnMore}>Learn more</Button>
      </div>
    </div>
  );
}
