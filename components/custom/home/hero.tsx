"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useGSAP(() =>{
    gsap.from('.animated-group', {
      y: 50, opacity: 0, duration: 1, ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hero-container',
        // markers: true,
        start: "top 80%",
      }
    })
  }, {scope: container})

  return (
    <div ref={container} className="hero-container flex w-full items-center justify-center gap-[104px] bg-neutral-silver px-[144px] py-[96px]">
      <div className="animated-group flex h-[276px] w-[657px] flex-col items-start gap-8">
        <h2 className="text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
          Lessons and insights
          <span className="text-brand-primary"> from 8 years</span>
        </h2>

        <p className="text-neutral-grey">
          Where to grow your business as a photographer: site or social media?
        </p>

        <Button className="" variant="standardPrimary" size="medium" asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>

      <div className="animated-group">
        <Image
          src="/illustrations/code-workflow-illustration.png"
          width={391}
          height={407}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
