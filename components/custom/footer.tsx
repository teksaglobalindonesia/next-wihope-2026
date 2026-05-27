import { CustButton } from "./CustButton";

export default function Footer() {
    return (
        <div className="h-[328px] w-full bg-[#263238] px-[165px] py-16 ">
            <div className="flex flex-row gap-32">
                <div className="flex h-[189.67px] w-[350px] flex-col gap-10 ">
                    <div className="flex h-[24px] w-[154.49px] flex-row items-center gap-1">
                        <img
                            src="/footer-image/Icon.png"
                            className="h-[24px] w-[35px]"
                            alt="Icon"
                        />
                        <h1 className="h-[20.66px] w-[111.49px] pb-8 text-2xl font-bold text-white">
                            Nexcent
                        </h1>
                    </div>

                    <div className="w-[350px] h-12 gap-2 font-inter text-sm text-white">
                        <h1 className="mb-2 cursor-pointer">Copyright © 2020 Nexcent ltd.</h1>
                        <h2 className="cursor-pointer">All rights reserved</h2>
                    </div>

                    <div className="flex flex-row w-32 h-8 gap-4">
                        <img src="/footer-image/Social Icons 1.png" alt="icon 1" />
                        <img src="/footer-image/Social Icons 2.png" alt="icon 2" />
                        <img src="/footer-image/Social Icons 3.png" alt="icon 3 " />
                    </div>
                </div>

                <div className="flex flex-row w-[635px] h-[200px] gap-24 text-white font-inter">
                    <div className="flex flex-col text-start gap-4">
                        <h1 className="font-semibold text-xl cursor-pointer">Company</h1>
                        <CustButton variant={'footer'} size={'footer'}>About us</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Blog</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Contact Us</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Pricing</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Testimonial</CustButton>
                    </div>

                    <div className="flex flex-col text-start gap-4">
                        <h1 className="font-semibold text-xl cursor-pointer">Support</h1>
                        <CustButton variant={'footer'} size={'footer'}>Help Center</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Terms of Service</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Legal</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Privacy Policy</CustButton>
                        <CustButton variant={'footer'} size={'footer'}>Status</CustButton>
                    </div>
                </div>
            </div> 
        </div>
    );
}
