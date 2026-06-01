'use client';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/use-auth-store';
import Button from './perButtonan/Button';

export default function LoginForm() {
  const name = useAuthStore((state) => state.name);
  const [inputName, setInputName] = useState('');
  const setName = useAuthStore((state) => state.setName);

  const handleSubmit = () => {
    setName(inputName);
    startTransition(() => router.push('/profile'));
  };

  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex justify-center font-inter">
      <div className="w-[1152px]">
        <div className="flex h-[245px] items-center">
          <div className="flex h-[197px] w-[661px] flex-col justify-between">
            <p className="text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
              Login
            </p>
            <p className="leading-[20px] text-neutral-grey">Enter your name</p>
            <input
              className="h-[45px] w-[400px] rounded-[6px] border-[1px] border-neutral-d_grey p-4"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <Button
              variant="primary"
              className="h-[40px] w-[88px] text-[14px] leading-[20px]"
              loadingSize="h-[16px] w-[16px]"
              loading={loading === 'submit'}
              disabled={isPending}
              onClick={() => {
                setLoading('submit');
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
