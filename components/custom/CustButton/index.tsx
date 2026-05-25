import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary hover:bg-[#2f9d33]',
        secondary:
          'bg-transparent text-brand-primary border border-white hover:border-[#4CAF4F] '
      },
      size: {
        normal: 'h-[50px] w-[135px] text-lg',
        medium: 'w-[91px] h-[40px] '
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconPosition === 'left' && (
          <div className="rounded-full p-2 ">+</div>
        )}  
        {children}
        {iconPosition === 'right' && (
          <div className="rounded-full p-2">R</div>
        )}
      </Comp>
    );
  }
);
CustButton.displayName = 'CustButton';

export { CustButton, buttonVariants };
