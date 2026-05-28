import Image from "next/image";
import GreenButton from "@/components/custom/green-button";

const UnseenSpending = () => {
  return (
    <section className="w-full max-w-[1440px] h-[433px] flex items-center justify-center gap-[32px] overflow-x-auto">

      <Image
        src="/unseen-spending.png"
        alt="Unseen Spending"
        width={442}
        height={433}
      />

      <div className="w-[661px] h-[268px] flex flex-col gap-[32px]">

        <div className="w-[601px] flex flex-col">

  
            <h2 className="w-[601px] h-[88px] font-inter text-[36px] leading-[44px] font-semibold text-neutral-d-grey">
                The unseen of spending three <br />
                years at Pixelgrade
            </h2>

            <p className="w-[601px] mt-[16px] font-inter text-[14px] leading-[20px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam 
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>

        </div>

            <GreenButton>
                Learn More
            </GreenButton>
      </div>
    </section>
  );
};

export default UnseenSpending;