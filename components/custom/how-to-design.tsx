import { CustButton } from "./CustButton";

export default function HowToDesign() {
    return(
        <div className="w-full h-[433.4px] my-12 px-[120px] ">
            <div className="flex flex-row gap-7 items-center">
                <img src="/image/pana new.png" alt="image" className="w-[441.53px] h-[433.4px]" />
                    
                    <div className="flex flex-col w-[761px] mt-2 gap-5 ml-9 mr-[144px] mb-[62.7px]">
                        <div className="flex flex-col">
                            <h1 className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start w-[700x]">How to design your site footer like we did</h1>
                            <p className="font-inter mt-4 text-sm text-[#717171]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        </div>
                        
                        <CustButton>Learn More</CustButton>
                    </div>
            </div>
        </div>
    )
}