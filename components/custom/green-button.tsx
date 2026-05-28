type GreenButtonProps = {
  children: React.ReactNode;
};

const GreenButton = ({ children }: GreenButtonProps) => {
  return (
    <button className="w-[151px] h-[52px] px-[32px] py-[14px] rounded-[4px] bg-primary-brand-primary gap-[10px] font-inter text-[16px] transition-all hover:bg-green-700">
       
        <span className="flex items-center justify-center font-medium text-neutral-white whitespace-nowrap">
            {children}
        </span>

    </button>
  );
};

export default GreenButton;