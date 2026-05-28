export default function OurClient(){
  return (
    <div className="h-[190px] flex flex-col items-center justify-between">
      <div className="flex flex-col font-inter gap-[8px]">
        <p className="text-center text-neutral-d_grey font-semibold text-[36px] leading-[44px] ">Our Client</p>
        <p className="text-neutral-grey leading-[24px] text-[14px]">We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="flex w-[1152px] h-[98px] items-center justify-between">
        <img className="h-[48px] w-[48px]" src="/Client1.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client3.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client2.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client5.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client6.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client7.png" alt="logo" />
        <img className="h-[48px] w-[48px]" src="/Client4.png" alt="logo" />
      </div>
    </div>
  )
}