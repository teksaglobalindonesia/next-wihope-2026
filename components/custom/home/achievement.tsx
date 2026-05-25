import Image from "next/image";

export default function Achievement() {
    return (
        <>
            <div className="flex items-center justify-between bg-neutral-silver w-full px-[144px] py-[64px]">
                <div className="flex flex-col items-start gap-2 w-[540px]">
                    <span className="text-[36px] leading-[44px] font-semibold text-neutral-d-grey w-[408px]">
                        Helping a local 
                        <span className="text-brand-primary"> business reinvent itself</span>
                    </span>

                    <span className="text-[#18191F]">We reached here with our hard work and dedication</span>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex gap-[30px]">
                        <div className="flex justify-start items-center gap-4 w-[255px]">
                            <Image
                                src="/icons/users.png"
                                width={48}
                                height={48}
                                alt="Icon"
                            />

                            <div className="flex flex-col">
                                <span className="text-neutral-d-grey text-[28px] leading-[36px] font-bold">2,245,341</span>
                                <span className="text-neutral-grey">Members</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-[255px]">
                            <Image
                                src="/icons/three-hands.png"
                                width={48}
                                height={48}
                                alt="Icon"
                            />

                            <div className="flex flex-col">
                                <span className="text-neutral-d-grey text-[28px] leading-[36px] font-bold">46,328</span>
                                <span className="text-neutral-grey">Clubs</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-[30px]">
                        <div className="flex justify-start items-center gap-4 w-[255px]">
                            <Image
                                src="/icons/finger-tap.png"
                                width={48}
                                height={48}
                                alt="Icon"
                            />

                            <div className="flex flex-col">
                                <span className="text-neutral-d-grey text-[28px] leading-[36px] font-bold">828,867</span>
                                <span className="text-neutral-grey">Event Bookings</span>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-[255px]">
                            <Image
                                src="/icons/credit-card.png"
                                width={48}
                                height={48}
                                alt="Icon"
                            />

                            <div className="flex flex-col">
                                <span className="text-neutral-d-grey text-[28px] leading-[36px] font-bold">1,926,436</span>
                                <span className="text-neutral-grey">Payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}