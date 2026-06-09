'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const communities = [
  {
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: "/community/member.png",
  },
  {
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: "/community/national.png",
  },
  {
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: "/community/clubs.png",
  },
];

export default function Community() {

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.community-card', {
    y: 20,
    rotation: 25,
    duration: 2,
    stagger: 0.5,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: '.community-card',
      start: 'top 80%',
    },
  });
}, []);

  return (
    <section className="community-section w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[144px] py-[40px]">
        
        <div className="w-full flex flex-col items-center">
          
          <div className="max-w-[650px] flex flex-col items-center">
            
            <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-neutral-d-grey text-center">
              Manage your entire community 
              <br />
              in a single system
            </h2>

            <p className="mt-2 font-inter font-normal text-[16px] leading-[24px] text-neutral-grey text-center">
              Who is Nextcent suitable for?
            </p>

          </div>

          <div className="w-full flex justify-between mt-16">
            {communities.map((item, index) => (
              <div
                key={index}
                className="community-card w-[299px] h-[260px] bg-neutral-white rounded-[8px] px-[32px] py-[24px] flex flex-col items-center gap-[8px] shadow-[0px_2px_4px_0px_#ABBED133]"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[65px] h-[56px] object-contain"
                />

                <h3 className="font-inter font-bold text-[28px] leading-[36px] text-neutral-d-grey text-center">
                  {item.title}
                </h3>

                <p className="font-inter font-normal text-[14px] leading-[20px] text-neutral-grey text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}