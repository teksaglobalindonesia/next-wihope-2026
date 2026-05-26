import Image from 'next/image';

export default function Client() {
  const Logo = [
    '/Logo(1).png',
    '/Logo (2).png',
    '/Logo (3).png',
    '/Logo (4).png',
    '/Logo (5).png',
    '/Logo (6).png',
    '/Logo (7).png'
  ];
  return (
    <div className="my-[40px] h-[190] w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="font-inter text-[36px] font-semibold text-neutral-d_grey ">
            Our Client
          </p>
          <p className="font-inter text-[16px] text-neutral-d_grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex gap-[96px] py-[41px] px-[50px]">
          {Logo.map((png) => (
            <div className="">
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
