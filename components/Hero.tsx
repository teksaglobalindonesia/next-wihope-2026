'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Hero() {
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
    <div className="mt-[84px] flex h-[599px] justify-center bg-neutral-silver">
      <div className="flex h-full w-[1152px] items-center justify-between">
        <div className="flex flex-col gap-[32px]">
          <div className="flex h-[152px] flex-col">
            <div className="font-inter text-[64px] font-semibold leading-[76px]">
              <p className='text-neutral-d_grey'>Lessons and insights</p>
              <p className='text-brand-primary'>from 8 years</p>
            </div>
          </div>
          <p className='text-[16px] font-inter text-neutral-grey'>
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button
            variant="primary"
            className="h-[52px] w-[128px] text-[16px]"
            loadingSize="h-[16px] w-[16px]"
            loading={loading === 'register'}
            onClick={() => {
              setLoading('register');
              startTransition(() => router.push('/test'));
            }}
          >
            Register
          </Button>
        </div>
        <img
          className="h-[407px] w-[391px]"
          src="./Illustration.png"
          alt="gambar"
        />
      </div>
    </div>
  );
}
