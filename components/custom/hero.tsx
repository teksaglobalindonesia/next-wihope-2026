"use client";
import {gsap} from "gsap";
import {useRef, useEffect } from "react";

export default function Hero() {

  const heroRef = useRef(null);
  useEffect(() => {
    gsap.from(heroRef.current, {duration:2.5, opacity : 0, y : 100});
  }, []);
  return (

    <section  className=" mt-[84px] w-full h-[599px] flex justify-center items-center  px-[144px] py-[96px] gap-[104px] bg-neutral-silver"> 

      <div ref={heroRef} className=" flex flex-col w-[657px] h-[276px] gap-[32px] justify-center">

        <div className="flex flex-col gap-4">
          <h1 className="font-inter text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Lessons and insights <br />
            <span className="text-brand-primary">
              from 8 years
            </span>
          </h1>

          <p className="font-inter text-[16px] leading-[24px] text-neutral-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>

        <button className="font-inter w-[128px] h-[52px] rounded-[4px] bg-brand-primary px-[32px] py-[14px] text-[16px] font-medium leading-[24px] text-white transition-all duration-300 hover:bg-shade-3">
          Register
        </button>

      </div>

      <div className="flex justify-center items-center">
        <img alt="hero" src="/Illustration.svg" width={391} height={407} />
      </div>

    </section>
  );
}

