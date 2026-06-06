import { CustButton } from "./CustButton"

export default function ServiceList() {
    return(
        <div className="w-full max-w-7xl h-auto mx-auto gap-4">
            <div className="w-full h-[433px] pl-[144px] mt-[42px]">
                <div className="flex justify-between flex-row items-center">
                    <div className="w-[368px] h-[433px] flex items-center">
                        <img className="w-[368px] h-auto" src="/marketing-logo/image 18.png" alt="image" />
                    </div> 
                        
                        <div className="flex flex-col w-[661px] gap-5 ml-10">
                            <div className="mr-[60px] ">
                                <h1 className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start w-[601x]">Service 1</h1>
                                <p className="font-inter mt-4 text-sm text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            </div>
                            
                            <CustButton>Learn More</CustButton>
                        </div>
                </div>
            </div>

            <div className="w-full h-[433px] pl-[144px] mt-[42px] bg-[#F5F7FA]">
                <div className="flex flex-row items-center">
                        
                        <div className="flex flex-col w-[661px] gap-8">
                            <div className="w-[400px] h-[170px] mr-[60px] ">
                                <h1 className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start w-[601x]">Service 2</h1>
                                <p className="font-inter mt-4 text-sm text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            </div>
                            
                            <CustButton>Learn More</CustButton>
                        </div>
                    <div className="w-[368px] h-[433px] flex items-center">
                        <img className="w-[368px] h-auto" src="/marketing-logo/image 19.png" alt="image" />
                    </div>  
                </div>
            </div>

            <div className="w-full h-[433px] pl-[144px] mt-[42px]">
                <div className="flex flex-row justify-between items-center">
                    <div className="w-[368px] h-[433px] flex items-center">
                        <img className="w-[368px] h-auto" src="/marketing-logo/image 20.png" alt="image" />
                    </div> 
                        
                        <div className="flex flex-col w-[661px] pr-[60px] gap-5 ml-10">
                            <div className="mr-[60px] w-[400px]">
                                <h1 className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start">Service 3</h1>
                                <p className="font-inter mt-4 text-sm text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            </div>
                            
                            <CustButton>Learn More</CustButton>
                        </div>
                </div>
            </div>
        </div>
    )
}