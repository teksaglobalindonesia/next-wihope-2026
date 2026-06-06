export default function Achievement() {
    return(
        <div className="max-w-7xl h-auto mx-auto flex flex-row justify-between items-center my-12 w-full px-[144px] py-[64px] bg-[#F5F7FA]">
            <div className="w-[540px] h-[120px] gap-2 text-start font-inter">
                <h1 className="w-[408px] h-[88px] font-semibold text-3xl text-[#4D4D4D]">Helping a local 
                    <span className="block text-brand-primary"> business reinvent itself</span>
                </h1>
                <p className="text-[#18191F]">We reached here with our hard work and dedication</p>
            </div>

            <div className="grid grid-cols-2 gap-x-[42px] gap-y-[40px] font-inter">
                
                {/* Item 1: Members */}
                <div className="flex flex-row items-center gap-4">
                    <img src="/achievement-logo/achv1 new.png" alt="Members Icon" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-[28px] leading-[36px] text-[#4D4D4D]">2,245,341</h2>
                        <p className="text-[16px] text-[#717171]">Members</p>
                    </div>
                </div>

                {/* Item 2: Clubs */}
                <div className="flex flex-row items-center gap-4">
                    <img src="/achievement-logo/achv2 new.png" alt="Clubs Icon" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-[28px] leading-[36px] text-[#4D4D4D]">46,328</h2>
                        <p className="text-[16px] text-[#717171]">Clubs</p>
                    </div>
                </div>

                {/* Item 3: Event Bookings */}
                <div className="flex flex-row items-center gap-4">
                    <img src="/achievement-logo/achv3 new.png" alt="Event Icon" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-[28px] leading-[36px] text-[#4D4D4D]">828,867</h2>
                        <p className="text-[16px] text-[#717171]">Event Bookings</p>
                    </div>
                </div>

                {/* Item 4: Payments */}
                <div className="flex flex-row items-center gap-4">
                    <img src="/achievement-logo/achv4 new.png" alt="Payments Icon" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-[28px] leading-[36px] text-[#4D4D4D]">1,926,436</h2>
                        <p className="text-[16px] text-[#717171]">Payments</p>
                    </div>
                </div>

            </div>
        </div>
    )
}