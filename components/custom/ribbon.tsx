import { CustButton } from "./CustButton";

export default function Ribbon() {
    return(
        <div className="w-full h-[300px] bg-[#F5F7FA] py-8 mt-[112px]">
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-center w-[820px] h-[152px] font-semibold text-[64px] leading-[76px] text-[#263238]">Pellentesque suscipit fringilla libero eu.</h1>
                <CustButton iconPosition={'right'}>Get a Demo</CustButton>
            </div>
        </div>
    )
}