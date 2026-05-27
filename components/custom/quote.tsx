export default function Quote() {
const Logo = [
    "/Logo (15).svg",
    "/Logo (10).svg",
    "/Logo (9).svg",
    "/Logo (11).svg",
    "/Logo (12).svg",
    "/Logo (13).svg"
  ];
    return (
    <div className=" px-[144px] py-[32px] w-full h-[390px] flex justify-center gap-[78px] items-center  bg-neutral-silver"> 
   
   <div className="flex justify-center items-center w-[326px] h-[326px] rounded-[8px] shadow-[0_8_16_0_#ABBED166]">
        <img alt="hero" src="/image 9.png" width={326} height={326} />
      </div>
      
      <div className=" flex flex-col max-w-[748px] h-[324px] gap-[32px] justify-center">
        <div className="flex flex-col w-[748px] h-[224px] gap-[16px] justify-center align-middle">

          <p className="font-inter text-[16px] leading-[24px] text-neutral-grey w-[748px] h-[168px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h4 className="h-[28px] font-inter text-[20px] font-semibold leading-[28px] text-brand-primary">
           Tim Smith
          </h4>

          <p className="font-inter text-[16px] leading-[24px] text-neutral-l-grey h-[24px]">
           British Dragon Boat Racing Association
          </p>
        </div>

        <div className="w-[748px] h-[48px] gap-[48.65px] flex items-center ">
            {Logo.map((logo, index) => (
            <img
              key={index}
              alt={`Client logo ${index + 1}`}
              src={logo}
              width={40}
              height={40}
              className="hover:bg-[#5417D7] hover:scale-[1.025] transition-all duration-200"
            />
          ))}
<button className="w-[223px] h-[44px] p-[8px] text-brand-primary font-inter font-semibold text-[20px] leading-[28px] text-center">Meet all customers →</button>
        </div>
</div>
</div>

)
}
