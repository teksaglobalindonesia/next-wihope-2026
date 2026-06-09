'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurClients() {
  const clients = [
    '/clients/client1.png',
    '/clients/client2.png',
    '/clients/client3.png',
    '/clients/client4.png',
    '/clients/client5.png',
    '/clients/client6.png',
    '/clients/client7.png'
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.clients-section',
        start: 'top 80%'
      }
    });

    tl.from('.clients-title', {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    })
      .from('.clients-desc', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.client-logo', {
        scale: 0,
        opacity: 0,
        stagger: 0.6,
        duration: 1,
        ease: 'back.out(2)'
      });
  }, []);

  return (
    <section className="clients-section w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-[144px] py-[40px]">
        <div className="flex w-full flex-col items-center">
          <h2 className="clients-title text-center font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Our Clients
          </h2>

          <p className="clients-desc mt-2 text-center font-inter text-[16px] font-normal leading-[24px] text-neutral-grey">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="mt-10 flex w-full items-center justify-between">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client}
                alt={`client-${index}`}
                className="client-logo h-[48px] w-[48px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
