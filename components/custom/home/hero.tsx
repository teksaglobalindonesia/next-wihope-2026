import Image from 'next/image';

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

                    <button className="rounded-[4px] bg-brand-primary px-8 py-[14px] text-neutral-white">
                        Register
                    </button>
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
