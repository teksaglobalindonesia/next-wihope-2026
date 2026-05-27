import React from 'react';

type NavProps = {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  active?: boolean;
  color?: string;
  activeColor?: string;
  className?: string;
};

export default function Link({
  href,
  children,
  disabled = false,
  onClick,
  active = false,
  color,
  activeColor = 'text-black',
  className = ''
}: NavProps) {
  const isCustomColor = color && !color.startsWith('text-');
  const colorClass = color?.startsWith('text-') ? color : 'text-gray-900';
  const activeColorClass = activeColor.startsWith('text-')
    ? activeColor
    : colorClass;
  const inlineColor = isCustomColor ? { color } : undefined;

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      style={inlineColor}
      className={`
        w-fit
        rounded-[2px]
        focus:outline-none
        focus:ring-[1px]
        focus:ring-neutral-l_grey
        ${
          disabled
            ? 'pointer-events-none cursor-not-allowed text-neutral-grey-blue'
            : active
            ? `${activeColorClass} underline`
            : `${colorClass} hover:underline`
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
}
