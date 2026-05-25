import Image from "next/image";

export default function OurClients() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">Our Clients</span>
                    <span className="text-neutral-grey">We have been working with some Fortune 500+ clients</span>
                </div>

                <div className="flex justify-between items-center w-[1152px] h-[98px]">
                    <Image 
                        src="/logos/logo-1.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-2.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-3.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-4.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-5.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-6.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                    <Image 
                        src="/logos/logo-7.png"
                        width={48}
                        height={48}
                        alt="Client Logo"
                    />
                </div>
            </div>
        </>
    )
}