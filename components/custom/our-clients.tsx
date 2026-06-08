'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurClients() {
    
    const containerRef = useRef(null);
    const showRef = useRef(null);
    const showRef2 = useRef(null);
    const client1 = useRef(null);
    const client2 = useRef(null);
    const client3 = useRef(null);   
    const client4 = useRef(null);   
    const client5 = useRef(null);   
    const client6 = useRef(null);   
    const client7 = useRef(null);
    
    useEffect(() => {
        const items = [
            showRef.current,
            showRef2.current,
            client1.current,
            client2.current,
            client3.current,
            client4.current,
            client5.current,
            client6.current,
            client7.current
        ].filter(Boolean);

        gsap.set(items, {
            opacity: 0,
            y: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "top 55%",
                markers: false,
                toggleActions: "play none none none"
            }
        });

        tl.to(showRef.current, {
            opacity: 1,
            y: -10,
            duration: 0.6,
            ease: "power1.out"
        })
        .to(showRef2.current, {
            opacity: 1,
            y: -10,
            duration: 0.6,
            ease: "power1.out"
        }, "-=0.4")
        
        .to(client1.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" })
        .to(client2.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3")
        .to(client3.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3")
        .to(client4.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3")
        .to(client5.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3")
        .to(client6.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3")
        .to(client7.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, "-=0.3");

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);
    
    return (
        <div ref={containerRef} className="w-full max-w-7xl h-[190px] mx-auto px-[144px] gap-[16px] mt-10">
            <div className="w-[1,110px] h-[76px] gap-[8px]">
                <h1 ref={showRef} className="flex flex-col items-center font-inter font-semibold text-[36px] leading-[44px] text-neutral-d-grey">Our Clients</h1> 
                <p ref={showRef2} className="flex flex-col items-center font-inter text-[16px] leading-[24px] text-[#717171] mt-2">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex flex-row justify-between mt-12">
                <img ref={client1} className="client1" src="/client-logo/Logo (1).png" alt="Client logo 1" />
                <img ref={client2} className="client2" src="/client-logo/Logo (2).png" alt="Client logo 2" />
                <img ref={client3} className="client3" src="/client-logo/Logo (3).png" alt="Client logo 3" />
                <img ref={client4} className="client4" src="/client-logo/Logo (4).png" alt="Client logo 4" />
                <img ref={client5} className="client5" src="/client-logo/Logo (5).png" alt="Client logo 5" />
                <img ref={client6} className="client6" src="/client-logo/Logo (6).png" alt="Client logo 6" />
                <img ref={client7} className="client7" src="/client-logo/Logo (7).png" alt="Client logo 7" />
            </div>
        </div>


    )
}
