'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurClient() {
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      start: 'top -40%',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.title', { y: 50, opacity: 0, duration: 1 })
    .from('.description', {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from('.logo1', { scale: 0, duration: 0.5 })
    .from('.logo2', { scale: 0, duration: 0.5 })
    .from('.logo3', { scale: 0, duration: 0.5 })
    .from('.logo4', { scale: 0, duration: 0.5 })
    .from('.logo5', { scale: 0, duration: 0.5 })
    .from('.logo6', { scale: 0, duration: 0.5 })
    .from('.logo7', { scale: 0, duration: 0.5 });
}, []);

  return (
    <div className="flex h-[190px] flex-col items-center justify-between">
      <div className="flex flex-col gap-[8px] font-inter">
        <p className="title text-center text-[36px] font-semibold leading-[44px] text-neutral-d_grey ">
          Our Client
        </p>
        <p className="description text-[14px] leading-[24px] text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex h-[98px] w-[1152px] items-center justify-between">
        <img
          className="logo1 h-[48px] w-[48px]"
          src="/Client1.png"
          alt="logo"
        />
        <img
          className="logo2 h-[48px] w-[48px]"
          src="/Client3.png"
          alt="logo"
        />
        <img
          className="logo3 h-[48px] w-[48px]"
          src="/Client2.png"
          alt="logo"
        />
        <img
          className="logo4 h-[48px] w-[48px]"
          src="/Client5.png"
          alt="logo"
        />
        <img
          className="logo5 h-[48px] w-[48px]"
          src="/Client6.png"
          alt="logo"
        />
        <img
          className="logo6 h-[48px] w-[48px]"
          src="/Client7.png"
          alt="logo"
        />
        <img
          className="logo7 h-[48px] w-[48px]"
          src="/Client4.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
