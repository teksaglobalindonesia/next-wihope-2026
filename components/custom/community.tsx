export default function Community() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto mt-10 flex h-[416px] max-w-[1440px] flex-col items-center gap-[16px]">
        <div className="flex h-[120px] flex-col items-center gap-[8px]">
          <h2 className="font-inter text-neutral-d-grey w-[542px] text-center text-[36px] font-semibold leading-[44px]">
            Manage your entire community in a single system
          </h2>
          <p className="font-inter text-neutral-grey text-center text-[16px] leading-[24px]">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/*kurang 2 cardnya + img */}
        <div className="flex w-full justify-between px-[144px]">
          <div className="flex h-[260px] w-[299px] flex-col items-center gap-[8px] rounded-[8px] px-[32px] py-[24px] shadow-[0px_2px_4px_0px_#ABBED133]">
            <img alt="community image" src="" width={48} height={48} />
            <h3 className="font-inter text-center text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
              Membership Organisations
            </h3>

            <p className="font-inter text-center text-[14px] leading-[20px] text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
