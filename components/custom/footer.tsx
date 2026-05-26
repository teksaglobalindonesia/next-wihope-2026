import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="flex justify-between items-center bg-neutral-black py-16 px-[165px] gap-[125px]">
                <div className="flex flex-col items-start gap-[40px]">
                    <div className="flex items-center justify-start gap-2">
                        <Image
                            src="/logos/nexcent-logo-2.png"
                            width={43}
                            height={29}
                            alt="Nexcent Logo"
                        />

                        <span className="text-[36px] font-semibold leading-[44px] text-neutral-white">
                            Nexcent
                        </span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span className="text-sm text-neutral-silver">Copyright © 2026 Nexcent ltd.</span>
                        <span className="text-sm text-neutral-silver">All rights reserved</span>
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
                        <span className="text-neutral-white text-xl font-semibold">Company</span>
                        <div className="flex flex-col items-start gap-3">
                            <span className="text-sm text-neutral-silver">About us</span>
                            <span className="text-sm text-neutral-silver">Blog</span>
                            <span className="text-sm text-neutral-silver">Contact us</span>
                            <span className="text-sm text-neutral-silver">Pricing</span>
                            <span className="text-sm text-neutral-silver">Testimonials</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[160px]">
                        <span className="text-neutral-white text-xl font-semibold">Support</span>
                        <div className="flex flex-col items-start gap-3">
                            <span className="text-sm text-neutral-silver">Help center</span>
                            <span className="text-sm text-neutral-silver">Terms of service</span>
                            <span className="text-sm text-neutral-silver">Legal</span>
                            <span className="text-sm text-neutral-silver">Privacy policy</span>
                            <span className="text-sm text-neutral-silver">Status</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[192px]">

                    </div>
                </div>
            </div>
        </>
    )
}