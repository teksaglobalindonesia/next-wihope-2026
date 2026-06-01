'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from '../perButtonan/Link';
import Button from '../perButtonan/Button';
import { useAuthStore } from '@/stores/use-auth-store';

const LINKS = [
  { name: 'home', label: 'Home', href: '/' },
  { name: 'service', label: 'Service', href: '/service' },
  { name: 'feature', label: 'Feature', href: '/feature' },
  { name: 'product', label: 'Product', href: '/product' },
  { name: 'testimonial', label: 'Testimonial', href: '/testimonial' },
  { name: 'faq', label: 'FAQ', href: '/faq' }
];

export default function Header() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isPendingAuth, startTransitionAuth] = useTransition();
  const name = useAuthStore((state) => state.name);
  const clearName = useAuthStore((state) => state.clearName);

  const handleClick = (linkName: string, href: string) => {
    if (isPending) return;
    setLoading(linkName);
    startTransition(() => {
      router.push(href);
    });
  };

  useEffect(() => {
    if (!isPending && loading !== null) {
      setLoading(null);
    }
  }, [isPending, loading]);

  useEffect(() => {
    if (!isPendingAuth && loadingAuth !== null) {
      setLoadingAuth(null);
    }
  }, [isPendingAuth, loadingAuth]);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-[84px] w-full items-center justify-center bg-neutral-silver font-inter">
      <div className="flex w-[1215px] justify-between">
        <div className="flex items-center justify-center gap-[8px]">
          <img className="h-[24px] w-[35px]" src="/logo.png" alt="logo" />
          <p className="text-[28px] font-semibold text-brand-secondary">
            Nexcent
          </p>
        </div>
        <div className="flex items-center justify-center gap-[50px] font-inter">
          {LINKS.map(({ name, label, href }) => (
            <Link
              key={name}
              href={href}
              disabled={isPending && loading !== name}
              onClick={() => handleClick(name, href)}
              active={loading === name}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[14px]">
          {name ? (
            <>
              <Button
                variant="tertiary"
                className="mr-[20px] flex h-fit w-fit items-center justify-center text-[14px] font-bold leading-[20px] text-brand-primary underline underline-offset-[3.2px] [text-decoration-skip-ink:none]"
                loadingSize="h-[16px] w-[16px]"
                loading={loadingAuth === 'profile'}
                disabled={isPendingAuth}
                onClick={() => {
                  setLoadingAuth('profile');
                  startTransitionAuth(() => router.push('/profile'));
                }}
              >
                {name}
              </Button>

              <Button
                variant="tertiary"
                className="h-fit w-fit text-[14px] font-medium leading-[20px] text-neutral-black underline underline-offset-[3.2px] [text-decoration-skip-ink:none]"
                loadingSize="h-[16px] w-[16px]"
                loading={loadingAuth === 'logout'}
                disabled={isPendingAuth}
                onClick={() => {
                  if (!confirm('Yakin ingin logout?')) return;

                  setLoadingAuth('logout');

                  startTransitionAuth(() => {
                    clearName();
                    router.push('/');
                  });
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="tertiary"
                className="h-[40px] w-[77px] text-[14px]"
                loadingSize="h-[16px] w-[16px]"
                loading={loadingAuth === 'login'}
                disabled={isPendingAuth}
                onClick={() => {
                  setLoadingAuth('login');
                  startTransitionAuth(() => router.push('/login'));
                }}
              >
                Login
              </Button>

              <Button
                variant="primary"
                className="h-[40px] w-[91px] text-[14px]"
                loadingSize="h-[16px] w-[16px]"
                loading={loadingAuth === 'signup'}
                disabled={isPendingAuth}
                onClick={() => {
                  setLoadingAuth('signup');
                  startTransitionAuth(() => router.push('/signup'));
                }}
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
