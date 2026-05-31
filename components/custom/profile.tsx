'use client';

import { useAuthStore } from '@/stores/use-auth-store';

export default function Profile() {
  const name = useAuthStore((state: any) => state.name);

  return (
    <div className="mt-[84px] flex w-full justify-center py-[24px]">
      <div className="flex h-[88px] w-full max-w-[1440px] items-center px-[144px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Welcome,
            <br />
            <span className="text-brand-primary">{name}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
