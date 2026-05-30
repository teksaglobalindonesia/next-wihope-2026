export default function Community(){
    return(
        <div className="w-full h-[416px] gap-[16px] mt-14">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-inter w-[542px] h-[88px] font-semibold text-[36px] leading-[44px] ">Manage your entire community in a single system</h1>
                <p className="mt-2 text-[#717171]">Who is Nextcent suitable for?</p>
            </div>
            
            <div className="flex flex-row justify-between items-center text-center gap-2 px-[100px] mt-8">
                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member new.png" alt="member1" />
                        <h1 className="font-inter font-bold text-xl text-neutral-d-grey"> Membership Organisations </h1>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member2 new.png" alt="member2" />
                        <h2 className="font-inter font-bold text-xl text-neutral-d-grey"> National Associations </h2>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member3 new.png" alt="member3" />
                        <h3 className="font-inter font-bold text-xl text-neutral-d-grey"> Clubs And Groups </h3>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>  
        </div>
    )
}