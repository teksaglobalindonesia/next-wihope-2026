'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Community() {
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.container',
      start: 'top -120%',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.card1', {rotate: 30, duration: 0.5 })
  tl.from('.card2', {rotate: 30, duration: 0.5 })
  tl.from('.card3', {rotate: 30, duration: 0.5 })
}, []);
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="flex flex-col gap-[8px]">
        <p className="text-center text-[36px] font-semibold leading-[44px] text-neutral-d_grey ">
          Manage your entire community
          <br />
          in a single system
        </p>
        <p className="text-center leading-[24px] text-neutral-grey">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="mt-[16px] flex w-[1152px] items-center justify-between">
        <div className="card1 flex h-[260px] w-[299px] flex-col items-center justify-center rounded-[8px] p-[24px] shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]">
          <img
            className="mb-[16px] h-[56px] w-[65px]"
            src="/Community1.png"
            alt="logo"
          />
          <p className="mb-[8px] text-center text-[28px] font-semibold leading-[36px] text-neutral-d_grey">
            Membership
            <br />
            Organisations
          </p>
          <p className="text-center text-[14px] leading-[20px] text-neutral-grey">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card2 flex h-[280px] w-[299px] flex-col items-center justify-center rounded-[8px] p-[24px] shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]">
          <img
            className="mb-[16px] h-[56px] w-[65px]"
            src="/Community2.png"
            alt="logo"
          />
          <p className="mb-[8px] text-center text-[28px] font-semibold leading-[36px] text-neutral-d_grey">
            National
            <br />
            Associations
          </p>
          <p className="text-center text-[14px] leading-[20px] text-neutral-grey">
            Our membership management software provides full automation of
            membership renewals and
            <br />
            payments
          </p>
        </div>
        <div className="card3 flex h-[260px] w-[299px] flex-col items-center justify-center rounded-[8px] p-[24px] shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]">
          <img
            className="mb-[16px] h-[56px] w-[65px]"
            src="/Community3.png"
            alt="logo"
          />
          <p className="mb-[8px] text-center text-[28px] font-semibold leading-[36px] text-neutral-d_grey">
            Clubs And
            <br />
            Groups
          </p>
          <p className="text-center text-[14px] leading-[20px] text-neutral-grey">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
