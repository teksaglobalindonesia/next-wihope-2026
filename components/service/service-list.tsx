import GreenButton from "@/components/custom/green-button";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const services: Service[] = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    image: "/marketing/marketing-1.png",
    imageAlt: "Person working on laptop by window",
    reverse: false,
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    image: "/marketing/marketing-2.png",
    imageAlt: "Person working on financial documents with laptop",
    reverse: true,
  },
  {
    id: 3,
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    image: "/marketing/marketing-3.png",
    imageAlt: "Person working on laptop with notebook",
    reverse: false,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <section
        className={`w-full ${service.id === 1 || service.id === 3 ? "py-[40px]" : ""} ${service.reverse ? "bg-neutral-silver" : "bg-neutral-white"}`}
    >

    <div className="mx-auto flex h-[433px] w-[1440px] items-center">
  {service.reverse ? (
    <>
      <div className="flex h-[433px] flex-1 items-center ml-[144px]">
        <TextContent service={service} />
      </div>

      <div className="relative flex h-[433px] w-[368px] shrink-0 items-start justify-center pb-[40px] mr-[144px]">
        <ImageBox service={service} />
      </div>
    </>
  ) : (
    <>
      <div className="relative flex h-[433px] w-[368px] shrink-0 items-start justify-center pb-[40px] ml-[144px]">
        <ImageBox service={service} />
      </div>

      <div className="flex h-[433px] flex-1 items-center pl-[123px]">
        <TextContent service={service} />
      </div>
    </>
  )}
</div>
    </section>
  );
};

const ImageBox = ({ service }: { service: Service }) => {
  return (

    <div className="relative flex h-[433px] w-[368px] shrink-0 items-start justify-center pb-[40px]">
      
      <div className="relative overflow-hidden rounded-[8px] w-[368px] h-[286px] mt-[73px]">
        
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={368}
          height={286}
          className="object-cover w-full h-full"
          
        />

      </div>
    </div>
  );
};

const TextContent = ({ service }: { service: Service }) => {
  return (
    
    <div className="flex h-[224px] w-full max-w-[661px] flex-col gap-[32px]">
      
      <div className="flex h-[140px] w-[601px] flex-col gap-[16px]">
       
        <h2 className="w-[601px] h-[44px] font-inter font-semibold text-[36px] leading-[44px] tracking-normal text-neutral-d-grey">
          {service.title}
        </h2>
        
        <p className="text-neutral-grey w-[601px] h-[80px] font-inter font-normal text-[14px] leading-[20px] tracking-normal overflow-hidden">
          {service.description}
        </p>

      </div>
        <GreenButton>Learn More</GreenButton>
     </div>

  );
};

const ServiceList = () => {
  return (
    <main>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </main>
  );
};

export default ServiceList;