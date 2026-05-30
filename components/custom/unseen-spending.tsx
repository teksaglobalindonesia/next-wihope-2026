import { CustButton } from "./CustButton";

export default function UnseenSpending() {
    return(
        <div className="w-full h-[433px] pl-[144px] mt-[42px]">
            <div className="flex flex-row items-center">
                <img src="/image/Frame 35 new2.png" alt="image" className="w-[441] h-[328.99px] mt-[52px]" />
                    
                    <div className="flex flex-col w-[661px] gap-5  mr-[144]">
                        <div className="mr-[60px] ">
                            <h1 className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start w-[601x]">The unseen of spending three years at Pixelgrade</h1>
                            <p className="font-inter mt-4 text-sm text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        </div>
                        
                        <CustButton>Learn More</CustButton>
                    </div>
            </div>
        </div>
    )
}