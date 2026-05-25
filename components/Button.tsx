'use client';

import { useTransition } from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  loadingSize?: string;
};

const variantStyles = {
  primary: {
    default: 'bg-brand-primary text-neutral-white',
    hover: '',
    click: 'active:bg-shade-shade_2',
    disabled: 'bg-neutral-silver text-neutral-grey-blue pointer-events-none',
    loading: 'bg-neutral-silver text-neutral-grey-blue pointer-events-none'
  },
  secondary: {
    default: 'bg-neutral-white text-brand-primary border border-brand-primary',
    hover: 'hover:bg-neutral-grey hover:border-0',
    click: 'active:bg-neutral-grey active:border-0',
    disabled:
      'bg-neutral-grey text-neutral-grey-blue pointer-events-none border-0',
    loading:
      'bg-neutral-grey text-neutral-grey-blue pointer-events-none border-0'
  },
  tertiary: {
    default: 'bg-transparent text-brand-primary',
    hover: 'hover:bg-neutral-silver',
    click: 'active:bg-tint-tint_5',
    disabled: 'bg-neutral-silver text-neutral-grey-blue pointer-events-none',
    loading: 'bg-tint-tint_5 text-neutral-grey-blue pointer-events-none'
  }
};

function LoadingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className} animate-spin`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33337L8 3.33337"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.6667L8 14.6667"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.667 8L12.667 8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 8L1.3335 8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.714 3.28598L11.2998 4.7002"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.70035 11.3L3.28613 12.7142"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.28598 3.28598L4.7002 4.7002"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3001 11.3L12.7144 12.7142"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  variant,
  onClick,
  disabled,
  loading,
  children,
  className = '',
  loadingSize = 'h-[16px] w-[16px]'
}: ButtonProps) {
  const [isPending, startTransition] = useTransition();

  const isLoading = loading || isPending;
  const isDisabled = disabled || isLoading;

  const handleClick = () => {
    if (!onClick || isDisabled) return;
    const result = onClick();
    if (result instanceof Promise) {
      startTransition(async () => {
        await result;
      });
    }
  };

  const styles = variantStyles[variant];

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      onMouseDown={(e) => e.preventDefault()}
      className={`
        flex items-center justify-center gap-[8px]
        rounded-[4px]
        transition-colors duration-150
        ${
          isDisabled
            ? styles.disabled
            : isLoading
            ? styles.loading
            : `${styles.default} ${styles.hover} ${styles.click}`
        }
        ${className}
      `}
    >
      {children}
      {isLoading && <LoadingIcon className={loadingSize} />}
    </button>
  );
}
