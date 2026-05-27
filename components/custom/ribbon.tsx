'use client';

import { useState } from 'react';
import Button from '../Function/button';

export default function Ribbon() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);

    setTimeout(() => {
      setLoadingButton(null);
    }, 2000);
  };
  return (
    <div className="flex h-[300px] w-full flex-col items-center bg-neutral-silver pt-[32px] gap-[32px]">
      <p className="h-[152px] w-[887px] text-center font-inter text-[64px] font-semibold leading-[78px] text-neutral-black">
        Pellentesque suscipit fringilla libero eu.
      </p>
      <Button
        variant="Primary"
        className="h-[52px] w-[178px] rounded-[4px]"
        loading={loadingButton === 'get a demo'}
        disabled={loadingButton !== null && loadingButton !== 'get a demo'}
        onClick={() => handleButtonClick('get a demo')}
        icon={<span>→</span>}
      >
        Get a Demo
      </Button>
    </div>
  );
}
