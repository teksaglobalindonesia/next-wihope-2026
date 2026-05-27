'use client';

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from './Link';

const LINKS = [
  { name: 'About us', label: 'About us', href: '/test' },
  { name: 'Blog', label: 'Blog', href: '/test' },
  { name: 'Contact us', label: 'Contact us', href: '/test' },
  { name: 'Pricing', label: 'Pricing', href: '/test' },
  { name: 'Testimonials', label: 'Testimonials', href: '/test' }
];
const LINKS1 = [
  { name: 'Help centers', label: 'Help center', href: '/test' },
  { name: 'Terms of service', label: 'Terms of service', href: '/test' },
  { name: 'Legal', label: 'Legal', href: '/test' },
  { name: 'Privacy policy', label: 'Privacy policy', href: '/test' },
  { name: 'Status', label: 'Status', href: '/test' }
];
export default function Footer() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

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

  return (
    <div className="flex h-[328px] justify-center bg-neutral-black font-inter">
      <div className="flex w-[1152px] items-center justify-between">
        <div className="flex h-[189.67173767089844px] w-[350px] flex-col justify-between">
          <div className="flex w-[191px] items-center justify-between">
            <img
              className="h-[29.671743392944336px] w-[43.27129364013672px]"
              src="/logo1.png"
              alt="logo"
            />
            <p className="text-[34px] font-semibold text-white">Nexcent</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="leading-[24px] text-neutral-silver">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="leading-[24px] text-neutral-silver">
              All rights reserved
            </p>
          </div>
          <div className="flex h-[32px] w-[128px] justify-between">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-[32px] w-[32px]"
                src="/ig.png"
                alt="Instagram"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img className="h-[32px] w-[32px]" src="/x.png" alt="X" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-[32px] w-[32px]"
                src="/youtube.png"
                alt="Youtube"
              />
            </a>
          </div>
        </div>
        <div className="flex h-[200px] w-[635px]">
          <div className="mr-[30px] flex h-full w-[160px] flex-col justify-between">
            <p className="text-[20px] font-semibold leading-[28px] text-white">
              Company
            </p>

            <div className="flex h-[148px] flex-col justify-between">
              {LINKS.map(({ name, label, href }) => (
                <Link
                  className="w-fit leading-[20px] text-neutral-silver"
                  activeColor="text-gray-100"
                  key={name}
                  href={href}
                  onClick={() => handleClick(name, href)}
                  active={loading === name}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex h-full w-[160px] flex-col justify-between">
            <p className="text-[20px] font-semibold leading-[28px] text-white">
              Support
            </p>

            <div className="flex h-[148px] flex-col justify-between">
              {LINKS1.map(({ name, label, href }) => (
                <Link
                  className="w-fit leading-[20px] text-neutral-silver"
                  activeColor="text-gray-100"
                  key={name}
                  href={href}
                  onClick={() => handleClick(name, href)}
                  active={loading === name}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
