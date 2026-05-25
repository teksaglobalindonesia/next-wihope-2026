'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import NavLink from './NavLink';
import Button from './Button';

const NAV_LINKS = [
  { name: 'home', label: 'Home', href: '/home' },
  { name: 'service', label: 'Service', href: '/service' },
  { name: 'feature', label: 'Feature', href: '/feature' },
  { name: 'product', label: 'Product', href: '/product' },
  { name: 'testimonial', label: 'Testimonial', href: '/testimonial' },
  { name: 'faq', label: 'FAQ', href: '/faq' }
];

export default function Header() {
  const router = useRouter();
  const [loadingNav, setLoadingNav] = useState<string | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<string | null>(null);
  const [isPendingNav, startTransitionNav] = useTransition();
  const [isPendingAuth, startTransitionAuth] = useTransition();

  const handleNavClick = (linkName: string, href: string) => {
    if (isPendingNav) return;
    setLoadingNav(linkName);
    startTransitionNav(() => {
      router.push(href);
    });
  };

  if (!isPendingNav && loadingNav !== null) setLoadingNav(null);
  if (!isPendingAuth && loadingAuth !== null) setLoadingAuth(null);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-[84px] w-full items-center justify-center bg-neutral-silver">
      <div className="flex w-[1215px] justify-between">
        <div className="flex items-center justify-center gap-[8px]">
          <img className="h-[24px] w-[35px]" src="/logo.png" alt="logo" />
          <p className="text-[28px] font-semibold text-brand-secondary">
            Nexcent
          </p>
        </div>
        <div className="flex items-center justify-center gap-[50px] font-inter">
          {NAV_LINKS.map(({ name, label, href }) => (
            <NavLink
              key={name}
              href={href}
              loading={loadingNav === name}
              disabled={isPendingNav && loadingNav !== name}
              onClick={() => handleNavClick(name, href)}
              active={loadingNav === name}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[14px]">
          <Button
            variant="tertiary"
            className="h-[40px] w-[77px] text-[14px]"
            loadingSize="h-[14px] w-[14px]"
            loading={loadingAuth === 'login'}
            disabled={isPendingAuth && loadingAuth !== 'login'}
            onClick={() => {
              setLoadingAuth('login');
              startTransitionAuth(() => router.push('/test'));
            }}
          >
            Login
          </Button>

          <Button
            variant="primary"
            className="h-[40px] w-[91px] text-[14px]"
            loadingSize="h-[14px] w-[14px]"
            loading={loadingAuth === 'signup'}
            disabled={isPendingAuth && loadingAuth !== 'signup'}
            onClick={() => {
              setLoadingAuth('signup');
              startTransitionAuth(() => router.push('/test'));
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
