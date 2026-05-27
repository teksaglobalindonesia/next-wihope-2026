'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../perButtonan/Button';

export default function Service1() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex justify-center">
      <div className="flex h-[433px] w-[1152px] items-center justify-between font-inter">
        <div className="flex h-full w-[368px] items-center">
          <img
            className="h-[286px] w-full rounded-[8px]"
            src="/NewMarketing1.png"
            alt="gambar"
          />
        </div>
        <div className="flex h-[224px] w-[661px] flex-col justify-between">
          <div className='w-[601px]'>
            <p className="mb-[16px] text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
              Service 1
            </p>
            <p className="text-[14px] leading-[20px] text-neutral-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <Button
            variant="primary"
            className="h-[52px] w-[151px] text-[16px]"
            loadingSize="h-[16px] w-[16px]"
            loading={loading === 'learnMore'}
            disabled={isPending}
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
