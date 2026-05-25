export default function Header(){
    return(
        <div className="w-full h-[84px] bg-neutral-silver flex flex-row justify-between px-8">
            
            <div className="flex flex-row items-center gap-[8px] ml-[30px] w-[154.49px] h-[24px] mt-[25px]">
                <img src="/image/Icon.png" className="w-[35px] h-[24px] ml-105" alt="Icon" />
                <h1 className="w-[111.49px] h-[20.66px] pb-8 text-brand-secondary font-bold text-2xl">Nextcent</h1>
            </div>
            
            <div className="flex flex-row items-center gap-[50px] w-[588px] h-[24px] mt-[30px] ml-[80px]">
                <p className="w-[46px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">Home</p>
                <p className="w-[57px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">Service</p>
                <p className="w-[58px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">Feature</p>
                <p className="w-[60px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">Product</p>
                <p className="w-[86px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">Testimonial</p>  
                <p className="w-[31px] h-[24px] gap-[10px] font-inter text-[16px] text-gray-900">FAQ</p>
            </div>
            
            <div className="flex flex-row px-[20px] py-[10px] gap-8 mr-6 mt-2">
                <button className="w-[77px] h-[40px] bg-neutral-silver rounded-[6px] text-brand-primary font-inter">Login</button>
                <button className="w-[91px] h-[40px] bg-brand-primary rounded-[6px] text-white font-inter">Sign Up</button>
            </div>
        </div>
    )
}