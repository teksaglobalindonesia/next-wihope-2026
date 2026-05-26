import Image from 'next/image';
import achievementData from "@/lib/achievement-data"

export default function Achievement (){
    return (
        <div className="w-full h-[288px] bg-neutral-silver flex justify-center items-center gap-[162px]">
            <div className="flex flex-col">
                <p className="font-inter text-[36px] font-semibold text-neutral-d_grey">Helping a local <br /><span className="text-brand-primary">business reinvent itself</span></p>
                <p className="font-inter text-[16px] text-gray-900 mt-[8px]">We reached here with our hard work and dedication</p>

            </div>
            <div className="grid grid-cols-2 gap-[50px]">
                {achievementData.map((data, id) => 
                <div key={id} className="flex gap-[6px]">
 
                <div className="size-[65px] flex items-center justify-center">
                    <Image src={`${data.img}.png`} alt="" width={48} height={48} quality={100}/>
                </div>

                <div className="flex flex-col">
                    <p className="font-inter text-[28px] font-bold text-neutral-d_grey">{data.jumlah.toLocaleString('en-US')}</p>
                    <p className="font-inter text-[16px] text-neutral-grey">{data.text}</p>
                </div>

                </div>
                )}

            </div>

        </div>
    )
}