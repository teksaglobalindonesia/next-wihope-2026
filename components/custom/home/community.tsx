'use client';

import Image from 'next/image';
import { SuitableCommunities } from '@/lib/data-dummy';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  const container = useRef(null);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.community-container',
      // markers: true,
      start: "top 60%",
    }
  });

  useGSAP(() => {
    tl.fromTo('.animated-group', { rotate: 30 }, { rotate: 0, duration: 1, ease: 'power2.out', stagger: 0.5})
  }, {scope: container})

  return (
    <div ref={container} className="community-container flex w-full flex-col items-center justify-center gap-4 bg-neutral-white">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="w-[542px] text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutral-grey">Who is Nextcent suitable for?</p>
      </div>

      <div className="flex w-full items-start justify-between px-[144px]">
        {SuitableCommunities.map((community) => (
          <div
            key={community.id}
            className="animated-group flex w-[299px] h-[280px] flex-col items-center gap-2 px-8 py-6 text-center shadow-md"
          >
            <div className="flex w-[267px] flex-col items-center justify-center gap-4">
              <div className="relative flex items-center justify-center">
                <div className="absolute left-[15px] top-[7px] -z-10 h-[49px] w-[50px] rotate-180 rounded-bl-[5px] rounded-br-[10px] rounded-tl-[18px] rounded-tr-[5px] bg-tint-5"></div>

                <Image src={community.icon} width={48} height={48} alt="Icon" />
              </div>

              <h3 className="text-[28px] font-bold leading-[36px] text-neutral-d-grey">
                {community.title}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-grey">
                {community.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
