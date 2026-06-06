import { CustButton } from "./CustButton"

export default function Quote() {
    return(
        <div className="flex flex-row w-full max-w-7xl h-[390px] mx-auto px-36 py-8 gap-[78px] bg-[#F5F7FA]">
            <img src="/image/image 9.png" alt="" />

            <div className="flex flex-col w-[748px] h-[324px]">
                <div className="flex flex-col w-full h-[244px] gap-8 font-inter">
                    <p className="w-full h-[168px] text-sm leading-6 text-[#717171]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <div className="w-full h-[60px] gap-2">
                        <h1 className="font-semibold text-xl text-[#4CAF4F]">Tim Smith</h1>
                        <p className="text-[#89939E]">British Dragon Boat Racing Association</p>
                    </div>
                
                    <div className="flex flex-row w-full h-12 gap-8 items-center">
                        <img src="/client-logo/Logo (1).png" alt="" className="h-6 w-auto object-contain"/>
                        <img src="/client-logo/Logo (2).png" alt="" className="h-6 w-auto object-contain"/>
                        <img src="/client-logo/Logo (3).png" alt="" className="h-6 w-auto object-contain"/>
                        <img src="/client-logo/Logo (4).png" alt="" className="h-6 w-auto object-contain"/>
                        <img src="/client-logo/Logo (5).png" alt="" className="h-6 w-auto object-contain"/>
                        <img src="/client-logo/Logo (6).png" alt="" className="h-6 w-auto object-contain"/>

                        <CustButton variant={'secondary'} iconPosition="right" size={'long'}>Meet all customers</CustButton>
                    </div>
                </div>

            </div>
        </div>
    )
}