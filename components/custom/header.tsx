export default function Header() {
  return (
    <header className="fixed top-0 z-50 bg-neutral-silver w-full ">

      <div className="flex h-[84px] flex-row items-center px-[144px]">

        <img alt="logo" src="/logo.svg" width={154} height={24} />

        <nav className="flex h-[24px] flex-1 items-center justify-center gap-[50px] text-[16px] font-normal leading-[24px] text-gray-900">
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Home
          </a>
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Services
          </a>
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Features
          </a>
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Product
          </a>
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            Testimonials
          </a>
          <a
            href=""
            className="transition-all duration-300 hover:text-brand-primary hover:underline hover:decoration-brand-primary"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-[14px]">
          <button className="font-inter h-[40px] rounded-[6px] px-5 text-[14px] font-medium leading-[20px] text-brand-primary transition-colors duration-300 hover:border hover:border-gray-300">
            Login
          </button>

          <button className="font-inter h-[40px] w-[91px] rounded-[6px] bg-brand-primary px-5 text-[14px] font-medium leading-[20px] text-white transition-colors duration-300 hover:border hover:border-white">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
