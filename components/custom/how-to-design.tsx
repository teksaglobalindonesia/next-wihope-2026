'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Function/button';

export default function HowToDesign (){
    const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
    return (
        <div className="w-full h-[529px] bg-white py-[48px] flex justify-center gap-[50px]">
             <div className="">
                    <Image
                      src="/Illustration/Illustration-3.png"
                      width={442}
                      height={434}
                      quality={100}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-[610px] h-[400px] mt-[62px]">
                    <p className="font-inter text-[36px] font-semibold text-neutral-d_grey">
                      How to design your site footer like we did
                    </p>
                    <p className="font-inter text-[14px] text-neutral-d_grey mt-[16px] mb-[32px]">
                      Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <Button
                      variant="Primary"
                      className="h-[52px] w-[151px] rounded-[4px]"
                      loading={loadingButton === 'learn more2'}
                      disabled={loadingButton !== null && loadingButton !== 'learn more2'}
                      onClick={() => handleButtonClick('learn more2')}
                    >
                      Learn More
                    </Button>
                  </div>

        </div>
    )
}