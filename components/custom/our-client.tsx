import Image from 'next/image';

export default function Client() {
  const Logo = [
    '/Logo-images/Logo (1).png',
    '/Logo-images/Logo (2).png',
    '/Logo-images/Logo (3).png',
    '/Logo-images/Logo (4).png',
    '/Logo-images/Logo (5).png',
    '/Logo-images/Logo (6).png',
    '/Logo-images/Logo (7).png'
  ];
  return (
    <div className="py-[40px] h-[270] w-full bg-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="font-inter text-[36px] font-semibold text-neutral-d_grey ">
            Our Client
          </p>
          <p className="font-inter text-[16px] text-neutral-d_grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex gap-[96px] py-[41px] px-[50px] ">
          {Logo.map((png, id) => (
            <div key={id} className="">
              <Image
                src={`${png}`}
                alt=""
                width={48}
                height={48}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
