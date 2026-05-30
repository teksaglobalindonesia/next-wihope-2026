import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HowToDesign() {
    return (
        <>
            <div className="flex justify-center items-center px-[144px] gap-[49px] w-full bg-neutral-white">
                <div className="flex items-center">
                    <Image
                        src="/illustrations/mobile-login-illustration-2.png"
                        width={441}
                        height={433}
                        alt="Illustration"
                    />
                </div>

                <div className="flex flex-col items-start gap-8 w-[661px]">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">How to design your site footer like we did</h2>
                        <p className="text-neutral-grey text-sm">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, 
                            at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. 
                            Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. 
                            Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. 
                            Donec consectetur faucibus ipsum id gravida.
                        </p>
                    </div>

                    <Button className="" variant="standardPrimary" size="medium" asChild>
                        <Link href="/register">Learn more</Link>
                   </Button>
                </div>
            </div>
        </>
    )
}