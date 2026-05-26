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
                            Nextcent
                        </h1>
                    </div>

                    <div className="w-[350px] h-12 gap-2 font-inter text-sm text-white">
                        <h1 className="mb-2">Copyright © 2020 Nexcent ltd.</h1>
                        <h2>All rights reserved</h2>
                    </div>

                    <div className="flex flex-row w-32 h-8 gap-4">
                        <img src="/footer-image/Social Icons 1.png" alt="icon 1" />
                        <img src="/footer-image/Social Icons 2.png" alt="icon 2" />
                        <img src="/footer-image/Social Icons 3.png" alt="icon 3 " />
                    </div>
                </div>

                <div className="flex flex-row w-[635px] h-[200px] gap-24 text-white font-inter">
                    <div className="flex flex-col text-start gap-4">
                        <h1 className="font-semibold text-xl">Company</h1>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>contact Us</p>
                        <p>Pricing</p>
                        <p>Testimonial</p>
                    </div>

                    <div className="flex flex-col text-start gap-4">
                        <h1 className="font-semibold text-xl">Support</h1>
                        <p>Help Center</p>
                        <p>Terms Of Service</p>
                        <p>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Status</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}
