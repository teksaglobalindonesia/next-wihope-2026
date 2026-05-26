import Image from 'next/image';
import communityData from '@/lib/community-data';

    export default function Community() {
    return (
        <div className="flex h-[416px] w-full flex-col px-[50px] items-center mt-[25px]">
        <div className="flex flex-col items-center">
            <p className="text-center font-inter text-[36px] font-semibold text-neutral-d_grey">
            Manage your entire community <br /> in a single system
            </p>
            <p className="mt-[8px] font-inter text-[16px] text-neutral-d_grey">
            Who is Nextcent suitable for?
            </p>
        </div>
        <div className="flex justify-between mt-[16px] gap-[85px]">
            {communityData.map((data, id) => (
            <div
                key={id}
                className="h-[260px] w-[299px]  bg-white shadow-[0px_2px_4px_0px_#ABBED133] py-[24px] flex flex-col items-center px-[28px] hover:scale-[1.05] hover:shadow-lg transition-all ease-in-out duration-500"
            >
                <div className=" w-[81px] h-[41px] flex justify-center relative">
                <div className="rounded-bl-[5px] rounded-br-[10px] rounded-tl-[18px] rounded-tr-[5px] bg-tint-tint_5 w-[50px] h-[49px] rotate-180">
                </div>
                <Image src={`${data.img}.png`} width={48} height={48} alt="" quality={100} className="absolute left-0 bottom-0" />
                </div>

                <p className="text-center font-inter text-[28px] font-bold text-neutral-d_grey mt-[16px]">
                {data.judul}
                </p>
                <p className="font-inter text-[14px] text-neutral-d_grey text-center mt-[8px]">
                {data.text}
                </p>

            </div>
            ))}
        </div>
        </div>
    );
    }
