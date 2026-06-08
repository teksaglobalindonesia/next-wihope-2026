'use client'

import { useRef, useState } from "react";
import { CustButton } from "./CustButton";
import gsap from "gsap";

export default function UnseenSpending() {
    const pictRef=useRef(null);
    const tittleRef=useRef(null);
    const descRef=useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAnimation = () => {
        if (!isExpanded) {
            // Expand
            gsap.to(pictRef.current, {
                scale: 1.1,
                duration: 0.4,
                ease: "power1.out",
                transformOrigin: "center center"
            });
            
            gsap.to(tittleRef.current, {
                x: 100,
                duration: 0.6,
                ease: "power1.out",
                transformOrigin: "center center"
            });
            
            gsap.to(descRef.current, {
                x: -50,
                duration: 0.6,
                ease: "power1.out",
                transformOrigin: "center center"
            });
        } else {
            // Collapse back to normal
            gsap.to(pictRef.current, {
                scale: 1,
                duration: 0.6,
                ease: "power1.out",
                transformOrigin: "center center"
            });
            
            gsap.to(tittleRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power1.out",
                transformOrigin: "center center"
            });
            
            gsap.to(descRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power1.out",
                transformOrigin: "center center"
            });
        }
        setIsExpanded(!isExpanded);
    };

    return(
        <div className="w-full max-w-7xl h-auto mx-auto pl-[144px] mt-[42px]">
            <div className="flex flex-row items-center">
                <img ref={pictRef} src="/image/Frame 35 new2.png" alt="image" className="w-[441px] h-[328.99px] mt-[52px]" />
                    
                    <div className="flex flex-col w-[661px] gap-5  mr-[144]">
                        <div className="mr-[60px] ">
                            <h1 ref={tittleRef} className="font-inter font-semibold text-3xl text-[#4D4D4D] text-start w-[601x]">The unseen of spending three years at Pixelgrade</h1>
                            <p ref={descRef} className="font-inter mt-4 text-sm text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        </div>
                        
                        <CustButton onClick={handleAnimation}>Learn More</CustButton>
                    </div>
            </div>
        </div>
    )
}