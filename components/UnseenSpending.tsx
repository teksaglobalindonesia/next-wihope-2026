'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function UnseenSpending() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex h-[433px] justify-center">
      <div className="flex h-[full] w-[1152px] items-center justify-between">
        <img
          className="h-full w-[442px]"
          src="/UnseenSpending.png"
          alt="Illustration"
        />
        <div className="flex flex-col w-[661px] h-[268px] font-inter justify-between">
          <div className='flex flex-col w-[601px] h-[184px] justify-between'>
          <p className="mb-[8px] text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
            The unseen of spending three years at Pixelgrade
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
