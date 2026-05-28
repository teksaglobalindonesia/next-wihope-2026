'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from './perButtonan/Button';
export default function Ribbon() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex h-[300px] flex-col items-center justify-center bg-neutral-silver font-inter">
      <p className="w-[887px] text-center text-[64px] font-semibold leading-[76px] text-neutral-black">
        Pellentesque suscipit fringilla libero eu.
      </p>
      <Button
        variant="primary"
        className="mt-[32px] h-[52px] w-[178px] text-[16px] font-medium"
        loadingSize="h-[16px] w-[16px]"
        loading={loading === 'getademo'}
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
        disabled={isPending}
        onClick={() => {
          setLoading('getademo');
          startTransition(() => router.push('/test'));
        }}
      >
        Get a Demo
      </Button>
    </div>
  );
}
