"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { NavLinks } from '@/lib/data-dummy';

export default function Header() {
    return (
        <>
            <nav className="fixed left-0 top-0 z-50 flex h-[84px] w-full items-center justify-around bg-neutral-silver text-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logos/nexcent-logo.png"
                        width={35}
                        height={24}
                        alt="Nexcent Logo"
                    />
                    <span className="text-[28px] font-semibold leading-[36px] text-brand-secondary">
                        Nexcent
                    </span>
                </Link>

                <div className="flex items-center gap-[50px]">
                    { NavLinks.map((link) => (
                        <Button key={link.id} variant="navLink" size="clear" asChild>
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    )) }
                </div>

                <div className="flex items-center gap-[14px] text-sm">
                    <Button className="px-5 py-[10px]" variant="standardTertiary" size="clear" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button className="rounded-[6px] px-5 py-[10px]" variant="standardPrimary" size="clear" asChild>
                        <Link href="/register">Sign up</Link>
                    </Button>
                </div>
            </nav>
        </>
    );
}