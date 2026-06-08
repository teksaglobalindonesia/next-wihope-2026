'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Community(){
    const cardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];

    gsap.set(cards, {
        y: 0,
        rotation: 25,
        transformOrigin: "center center",
    });

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        },
    });

    cards.forEach((card) => {
        tl.to(card, {
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "power1.out", 
        });
    });
}, []);


    return(
        <div className="w-full max-w-7xl h-auto mx-auto gap-[16px] mt-14">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-inter w-[542px] h-[88px] font-semibold text-[36px] leading-[44px] ">Manage your entire community in a single system</h1>
                <p className="mt-2 text-[#717171]">Who is Nextcent suitable for?</p>
            </div>
            
            <div ref={cardsRef} className="flex flex-row justify-between items-center text-center gap-2 px-[100px] mt-8">
                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member new.png" alt="member1" />
                        <h1 className="font-inter font-bold text-xl text-neutral-d-grey"> Membership Organisations </h1>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member2 new.png" alt="member2" />
                        <h2 className="font-inter font-bold text-xl text-neutral-d-grey"> National Associations </h2>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-[299px] h-[260px] items-center rounded-lg shadow-md px-[32px] py-[24px]">
                    <img className="w-[65px] h-[56px]" src="/comunity-logo/Icon member3 new.png" alt="member3" />
                        <h3 className="font-inter font-bold text-xl text-neutral-d-grey"> Clubs And Groups </h3>
                        <p className="text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>  
        </div>
    )
}