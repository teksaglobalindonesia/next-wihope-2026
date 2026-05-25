type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
};

export default function NavLink({
  href,
  children,
  disabled = false,
  onClick,
  active = false
}: NavLinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={`
        rounded-[2px]
       
         ${
           active
             ? 'text-black underline decoration-black'
             : 'text-gray-900 hover:underline hover:decoration-gray-900 focus:outline-none focus:ring-[1px] focus:ring-neutral-l_grey'
         }

        hover:underline-offset-2
      

        ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}
      `}
    >
      {children}
    </a>
  );
}
