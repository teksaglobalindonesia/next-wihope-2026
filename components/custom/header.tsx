'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavLink from '../Function/navlink';
import Button from '../Function/button';
import { useAuthStore } from '@/stores/use-auth-store';

export default function Header() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null);

  const handleClick = (linkName: string) => {
    setLoadingLink(linkName);

    setTimeout(() => {
      setLoadingLink(null);
    }, 2000);
  };

  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const router = useRouter();

  const handleButtonClick = (buttonName: string, href: string) => {
    setLoadingButton(buttonName);

    router.push(href);
  };

  const { username, clearData } = useAuthStore();
  const handleLogout = () => {
    clearData();

    router.push('/');
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-[84px] w-full items-center justify-between bg-neutral-silver px-[50px]">
      <div className="flex items-center gap-[8px]">
        <img
          src="../Icon-images/Icon.png"
          alt="Logo"
          className="h-[24px] w-[35px]"
        />
        <p className="text-[28px] font-semibold text-brand-secondary">
          Nexcent
        </p>
      </div>

      <div className="flex h-[24px] items-center gap-[50px] font-inter text-[16px] font-medium">
        <NavLink
          href="/"
          onClick={() => handleClick('home')}
          active={loadingLink === 'home'}
          disabled={loadingLink !== null && loadingLink !== 'home'}
        >
          Home
        </NavLink>

        <NavLink
          href="/service"
          onClick={() => handleClick('service')}
          active={loadingLink === 'service'}
          disabled={loadingLink !== null && loadingLink !== 'service'}
        >
          Service
        </NavLink>

        <NavLink
          href="/"
          onClick={() => handleClick('feature')}
          active={loadingLink === 'feature'}
          disabled={loadingLink !== null && loadingLink !== 'feature'}
        >
          Feature
        </NavLink>

        <NavLink
          href="/"
          onClick={() => handleClick('product')}
          active={loadingLink === 'product'}
          disabled={loadingLink !== null && loadingLink !== 'product'}
        >
          Product
        </NavLink>

        <NavLink
          href="/"
          onClick={() => handleClick('testimonial')}
          active={loadingLink === 'testimonial'}
          disabled={loadingLink !== null && loadingLink !== 'testimonial'}
        >
          Testimonial
        </NavLink>

        <NavLink
          href="/"
          onClick={() => handleClick('faq')}
          active={loadingLink === 'faq'}
          disabled={loadingLink !== null && loadingLink !== 'faq'}
        >
          FAQ
        </NavLink>

        <NavLink
          href="/"
          onClick={() => handleClick('cart')}
          active={loadingLink === 'cart'}
          disabled={loadingLink !== null && loadingLink !== 'cart'}
        >
          Cart
        </NavLink>
      </div>

      <div className="flex h-[80px] w-[180px] items-center gap-[14px]">
        {!username ? (
          <>
            <Button
              variant="Tertiary"
              className="h-[40px] w-[77px] rounded-[6px] text-[14px]"
              loading={loadingButton === 'login'}
              disabled={loadingButton !== null && loadingButton !== 'login'}
              onClick={() => handleButtonClick('login', '/login')}
            >
              Login
            </Button>
            <Button
              className="h-[40px] w-[91px] rounded-[6px] text-[14px]"
              variant="Primary"
              loading={loadingButton === 'sign up'}
              disabled={loadingButton !== null && loadingButton !== 'sign up'}
              onClick={() => handleButtonClick('sign up', '/sign up')}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="Tertiary"
              className="h-[40px] w-[77px] rounded-[6px] text-[14px]"
              loading={loadingButton === 'profile'}
              disabled={loadingButton !== null && loadingButton !== 'profile'}
              onClick={() => handleButtonClick('profile', '/profile')}
              iconPosition='left'
              icon={<img src="/Icon-images/Sukuna.jpg" alt="" className="size-[30px] rounded-full"/>}
            >
              {username.slice(0,6)}
            </Button>
            <Button
              className="h-[40px] w-[91px] rounded-[6px] text-[14px] underline underline-offset-2 decoration-brand-primary"
              variant="Tertiary"
              loading={loadingButton === 'logout'}
              disabled={loadingButton !== null && loadingButton !== 'logout'}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
