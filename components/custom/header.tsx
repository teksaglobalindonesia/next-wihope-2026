'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/use-auth-store';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NavLinks } from '@/lib/data-dummy';

export default function Header() {
  const {user, clearState} = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    clearState();
    router.push('/');
  }

  return (
    <>
      <header className="sticky top-0 z-50 flex h-[84px] w-full items-center justify-around bg-neutral-silver text-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/nexcent-logo.png"
            width={35}
            height={24}
            alt="Nexcent Logo"
          />
          <h1 className="text-[28px] font-semibold leading-[36px] text-brand-secondary">
            Nexcent
          </h1>
        </Link>

        <nav className="flex items-center gap-[50px]">
          {NavLinks.map((link) => (
            <Button key={link.id} variant="navLink" size="clear" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {isMounted && user.name ? (
          <nav className="flex items-center gap-[14px] text-sm">
            <Button
              className="px-5 py-[10px]"
              variant="standardTertiary"
              size="clear"
              asChild
            >
              <Link href="/profile">{user.name}</Link>
            </Button>

            <Button
              className="rounded-[6px] px-5 py-[10px]"
              variant="standardPrimary"
              size="clear"
              asChild
            >
              <button onClick={handleLogout}>Logout</button>
            </Button>
          </nav>
        ) : (
          <nav className="flex items-center gap-[14px] text-sm">
            <Button
              className="px-5 py-[10px]"
              variant="standardTertiary"
              size="clear"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              className="rounded-[6px] px-5 py-[10px]"
              variant="standardPrimary"
              size="clear"
              asChild
            >
              <Link href="/login">Sign up</Link>
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}
