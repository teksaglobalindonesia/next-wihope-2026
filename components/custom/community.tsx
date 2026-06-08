'use client';
import Image from 'next/image';
import communityData from '@/lib/community-data';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.box',
        start: 'top 0%',
        toggleActions: 'play none none none'
      }
    });
    tl.from('.card0', { rotate: 30, duration: 0.5 })
      .from('.card1', { rotate: 30, duration: 0.5 })
      .from('.card2', { rotate: 30, duration: 0.5 });
  }, []);
  return (
    <div className="box mt-[25px] flex h-[416px] w-full flex-col items-center px-[50px]">
      <div className="flex flex-col items-center">
        <p className="text-center font-inter text-[36px] font-semibold text-neutral-d_grey">
          Manage your entire community <br /> in a single system
        </p>
        <p className="mt-[8px] font-inter text-[16px] text-neutral-d_grey">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="mt-[16px] flex justify-between gap-[85px]">
        {communityData.map((data, id) => (
          <div
            key={id}
            className={`card${id} flex h-[284px] w-[299px]  flex-col items-center rounded-[8px] bg-white px-[28px] py-[24px] shadow-[0px_2px_4px_0px_#ABBED133] `}
          >
            <div className=" relative flex h-[41px] w-[81px] justify-center">
              <div className="h-[49px] w-[50px] rotate-180 rounded-bl-[5px] rounded-br-[10px] rounded-tl-[18px] rounded-tr-[5px] bg-tint-tint_5"></div>
              <Image
                src={`${data.img}.png`}
                width={48}
                height={48}
                alt=""
                quality={100}
                className="absolute bottom-0 left-0"
              />
            </div>

            <p className="mt-[16px] text-center font-inter text-[28px] font-bold text-neutral-d_grey">
              {data.judul}
            </p>
            <p className="mt-[8px] text-center font-inter text-[14px] text-neutral-d_grey">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
