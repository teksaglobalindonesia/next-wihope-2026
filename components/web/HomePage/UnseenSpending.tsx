'use client';

import { useState, useTransition, useEffect } from 'react';
import Button from './perButtonan/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UnseenSpending() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.image', { scale: active ? 1.15 : 1, duration: 0.5},0);
    tl.to('.title', { x: active ? 30 : 0, duration: 0.5 },0);
    tl.to('.description', { x: active ? -30 : 0, duration: 0.5 },0);
  }, [active]);
  return (
    <div className="flex h-[433px] justify-center">
      <div className="flex h-[full] w-[1152px] items-center justify-between">
        <img
          className="image h-full w-[442px]"
          src="/UnseenSpending.png"
          alt="Illustration"
        />
        <div className="flex h-[268px] w-[661px] flex-col justify-between font-inter">
          <div className="flex h-[184px] w-[601px] flex-col justify-between">
            <p className="title mb-[8px] text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="description text-[14px] leading-[20px] text-neutral-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <Button
            variant="primary"
            className="h-[52px] w-[151px] text-[16px]"
            loadingSize="h-[16px] w-[16px]"
            onClick={() => {
              setActive(!active);
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
