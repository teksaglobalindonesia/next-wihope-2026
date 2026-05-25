import Image from "next/image";

export default function Community() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold w-[542px]">Manage your entire community in a single system</span>
                    <span className="text-neutral-grey">Who is Nextcent suitable for?</span>
                </div>

                <div className="flex justify-between items-center px-[144px] w-full">
                    <div className="flex flex-col items-center text-center gap-2 py-6 px-8 w-[299px] shadow-[0px_2px_4px_0px_#ABBED133]">
                        <div className="flex flex-col items-center justify-center gap-4 w-[267px]">

                            <div className="relative flex items-center justify-center">
                                <div className="absolute top-[7px] left-[15px] -z-10 rotate-180 bg-tint-5 w-[50px] h-[49px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"></div>
                                
                                    <Image
                                        src="/icons/user-group.png"
                                        width={48}
                                        height={48}
                                        alt="Icon"
                                    />
                            </div>

                            <span className="text-[28px] leading-[36px] font-bold text-neutral-d-grey">Membership Organisations</span>
                        </div>

                        <div className="flex justify-between items-center w-[251px]">
                            <span className="text-sm text-neutral-grey">
                                Our membership management software provides full automation of membership renewals and payments
                            </span>
                        </div>
                        
                    </div>

                    <div className="flex flex-col items-center text-center gap-2 py-6 px-8 w-[299px] shadow-[0px_2px_4px_0px_#ABBED133]">
                        <div className="flex flex-col items-center justify-center gap-4 w-[267px]">

                            <div className="relative flex items-center justify-center">
                                <div className="absolute top-[7px] left-[15px] -z-10 rotate-180 bg-tint-5 w-[50px] h-[49px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"></div>
                                
                                    <Image
                                        src="/icons/buildings.png"
                                        width={48}
                                        height={48}
                                        alt="Icon"
                                    />
                            </div>

                            <span className="text-[28px] leading-[36px] font-bold text-neutral-d-grey">National Associations</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-neutral-grey">
                                Our membership management software provides full automation of membership renewals and payments
                            </span>
                        </div>
                        
                    </div>

                    <div className="flex flex-col items-center text-center gap-2 py-6 px-8 w-[299px] shadow-[0px_2px_4px_0px_#ABBED133]">
                        <div className="flex flex-col items-center justify-center gap-4 w-[267px]">

                            <div className="relative flex items-center justify-center">
                                <div className="absolute top-[7px] left-[15px] -z-10 rotate-180 bg-tint-5 w-[50px] h-[49px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"></div>
                                
                                    <Image
                                        src="/icons/three-hands.png"
                                        width={48}
                                        height={48}
                                        alt="Icon"
                                    />
                            </div>

                            <span className="text-[28px] leading-[36px] font-bold text-neutral-d-grey w-[231px]">Clubs And Groups</span>
                        </div>

                        <div className="flex justify-between items-center w-[251px]">
                            <span className="text-sm text-neutral-grey">
                                Our membership management software provides full automation of membership renewals and payments
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}