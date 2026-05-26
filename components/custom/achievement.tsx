export default function Achievements() {
  const achievements = [
    {
      image: '/Icon (4).svg',
      title: '2,245,341',
      description: 'Members'
    },
    {
      image: '/Icon (tangan).png',
      title: '46,328',
      description: 'Clubs'
    },
    {
      image: '/Icon (6).svg',
      title: '828,867',
      description: 'Event Bookings'
    },
    {
      image: '/Icon (7).svg',
      title: '1,926,436',
      description: 'Payments'
    }
  ];
  return (
    <div className="flex h-[288px] w-full flex-row items-center justify-between bg-neutral-silver px-[144px] py-[64px] gap-[72px]">
      <div className="mx-auto flex h-[120px] w-[540px] flex-col gap-[8px]">
        <h2 className="font-inter text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
          Helping a local <br />
          <span className="text-brand-primary">business reinvent itself</span>
        </h2>
        <p className="font-inter text-[16px] leading-[24px] text-gray-900">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="mx-auto grid h-[160px] w-[540px] grid-cols-2 gap-[40px]">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex h-[60px] w-[255px] items-center gap-[16px] "
          >
            <img
              src={achievement.image}
              alt="achievement image"
              width={48}
              height={48}
            />

            <div className="flex flex-col">
              <h3 className=" font-inter  text-[28px] font-bold leading-[36px] text-neutral-d-grey">
                {achievement.title}
              </h3>
              <p className="font-inter  text-[16px] leading-[24px] text-neutral-grey">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
