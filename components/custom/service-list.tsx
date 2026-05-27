export default function ServiceList() {
    const services = [
    {
      image: '/image 18.png',
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
      
    },
    {
      image: '/image 19.png',
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
    },
    {
      image: '/image 20.png',
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
    }
  ];
    
    return(
        <div className="flex flex-col gap-[40px]">
  {services.map((service, index) => {
    const isEven = index % 2 === 0;

    return (
      <section
        key={index}
        className={`w-full h-[433px] 
        ${isEven ? 'bg-white' : 'bg-neutral-silver'}`}
      >
        <div
          className={`mx-auto flex h-full max-w-[1440px] items-center justify-between px-[144px]
          ${isEven ? 'flex-row' : 'flex-row-reverse'  }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-[343px] w-[442px] object-contain hover:shadow-lg hover:scale-105 transition-all duration-300"
          />

          <div className="flex w-[600px] flex-col gap-[24px]">
            <h2 className="text-[36px] font-semibold">
              {service.title}
            </h2>

            <p>{service.description}</p>

             <button className="font-inter text-center w-[151px] h-[52px] rounded-[4px] bg-brand-primary gap-[10px] px-[32px] py-[14px] text-[16px] font-medium leading-[24px] text-white transition-all duration-300 hover:bg-shade-3">
          Learn more
        </button>

          </div>
        </div>
      </section>
    );
  })}
</div>
    )
}