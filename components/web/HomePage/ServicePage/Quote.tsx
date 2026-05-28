'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../perButtonan/Button';

export default function Quote() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex justify-center bg-neutral-silver">
      <div className="flex h-[433px] w-[1152px] items-center justify-between font-inter">
        <img
          className="h-[326px] w-[326px] rounded-[8px] object-cover shadow-[0px_8px_16px_0px_#ABBED166]"
          src="/tesla.jpg"
          alt="gambar"
        />
        <div className="flex h-[324px] w-[748px] flex-col justify-between">
          <p className="text-[16px] text-neutral-grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="flex h-[60px] flex-col justify-between">
            <p className="text-[20px] font-semibold leading-[28px] text-brand-primary">
              Tim Smith
            </p>
            <p className="text-[16px] text-neutral-l_grey">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex h-[48px] justify-between">
            <div className="flex h-fit w-fit gap-[41px]">
              <img
                className="h-[48px] w-[48px]"
                src="/Client1.png"
                alt="logo"
              />
              <img
                className="h-[48px] w-[48px]"
                src="/Client3.png"
                alt="logo"
              />
              <img
                className="h-[48px] w-[48px]"
                src="/Client2.png"
                alt="logo"
              />
              <img
                className="h-[48px] w-[48px]"
                src="/Client5.png"
                alt="logo"
              />
              <img
                className="h-[48px] w-[48px]"
                src="/Client6.png"
                alt="logo"
              />
              <img
                className="h-[48px] w-[48px]"
                src="/Client7.png"
                alt="logo"
              />
            </div>
            <Button
              variant="tertiary"
              className="h-full w-[223px] text-[20px] leading-[28px]"
              loadingSize="h-[16px] w-[16px]"
              loading={loading === 'learnMore'}
              disabled={isPending}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              }
              onClick={() => {
                setLoading('learnMore');
                startTransition(() => router.push('/test'));
              }}
            >
              Meet all customers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
