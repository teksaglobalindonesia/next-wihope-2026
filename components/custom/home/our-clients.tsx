import Image from "next/image";
import { ClientIcons } from "@/lib/data-dummy"

export default function OurClients() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">Our Clients</span>
                    <span className="text-neutral-grey">We have been working with some Fortune 500+ clients</span>
                </div>

                <div className="flex justify-between items-center w-[1152px] h-[98px]">
                    { ClientIcons.map((icon) => (
                        <Image
                            key={icon.id}
                            src={icon.src}
                            width={48}
                            height={48}
                            alt={icon.alt}
                        />
                    )) }
                    
                </div>
            </div>
        </>
    )
}