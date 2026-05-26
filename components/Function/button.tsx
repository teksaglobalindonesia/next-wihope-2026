type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant: 'Primary' | 'Secondary' | 'Tertiary';
  className?: string;
};

export default function Button({
  children,
  loading = false,
  disabled = false,
  onClick,
  variant,
  className = ""
}: ButtonProps) {
  const variantStyles = {
    Primary: `
      bg-brand-primary
      text-white
      font-medium
      font-inter
      hover:bg-shade-shade_2
    `,

    Secondary: `
      text-brand-primary
      border border-brand-primary
      hover:bg-neutral-silver
      focus:bg-neutral-silver
      font-medium
      font-inter
    `,

    Tertiary: `
      text-brand-primary
      hover:bg-neutral-sliver
      font-medium
      font-inter
    `
  };

  const loadingStyles = {
    Primary: 'bg-shade-shade_2',

    Secondary: 'bg-neutral-silver border-none',

    Tertiary: '!bg-tint-tint_5'
  };

  const loadingImages = {
    Primary: '../Loading-images/Loading_putih.png',

    Secondary: '../Loading-images/Loading_hijau.png',

    Tertiary: '../Loading-images/Loading_hijau.png'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        flex justify-center items-center gap-1
        transition-all duration-300

        ${variantStyles[variant]}

        ${loading ? loadingStyles[variant] : ''}

        ${className}

        ${
          disabled
            ? 'cursor-not-allowed !bg-neutral-silver !text-neutral-grey-blue border-none'
            : ''
        }

      `}
    >
      {children}

      {loading && (
        <img
          src={loadingImages[variant]}
          alt="loading"
          className="h-4 w-4 animate-spin"
        />
      )}
 
    </button>
  );
}
