'use client';

import { useAuthStore } from '@/stores/use-auth-store';

export default function Profile() {
  const name = useAuthStore((state) => state.name);
  return (
    <div className="flex justify-center font-inter">
      <div className="w-[1152px]">
        <div className="flex h-[245px] items-center">
          <div className="flex h-[197px] w-[661px] flex-col justify-between">
            <p className="text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
              Welcome, {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
