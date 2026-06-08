"use client"
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export default function UnseenSpending() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

const handleClick = () => {
  const tl = gsap.timeline();

  tl.to(titleRef.current, {
    x: 100,
    duration: 1,
  },0)
  .to(descRef.current, {
    x: -50,
    duration: 1,
  },0)
  .to(imageRef.current, {
    scale: 1.1,
    duration: 1,
  },0);
};
    return (
   <section className="mt-[52px] px-[144px] w-full h-[433px] flex justify-center gap-[49px] items-center  bg-white"> 
   
   <div ref={imageRef} className="flex justify-center items-center w-[442px] h-[433px] mt-[52px]">
        <img alt="hero" src="/rafiki.svg" width={441.53} height={310.87} />
      </div>
      
      <div className=" flex flex-col w-[661px] h-[268px] gap-[32px] justify-center">

          <h2 ref={titleRef}  className="font-inter text-[34px] font-semibold leading-[44px] text-neutral-d-grey">
            The unseen of spending three years at Pixelgrade
          </h2>

          <p ref={descRef} className="font-inter text-[14px] leading-[20px] text-neutral-grey">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

        <button onClick={handleClick} className="font-inter text-center w-[151px] h-[52px] rounded-[4px] bg-brand-primary gap-[10px] px-[32px] py-[14px] text-[16px] font-medium leading-[24px] text-white ">
          Register
        </button>
        </div>


    </section>
  );
}