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

                        <h1 className="text-[36px] font-semibold leading-[44px] text-neutral-white">
                            Nexcent
                        </h1>
                    </div>

                    <div className="flex flex-col items-start">
                        <p className="text-sm text-neutral-silver">Copyright © 2026 Nexcent ltd.</p>
                        <p className="text-sm text-neutral-silver">All rights reserved</p>
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
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-sm text-neutral-silver">About us</p>
                            <p className="text-sm text-neutral-silver">Blog</p>
                            <p className="text-sm text-neutral-silver">Contact us</p>
                            <p className="text-sm text-neutral-silver">Pricing</p>
                            <p className="text-sm text-neutral-silver">Testimonials</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[160px]">
                        <h3 className="text-neutral-white text-xl font-semibold">Support</h3>
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-sm text-neutral-silver">Help center</p>
                            <p className="text-sm text-neutral-silver">Terms of service</p>
                            <p className="text-sm text-neutral-silver">Legal</p>
                            <p className="text-sm text-neutral-silver">Privacy policy</p>
                            <p className="text-sm text-neutral-silver">Status</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6 w-[192px]">

                    </div>
                </div>
            </div>
        </>
    )
}