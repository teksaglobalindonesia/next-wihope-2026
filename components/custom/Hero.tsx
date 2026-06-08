'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 100,
      duration: 1,
      ease: 'power3.out'
    });
  }, []); 

  return (
    <section className="bg-neutral-silver">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-[104px] px-[144px] py-[96px]">
        <div ref={titleRef} className="max-w-[657px]">
          <h1 className="font-inter text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Lessons and insights
            <br />
            <span className="text-primary-brand-primary">from 8 years</span>
          </h1>

          <p className="mt-4 font-inter text-[16px] font-normal leading-6 text-neutral-grey">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="mt-8 flex items-center justify-center gap-[10px] rounded-sm bg-primary-brand-primary px-[32px] py-[14px] font-inter text-[16px] font-medium leading-6 text-white transition-all hover:bg-green-700">
            Register
          </button>
        </div>

        <img
          src="/assets/hero.png"
          alt="Hero Image"
          className="h-[407px] w-[391px]"
        />
      </div>
    </section>
  );
}
