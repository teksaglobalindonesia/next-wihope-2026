import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary hover:bg-[#2f9d33] hover:scale-105 transition duration-300 ease-in-out hover:underline text-white',
        secondary:'bg-transparent text-brand-primary border border-transparent hover:border-[#4CAF4F] hover:scale-105 hover:underline transition duration-300 ease-in-out ',
        header:'bg-transparent text-gray-900 hover:scale-105 hover:underline transition duration-300 ease-in-out ',
        footer:'bg-transparent text-white hover:scale-105 hover:underline transition duration-300 ease-in-out',
        secondary2:'bg-transparent text-black border border-transparent hover:border-black hover:scale-105 hover:underline transition duration-300 ease-in-out ',
      },
      size: {
        normal: 'w-[135px] h-[50px] text-lg flex items-center whitespace-nowrap',
        medium: 'w-[91px] h-[40px] text-sm flex items-center whitespace-nowrap',
        footer: 'w-[91px] h-[40px] text-sm text-start flex items-center justify-start whitespace-nowrap',
        long: 'h-[40px] px-4 text-sm flex items-center whitespace-nowrap'
      }
      
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal'
    }
  }
);

export interface CustButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconPosition?: 'right' | 'left';
}

const CustButton = React.forwardRef<HTMLButtonElement, CustButtonProps>(
  (
    { className, variant, size, asChild = false, iconPosition, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const iconSizeClass = size === 'normal' ? 'size-3' : size === 'medium' ? 'size-4' : 'size-5';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconPosition === 'left' && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className={iconSizeClass}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        )}  
        {children}
        {iconPosition === 'right' && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className={iconSizeClass}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        )}
      </Comp>
    );
  }
);
CustButton.displayName = 'CustButton';

export { CustButton, buttonVariants };
