type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  active?: boolean;
};

export default function NavLink({
  href,
  children,
  disabled,
  onClick,
  active
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={`
      rounded-[2px]
      focus:outline-none
      focus:ring-[1px]
      focus:ring-neutral-l_grey
      ${
        disabled
          ? 'text-neutral-grey-blue pointer-events-none cursor-not-allowed'
          : active
          ? 'text-black underline decoration-black'
          : 'text-gray-900 hover:underline hover:decoration-gray-900'
      }
      `}
    >
      {children}
    </a>
  );
}
