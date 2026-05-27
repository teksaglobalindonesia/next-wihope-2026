import Image from "next/image";
import { Achievements } from "@/lib/data-dummy"

export default function Achievement() {
    return (
        <>
            <div className="flex items-center justify-between bg-neutral-silver w-full px-[144px] py-[64px]">
                <div className="flex flex-col items-start gap-2 w-[540px]">
                    <h2 className="text-[36px] leading-[44px] font-semibold text-neutral-d-grey w-[408px]">
                        Helping a local 
                        <span className="text-brand-primary"> business reinvent itself</span>
                    </h2>

                    <h3 className="text-[#18191F]">We reached here with our hard work and dedication</h3>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    { Achievements.map((achievement) => (
                        <div key={achievement.id} className="flex justify-start items-center gap-4 w-[255px]">
                            <Image
                                src={achievement.icon}
                                width={48}
                                height={48}
                                alt="Icon"
                            />

                            <div className="flex flex-col">
                                <span className="text-neutral-d-grey text-[28px] leading-[36px] font-bold">{new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(achievement.count)}</span>
                                <span className="text-neutral-grey">{achievement.label}</span>
                            </div>
                        </div>
                    )) }
                    

                </div>
            </div>
        </>
    )
}