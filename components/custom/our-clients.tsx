export default function OurClients() {
  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
    "/clients/client7.png",
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[144px] py-[40px]">
        
        <div className="w-full flex flex-col items-center">
          
          <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-neutral-d-grey text-center">
            Our Clients
          </h2>

          <p className="mt-2 font-inter font-normal text-[16px] leading-[24px] text-neutral-grey text-center">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="w-full flex items-center justify-between mt-10">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client}
                alt={`client-${index}`}
                className="w-[48px] h-[48px] object-contain"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}