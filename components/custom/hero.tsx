import { CustButton } from "./CustButton";

export default function Hero() {
    return(
        <div className="flex flex-row items-center w-full h-[599px] bg-neutral-d-grey px-[144px] py-[96px] ">
            <div className="max-w-[657px] gap-[16px] mr-4">
                <h3 className="w-[657px]  font-inter font-semibold text-[60px] leading-[76px] text-neutral-d-grey">Lessons and insights  
                    <span className="block text-brand-primary">from 8 years</span>
                </h3>   
                <p className="text-[16px] leading-[24px] font-inter text-neutral-grey mt-2">Where to grow your business as a photographer: site or social media?</p>
                <CustButton className="text-white rounded-[4px] mt-4">Register</CustButton>
            </div>
            
            <div>
                <img className="w-[391px] h-auto ml-4" src="/image/Illustration.png" alt="Ilustrasion" />
            </div>
        </div>
    )
}