type GreenButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const GreenButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
}: GreenButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-[52px] w-[151px] rounded-[4px] bg-primary-brand-primary px-[32px] py-[14px] font-inter text-[16px] transition-all hover:bg-green-700 disabled:cursor-not-allowed ${className}`}
    >
      <span className="flex items-center justify-center whitespace-nowrap font-medium text-neutral-white">
        {children}
      </span>
    </button>
  );
};

export default GreenButton;