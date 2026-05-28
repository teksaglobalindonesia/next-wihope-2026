import Link from "next/link";

export default function Header () {

  const menus = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  return (
    <nav className="w-full bg-neutral-silver">

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[105px] py-[30px]">

        <div className="flex items-center gap-[8px]">

          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-[24px] w-[35px]"
          />

          <h1 className="font-inter text-[24px] font-bold leading-[28px] text-primary-brand-secondary">
            Nexcent
          </h1>

        </div>

        <div className="flex items-center gap-[120px]">

          <ul className="flex items-center gap-[50px]">

            {menus.map((menu) => (
              <li
                key={menu}
                className="list-none font-inter text-[16px] font-normal leading-6 text-gray-900"
              >
                <Link
                  href={menu === "Service" ? "/service" : "#"}
                >
                  {menu}
                </Link>
              </li>
            ))}

          </ul>

          <div className="flex items-center gap-[14px]">

            <button className="cursor-pointer rounded-md px-5 py-[10px] font-inter text-[14px] font-medium leading-4 text-primary-brand-primary transition-all hover:text-green-800 hover:opacity-80">
              Login
            </button>

            <button className="cursor-pointer rounded-md bg-primary-brand-primary px-5 py-[10px] font-inter text-[14px] font-medium leading-5 text-white transition-all hover:bg-green-700">
              Sign Up
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}