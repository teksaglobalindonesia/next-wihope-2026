import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="flex w-full items-center justify-center gap-[104px] bg-neutral-silver px-[144px] py-[96px]">
                <div className="flex h-[276px] w-[657px] flex-col items-start gap-8">
                    <span className="text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
                        Lessons and insights
                        <span className="text-brand-primary"> from 8 years</span>
                    </span>

                    <span className="text-neutral-grey">
                        Where to grow your business as a photographer: site or
                        social media?
                    </span>

                    <Button className="" variant="standardPrimary" size="medium" asChild>
                        <Link href="/register">Register</Link>
                   </Button>
                </div>

                <div>
                    <Image
                        src="/illustrations/code-workflow-illustration.png" 
                        width={391}
                        height={407}
                        alt="Illustration"
                    />
                </div>
            </div>
        </>
    );
}
