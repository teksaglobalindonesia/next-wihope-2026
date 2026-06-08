'use client';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const Logo = [
    '/Logo (14).svg',
    '/Logo (10).svg',
    '/Logo (9).svg',
    '/Logo (11).svg',
    '/Logo (12).svg',
    '/Logo (13).svg',
    '/Logo (9).svg'
  ];

  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 90%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
      // markers: true,
    },
  });
    
    tl.from(h2Ref.current, { duration: 1, opacity: 0, y: 100 })
    .from(pRef.current,{ duration: 1, opacity: 0, y:100},'-=0.5')
    .from('.client-logo', { scale: 0, duration: 1, stagger: 0.5, opacity: 0 });
  }, []);

  return (
    <div className="w-full bg-white">
      <div ref={sectionRef} className="mx-auto mt-10 flex h-[190px] max-w-[1440px] flex-col items-center gap-[16px] px-[144px]">
        <div className="flex h-[76px] w-[1110px] flex-col gap-[8px] text-center">
          <h2 ref={h2Ref} className="font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Our Clients
          </h2>

          <p ref={pRef} className="font-inter text-[16px] leading-[24px] text-neutral-grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="flex h-[98px] w-[1152px] items-center justify-between ">
          {Logo.map((logo, index) => (
            <img
              key={index}
              alt={`Client logo ${index + 1}`}
              src={logo}
              width={48}
              height={48}
              className=" client-logo "
            />
          ))}
        </div>
      </div>
    </div>
  );
}