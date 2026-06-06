export default function HeroSimple ({judul, text}:any){
    return (
        <div className="w-full h-[308px] bg-neutral-silver mt-[84px] flex flex-col justify-center items-center font-inter">
            <p className="text-[64px] text-neutral-d_grey font-semibold">{judul}</p>
            <p className="text-neutral-grey text-[16px]">{text}</p>
        </div>
    )
}