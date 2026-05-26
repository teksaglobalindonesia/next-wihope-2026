'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function HowToDesign() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleNavClick = (linkName: string, href: string) => {
    if (isPending) return;
    setLoading(linkName);
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div className="flex h-[433.4px] justify-center">
      <div className="flex h-[full] w-[1152px] items-center justify-between">
        <img
          className="h-full w-[441.53px]"
          src="/HowToDesign.png"
          alt="Illustration"
        />
        <div className="flex h-[308px] w-[661px] flex-col justify-between font-inter">
          <div className="flex h-[224px] w-[610px] flex-col justify-between">
            <p className="mb-[16px] text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
              How to design your site footer like we did
            </p>
            <p className="text-[14px] leading-[20px] text-neutral-grey w-full">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <Button
            variant="primary"
            className="h-[52px] w-[151px] text-[16px]"
            loadingSize="h-[16px] w-[16px]"
            loading={loading === 'learnMore'}
            onClick={() => {
              setLoading('learnMore');
              startTransition(() => router.push('/test'));
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
