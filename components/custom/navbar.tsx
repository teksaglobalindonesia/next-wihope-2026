export default function NavBar() {
  return (
    <nav className="w-full bg-neutral-silver">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[105px] py-[30px]">

        <div className="flex items-center gap-[8px]">
          <img
            src="/assets/Icon.png"
            alt="Logo"
            className="w-[35px] h-[24px]"
          />
          <h1 className="font-inter font-bold text-[24px] leading-[28px] text-primary-brand-secondary">
            Nexcent
          </h1>
        </div>

        <div className="flex items-center gap-[120px]">
          <ul className="flex items-center gap-[50px]">
            <li className="font-inter font-medium text-[16px] leading-6 text-gray-900">
              Home
            </li>
            <li className="font-inter font-normal text-[16px] leading-6 text-gray-900">
              Service
            </li>
            <li className="font-inter font-normal text-[16px] leading-6 text-gray-900">
              Feature
            </li>
            <li className="font-inter font-normal text-[16px] leading-6 text-gray-900">
              Product
            </li>
            <li className="font-inter font-normal text-[16px] leading-6 text-gray-900">
              Testimonial
            </li>
            <li className="font-inter font-normal text-[16px] leading-6 text-gray-900">
              FAQ
            </li>
          </ul>

          <div className="flex items-center gap-[14px]">
            <button className="font-inter font-medium text-[14px] leading-4 text-primary-brand-primary  hover:text-green-800 px-5 py-[10px] rounded-md cursor-pointer transition-all hover:opacity-80">
              Login
            </button>
            <button className="bg-primary-brand-primary text-white font-inter font-medium text-[14px] leading-5 px-5 py-[10px] rounded-md cursor-pointer transition-all hover:bg-green-700">
              Sign Up
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}