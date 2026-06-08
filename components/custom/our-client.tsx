'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Client() {
  const Logo = [
    '/Logo-images/Logo (1).png',
    '/Logo-images/Logo (2).png',
    '/Logo-images/Logo (3).png',
    '/Logo-images/Logo (4).png',
    '/Logo-images/Logo (5).png',
    '/Logo-images/Logo (6).png',
    '/Logo-images/Logo (7).png'
  ];

  

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
    trigger: '.box',
    start: 'top -40%',
    end: 'top 20%',
    toggleActions: 'play none none none',
  }
});

    tl.from('.judul', { y: 100, opacity: 0, duration: 1 })
      .from('.text', { y: 100, opacity: 0, duration: 1 })
      .from('.icon0', {scale:0, duration:0.5})
      .from('.icon1', {scale:0, duration:0.5})
      .from('.icon2', {scale:0, duration:0.5})
      .from('.icon3', {scale:0, duration:0.5})
      .from('.icon4', {scale:0, duration:0.5})
      .from('.icon5', {scale:0, duration:0.5})
      .from('.icon6', {scale:0, duration:0.5})
  }, []);

 

  return (
    <div className="h-[270] w-full bg-white py-[40px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="judul font-inter text-[36px] font-semibold text-neutral-d_grey ">
            Our Client
          </p>
          <p className="text font-inter text-[16px] text-neutral-d_grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex gap-[96px] px-[50px] py-[41px] ">
          {Logo.map((png, id) => (
            <div key={id} className={`icon${id}`}>
              <Image
                src={`${png}`}
                alt=""
                width={48}
                height={48}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
