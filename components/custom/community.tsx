export default function Community() {
  const community = [
    {
      image: '/Icon (1).svg',
      title: 'Membership Organisations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      titleWidth: 'w-[267px]',
      descWidth: 'w-[251px]',
      descHeight: 'h-[60px]'
    },
    {
      image: '/Icon (2).svg',
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      titleWidth: 'w-[267px]',
      descWidth: 'w-[240px]',
      descHeight: 'h-[80px]'
    },
    {
      image: '/Icon (3).svg',
      title: 'Clubs And Groups',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      titleWidth: 'w-[231px]',
      descWidth: 'w-[251px]',
      descHeight: 'h-[60px]'
    }
  ];
  return (
    <div className="w-full bg-white">
      <div className="mx-auto mt-10 flex h-[416px] max-w-[1440px] flex-col items-center gap-[16px]">
        <div className="flex h-[120px] flex-col items-center gap-[8px]">
          <h2 className="font-inter w-[542px] text-center text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Manage your entire community in a single system
          </h2>
          <p className="font-inter text-center text-[16px] leading-[24px] text-neutral-grey">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex w-full justify-between px-[144px] ">
          {community.map((community, index) => (
            <div
              key={index}
              className="flex h-[260px] w-[299px] flex-col items-center gap-[8px] rounded-[8px] px-[32px] py-[24px] shadow-[0px_2px_4px_0px_#ABBED133] hover:scale-105 transition-all duration-300"
            >
              <img
                src={community.image}
                alt="community image"
                width={64}
                height={56}
              />
              <h3
                className={`font-inter text-center text-[28px] font-bold leading-[36px] text-neutral-d-grey ${community.titleWidth}`}
              >
                {community.title}
              </h3>
              <p
                className={`font-inter text-center text-[14px] leading-[20px] text-neutral-grey ${community.descWidth} ${community.descHeight}`}
              >
                {community.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
