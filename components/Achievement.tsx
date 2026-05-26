export default function Achievement() {
  const stats = [
    {
      title: 'Members',
      value: '2,245,341',
      icon: '/Achivement4.png'
    },
    {
      title: 'Clubs',
      value: '46,328',
      icon: '/Achivement2.png'
    },
    {
      title: 'Event Bookings',
      value: '828,867',
      icon: '/Achivement1.png'
    },
    {
      title: 'Payments',
      value: '1,926,436',
      icon: '/Achivement3.png'
    }
  ];
  return (
    <div className="flex h-[288px] justify-center bg-neutral-silver">
      <div className="flex w-[1152px] items-center justify-between font-inter">
        <div className="flex h-[120px] w-[540px] flex-col">
          <p className="text-[36px] font-semibold leading-[44px] text-neutral-d_grey">
            Helping a local
          </p>
          <p className="text-[36px] font-semibold leading-[44px] text-brand-primary">
            business reinvent itself
          </p>
          <p className="mt-[8px] text-[16px] text-gray-900">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 w-[540px] h-[160px] gap-x-[30px] gap-y-[40px]">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-between w-[255px] h-[60px]">
              <img src={item.icon} alt={item.title} width={48} height={48} />

              <div>
                <h3 className="text-[28px] w-[191px] font-bold text-neutral-d_grey">
                  {item.value}
                </h3>

                <p className="text-neutral-grey">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
