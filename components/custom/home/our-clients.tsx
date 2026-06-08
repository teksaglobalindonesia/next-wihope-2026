"use client"

import Image from 'next/image';
import { ClientIcons } from '@/lib/data-dummy';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurClients() {
  const container = useRef(null);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-clients-container',
      // markers: true,
      start: "top 80%",
    }
  });

  useGSAP(() => {
    tl.fromTo('.animated-text-1', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' })
      .fromTo('.animated-text-2', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' })
      .fromTo('.animated-icon',  { scale: 0 }, { scale: 1, duration: 1, ease: 'power2.out', stagger: 0.3}) // gives *s sequence gap between each element
  }, {scope: container});

  return (
    <div ref={container} className="our-clients-container flex w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="animated-text-1 text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
          Our Clients
        </h2>
        <p className="animated-text-2 text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex h-[98px] w-[1152px] items-center justify-between">
        {ClientIcons.map((icon) => (
          <Image
            className="animated-icon object-contain"
            key={icon.id}
            src={icon.src}
            width={48}
            height={48}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  );
}
