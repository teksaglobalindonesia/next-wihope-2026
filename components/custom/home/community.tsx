import Image from "next/image";
import { SuitableCommunities } from "@/lib/data-dummy";

export default function Community() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full bg-neutral-white">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold w-[542px]">Manage your entire community in a single system</h2>
                    <p className="text-neutral-grey">Who is Nextcent suitable for?</p>
                </div>

                <div className="flex justify-between items-start px-[144px] w-full">
                    { SuitableCommunities.map((community) => (
                        <div key={community.id} className="flex flex-col items-center text-center gap-2 py-6 px-8 w-[299px] shadow-[0px_2px_4px_0px_#ABBED133]">
                            <div className="flex flex-col items-center justify-center gap-4 w-[267px]">

                                <div className="relative flex items-center justify-center">
                                    <div className="absolute top-[7px] left-[15px] -z-10 rotate-180 bg-tint-5 w-[50px] h-[49px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"></div>
                                    
                                        <Image
                                            src={community.icon}
                                            width={48}
                                            height={48}
                                            alt="Icon"
                                        />
                                </div>

                                <h3 className="text-[28px] leading-[36px] font-bold text-neutral-d-grey">{community.title}</h3>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-sm text-neutral-grey">{community.description}</p>
                            </div>
                            
                        </div>
                    )) }
                    
                </div>
            </div>
        </>
    )
}