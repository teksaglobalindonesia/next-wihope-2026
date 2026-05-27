'use client';

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from './perButtonan/Button';

export default function NewMarketing() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isPending && loading !== null) setLoading(null);
  }, [isPending]);

  return (
    <div className="flex h-[506px] justify-center">
      <div className="flex w-[1152px] flex-col items-center bg-neutral-white font-inter">
        <p className="mb-[8px] text-center text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
          Caring is the new marketing
        </p>
        <p className="w-[640px] text-center text-[16px] leading-[24px] text-neutral-grey">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className="mt-[16px] flex h-[366px] w-[1152px] justify-between">
          <div className="relative flex h-[366px] w-[368px] flex-col">
            <img
              className="h-[286px] w-full rounded-[8px]"
              src="/NewMarketing1.png"
              alt="gambar"
            />
            <div className="absolute bottom-0 left-1/2 flex h-[176px] w-[317px] -translate-x-1/2 flex-col items-center rounded-[8px] bg-neutral-silver py-[16px] shadow-[0px_8px_16px_#ABBED166]">
              <p className="w-[300px] text-center text-[20px] font-semibold leading-[28px] text-neutral-grey">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <Button
                variant="tertiary"
                className="mt-[16px] h-[44px] w-[285px] text-[20px] font-semibold"
                loadingSize="h-[24px] w-[24px]"
                loading={loading === 'readmore1'}
                disabled={isPending && loading !== 'readmore1'}
                icon={
                  <img
                    className="h-[24px] w-[24px]"
                    src="/right.png"
                    alt="arrow"
                  />
                }
                onClick={async () => {
                  setLoading('readmore1');
                  await new Promise<void>((resolve) =>
                    startTransition(async () => {
                      await router.push('/test');
                      resolve();
                    })
                  );
                }}
              >
                Readmore
              </Button>
            </div>
          </div>
          <div className="relative flex h-[366px] w-[368px] flex-col">
            <img
              className="h-[286px] w-full rounded-[8px]"
              src="/NewMarketing2.png"
              alt="gambar"
            />
            <div className="absolute bottom-0 left-1/2 flex h-[176px] w-[317px] -translate-x-1/2 flex-col items-center rounded-[8px] bg-neutral-silver py-[16px] shadow-[0px_8px_16px_#ABBED166]">
              <p className="w-[300px] text-center text-[20px] font-semibold leading-[28px] text-neutral-grey">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <Button
                variant="tertiary"
                className="mt-[16px] h-[44px] w-[285px] text-[20px] font-semibold"
                loadingSize="h-[24px] w-[24px]"
                loading={loading === 'readmore2'}
                disabled={isPending && loading !== 'readmore2'}
                icon={
                  <img
                    className="h-[24px] w-[24px]"
                    src="/right.png"
                    alt="arrow"
                  />
                }
                onClick={async () => {
                  setLoading('readmore2');
                  await new Promise<void>((resolve) =>
                    startTransition(async () => {
                      await router.push('/test');
                      resolve();
                    })
                  );
                }}
              >
                Readmore
              </Button>
            </div>
          </div>
          <div className="relative flex h-[366px] w-[368px] flex-col">
            <img
              className="h-[286px] w-full rounded-[8px]"
              src="/NewMarketing3.png"
              alt="gambar"
            />
            <div className="absolute bottom-0 left-1/2 flex h-[176px] w-[317px] -translate-x-1/2 flex-col items-center rounded-[8px] bg-neutral-silver py-[16px] shadow-[0px_8px_16px_#ABBED166]">
              <p className="w-[290px] text-center text-[20px] font-semibold leading-[28px] text-neutral-grey">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <Button
                variant="tertiary"
                className="mt-[16px] h-[44px] w-[285px] text-[20px] font-semibold"
                loadingSize="h-[24px] w-[24px]"
                loading={loading === 'readmore3'}
                disabled={isPending && loading !== 'readmore3'}
                icon={
                  <img
                    className="h-[24px] w-[24px]"
                    src="/right.png"
                    alt="arrow"
                  />
                }
                onClick={async () => {
                  setLoading('readmore3');
                  await new Promise<void>((resolve) =>
                    startTransition(async () => {
                      await router.push('/test');
                      resolve();
                    })
                  );
                }}
              >
                Readmore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
