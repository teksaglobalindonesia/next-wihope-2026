export default function SimpleHero() {
    return (
        <>
            <div className="flex justify-center items-center bg-neutral-silver w-full h-[400px] px-[144px] pt-[96px] pb-[24px]">
                <div className="flex flex-col justify-center items-center gap-8 text-center">
                    <span className="text-neutral-d-grey text-[64px] leading-[76px] font-semibold">
                        Our <span className="text-brand-primary">Service</span>
                    </span>

                    <span className="text-neutral-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</span>
                </div>
            </div>
        </>
    )
}