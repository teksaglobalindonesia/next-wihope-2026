import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="flex h-[84px] w-full items-center justify-around bg-neutral-silver text-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/nexcent_logo.png"
            width={35}
            height={24}
            alt="Nexcent Logo"
          />
          <span className="text-brand-secondary font-semibold text-[28px] leading-[36px]">Nexcent</span>
        </div>

        <div className="flex items-center gap-[50px] text-[#18191F]">
          <span>
            <Link className="font-medium" href="/">Home</Link>
          </span>
          <span>
            <Link href="#">Service</Link>
          </span>
          <span>
            <Link href="#">Feature</Link>
          </span>
          <span>
            <Link href="#">Product</Link>
          </span>
          <span>
            <Link href="#">Testimonial</Link>
          </span>
          <span>
            <Link href="#">FAQ</Link>
          </span>
        </div>

        <div className="flex items-center gap-[14px] text-sm">
          <button className="px-5 py-[10px] text-brand-primary">Login</button>
          <button className=" rounded-[6px] bg-brand-primary px-5 py-[10px] text-neutral-white">
            Sign up
          </button>
        </div>
      </header>
    </>
  );
}
