type MiniHeroProps = {
  Title?: string;
  Description?: string;
};

export default function MiniHero({
  Title = "Title",
  Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
}: MiniHeroProps) {
  return (
    <div className="flex h-[308px] flex-col items-center justify-center gap-[16px] bg-neutral-silver font-inter">
      <p className="text-[64px] leading-[76px] font-semibold text-neutral-d_grey">
        {Title}
      </p>
      <p className="text-[16px] text-neutral-grey">
        {Description}
      </p>
    </div>
  );
}