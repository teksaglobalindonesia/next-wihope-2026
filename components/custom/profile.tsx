'use client';

import { useAuthStore } from '@/stores/use-auth-store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../Function/button';

export default function Profile() {
  const { name, email, telp, username, password, clearData } = useAuthStore();
  const router = useRouter();

  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string, href: string) => {
    setLoadingButton(buttonName);

    router.push(href);
  };

  const handleLogout = () => {
    clearData();

    router.push('/');
  };
  return (
    <div className="flex h-[600px] w-full items-center justify-center bg-gray-50 pt-[86px] font-inter">

      <div className="relative h-fit w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="h-[150px] bg-gradient-to-br from-[#5b0000] via-[#0f0f0f] to-[#8c1e16]"></div>
        <div className="absolute left-1/2 top-[64px] -translate-x-1/2">
          <div className="relative flex justify-center">
            <img
              src="/Icon-images/Sukuna.jpg"
              alt="sukuna"
              className="size-[150px] rounded-full border-4 border-white"
            />
            <div className="absolute bottom-0 right-0 h-[30px] w-[80px] rounded-full border-2 border-white bg-green-400 pt-[2px] text-center font-semibold text-white">
              • Online
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex flex-col gap-2 p-[20px]">
          <div className="flex justify-center gap-2 font-serif font-medium">
            <p className="font-medium ">
              {name.length > 14 ? name.slice(0, 14) + '...' : name}
            </p>
            <p>-</p>
            <h2 className="bg-gradient-to-r from-[#8c1e16] to-[#1f0100] bg-clip-text text-[17px] font-semibold text-transparent ">
              {username.length > 14 ? username.slice(0, 14) + '...' : username}
            </h2>
          </div>
          <p className="h-[30px] w-[360px] max-w-[360px] truncate rounded-lg border border-black pl-[8px] text-center font-light pt-[1px]">
            {email}
          </p>
          <div className="flex h-[20px] w-[360px] justify-between mt-[10px]">
            <p className="h-[20px] w-[160px] text-[15px]">NO TELEPON:</p>
            <p className="h-[20px] w-[160px] text-[15px]">PASSWORD:</p>
          </div>
          <div className="flex h-[40px] w-[360px] justify-between">
            <p className="h-[30px] w-[160px] rounded-lg border border-black pl-[8px] font-light pt-[2px]">
              {telp}
            </p>
            <p className="h-[30px] w-[160px] max-w-[160px] truncate rounded-lg border border-black pl-[8px] font-light pt-[1px]">
              {'•'.repeat(password.length)}
            </p>
          </div>
        </div>

        <div className="mb-[20px] flex justify-center gap-3">
          <Button
            variant="Secondary"
            className="h-[40px] w-[100px] rounded-lg bg-white text-center font-semibold transition duration-500 ease-in-out"
            loading={loadingButton === 'logout'}
            disabled={loadingButton !== null && loadingButton !== 'logout'}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
