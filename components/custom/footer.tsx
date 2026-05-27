'use client';

import { useState } from 'react';
import NavLink from '../Function/navlink';

import Image from 'next/image';
import FooterIcon from '@/lib/footer-icon';

export default function Footer() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null);

  const handleClick = (linkName: string) => {
    setLoadingLink(linkName);

    setTimeout(() => {
      setLoadingLink(null);
    }, 2000);
  };
  return (
    <div className="flex h-[328px] w-full items-center justify-between gap-[125px] bg-neutral-black px-[125px]">


      <div className="mb-[30px] flex h-[190px] w-[350px] flex-col gap-[40px]">
        <div className="flex h-[55px] items-center gap-[8px]">
          <Image
            src="/Icon-images/Icon-footer.png"
            alt=""
            width={43}
            height={30}
            quality={100}
          />
          <p className="h-[48px] text-[34px] font-semibold text-white">
            Nexcent
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="font-inter text-[14px] text-neutral-silver">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="font-inter text-[14px] text-neutral-silver">
            All rights reserved
          </p>
        </div>

        <div className="flex gap-[16px]">
          {FooterIcon.map((img, id) => (
            <Image
              src={`${img}.png`}
              width={32}
              height={32}
              quality={100}
              alt=""
              key={id}
            />
          ))}
        </div>
      </div>


      <div className="flex h-[200px] w-[635px]">

        <div className="flex flex-col gap-[24px] ">
          <p className="font-inter text-[20px] font-semibold text-white">
            Company
          </p>
          <div className="flex size-[14px] w-[200px] flex-col gap-[10px] font-inter font-thin text-neutral-silver">

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('about us')}
              active={loadingLink === 'about us'}
              disabled={loadingLink !== null && loadingLink !== 'about us'}
            >
              About us
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Blog')}
              active={loadingLink === 'Blog'}
              disabled={loadingLink !== null && loadingLink !== 'Blog'}
            >
              Blog
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Contact us')}
              active={loadingLink === 'Contact us'}
              disabled={loadingLink !== null && loadingLink !== 'Contact us'}
            >
              Contact us
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Pricing')}
              active={loadingLink === 'Pricing'}
              disabled={loadingLink !== null && loadingLink !== 'Pricing'}
            >
              Pricing
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Testimonials')}
              active={loadingLink === 'Testimonials'}
              disabled={loadingLink !== null && loadingLink !== 'Testimonials'}
            >
              Testimonials
            </NavLink>
          </div>
        </div>


        <div className="flex flex-col gap-[24px] ">

          <p className="font-inter text-[20px] font-semibold text-white">
            Support
          </p>
          <div className="flex size-[14px] w-[200px] flex-col gap-[10px] font-inter font-thin text-neutral-silver">

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Help center')}
              active={loadingLink === 'Help center'}
              disabled={loadingLink !== null && loadingLink !== 'Help center'}
            >
              Help center
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Terms of service')}
              active={loadingLink === 'Terms of service'}
              disabled={loadingLink !== null && loadingLink !== 'Terms of service'}
            >
              Terms of service
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Legal')}
              active={loadingLink === 'Legal'}
              disabled={loadingLink !== null && loadingLink !== 'Legal'}
            >
              Legal
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Privacy policy')}
              active={loadingLink === 'Privacy policy'}
              disabled={loadingLink !== null && loadingLink !== 'Privacy policy'}
            >
              Privacy policy
            </NavLink>

            <NavLink
              href="/test"
              variant="Footer"
              onClick={() => handleClick('Status')}
              active={loadingLink === 'Status'}
              disabled={loadingLink !== null && loadingLink !== 'Status'}
            >
              Status
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
