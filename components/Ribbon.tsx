'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
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
          <img className="h-[16px] w-[16px]" src="/right1.png" alt="arrow" />
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
