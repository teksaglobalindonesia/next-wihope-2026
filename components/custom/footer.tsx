import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="flex justify-between items-center bg-neutral-black py-16 w-full px-[165px] gap-[125px]">
                <div className="flex flex-col items-start gap-[40px]">
                    <div className="flex items-center justify-start gap-2">
                        <Image
                            src="/logos/nexcent-logo-2.png"
                            width={43}
                            height={29}
                            alt="Nexcent Logo"
                        />

                        <h1 className="text-[36px] font-semibold leading-[44px] text-neutral-white">
                            Nexcent
                        </h1>
                    </div>

                    <div className="flex flex-col items-start text-sm text-neutral-silver gap-2">
                        <p>Copyright © 2026 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                        <Image
                            src="/icons/instagram.png"
                            width={32}
                            height={32}
                            alt="Instagram"
                        />

                        <Image
                            src="/icons/twitter.png"
                            width={32}
                            height={32}
                            alt="Twitter / X"
                        />

                        <Image
                            src="/icons/youtube.png"
                            width={32}
                            height={32}
                            alt="YouTube"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[30px]">
                    <div className="flex flex-col items-start gap-6 w-[160px]">
                        <h3 className="text-neutral-white text-xl font-semibold">Company</h3>
                        <div className="flex flex-col items-start gap-3 text-sm text-neutral-silver">
                            <Link href="/about">About us</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/contact">Contact us</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/testimonials">Testimonials</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[160px]">
                        <h3 className="text-neutral-white text-xl font-semibold">Support</h3>
                        <div className="flex flex-col items-start gap-3 text-sm text-neutral-silver">
                            <Link href="/about">Help center</Link>
                            <Link href="/tos">Terms of service</Link>
                            <Link href="/legal">Legal</Link>
                            <Link href="/policy">Privacy policy</Link>
                            <Link href="/status">Status</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[192px]">

                    </div>
                </div>
            </footer>
        </>
    )
}