'use client';

import { useAuthStore } from '@/stores/use-auth-store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '../Function/button';

export default function Login() {
  const { setName, setTelp, setEmail, setUser, setPass } = useAuthStore();

  const [name,localName] = useState('');
  const [telp,localTelp] = useState('');
  const [email,localEmail] = useState('');
  const [user,localUser] = useState('');
  const [pass,localPass] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setName(name)
    setTelp(telp)
    setEmail(email)
    setUser(user)
    setPass(pass)

    handleButtonClick('submit', '/profile');
  };

  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const router = useRouter();

  const handleButtonClick = (buttonName: string, href: string) => {
    setLoadingButton(buttonName);

    router.push(href);
  };
  return (
    <div className="flex h-[600px] w-full items-center justify-center bg-gray-50 pt-[86px] font-inter">
      <div className="flex h-[420px] w-[400px] flex-col items-center rounded-xl bg-white shadow-lg overflow-hidden">
        <div className="w-full h-[90px] bg-gradient-to-r from-shade-shade_4 via-shade-shade_2 to-tint-tint_1 top-0 flex justify-center items-center">
        <p className="text-[25px] font-bold leading-[40px] text-white">Login Form</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[15px] flex w-[370px] flex-col gap-[5px]"
        >
          <div className="flex gap-[10px]">
          <div className="flex flex-col">
          <label className="text-shade-shade_4">NAMA LENGKAP</label>
          <input
            required
            value={name}
            maxLength={50}
            placeholder="Nama lengkap"
            type="text"
            className="h-[40px] rounded-lg border border-black p-[5px] w-[180px]"
            onChange={(e) => localName(e.target.value)}
          />
          </div>
           <div className="flex flex-col">
           <label className="text-shade-shade_4">NO TELEPON</label>
           <input
            required
            value={telp}
            maxLength={15}
            placeholder="08xxxxxxxxx"
            type="tel"
            className="h-[40px] rounded-lg border border-black p-[5px] w-[180px]"
            onChange={(e) => localTelp(e.target.value.replace(/\D/g, ''))}
          />
         </div>
          </div>

          <label className="mt-[7px] text-shade-shade_4">EMAIL</label>
           <input
            required
            value={email}
            maxLength={100}
            placeholder="contoh123@gmail.com"
            type="email"
            className="h-[40px] rounded-lg border border-black p-[5px]"
            onChange={(e) => localEmail(e.target.value)}
          />

          <div className="flex gap-[10px] mt-[7px]">
          <div className="flex flex-col">
          <label className="text-shade-shade_4">USERNAME</label>
          <input
            required
            value={user}
            maxLength={20}
            placeholder="Username"
            type="text"
            className="h-[40px] rounded-lg border border-black p-[5px] w-[180px]"
            onChange={(e) => localUser(e.target.value)}
          />
          </div>
           <div className="flex flex-col">
           <label className="text-shade-shade_4">PASSWORD</label>
           <input
            required
            value={pass}
            maxLength={32}
            placeholder="•••••••••"
            type="password"
            className="h-[40px] rounded-lg border border-black p-[5px] w-[180px]"
            onChange={(e) => localPass(e.target.value)}
          />
         </div>
          </div>

          <div className="w-full h-[70px] flex justify-center items-center">
          <Button
            type="submit"
            className=" h-[40px] w-[370px] rounded-[6px] text-[14px] "
            variant="Secondary"
            loading={loadingButton === 'submit'}
            disabled={loadingButton !== null && loadingButton !== 'submit'}
          >
            Submit
          </Button>
          </div>

        </form>
      </div>
    </div>
  );
}
