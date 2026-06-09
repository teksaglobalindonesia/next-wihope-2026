'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import GreenButton from '@/components/custom/green-button';


const UnseenSpending = () => {
  const handleLearnMore = () => {
    gsap.to('.unseen-image', {
      scale: 1.1,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.unseen-title', {
      x: 40,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.unseen-desc', {
      x: -40,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  return (
    <section className="unseen-section flex h-[433px] w-full max-w-[1440px] items-center justify-center gap-[32px] overflow-hidden">
      <Image
        src="/assets/unseen-spending.png"
        alt="Unseen Spending"
        width={442}
        height={433}
        className="unseen-image"
      />

      <div className="flex h-[268px] w-[661px] flex-col gap-[32px]">
        <div className="flex w-[601px] flex-col">
          <h2 className="unseen-title h-[88px] w-[601px] font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            The unseen of spending three <br />
            years at Pixelgrade
          </h2>

          <p className="unseen-desc mt-[16px] w-[601px] font-inter text-[14px] leading-[20px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>

        <div onClick={handleLearnMore}>
          <GreenButton>Learn More</GreenButton>
        </div>
      </div>
    </section>
  );
};

export default UnseenSpending;
