type SimpleHero = {
  title: string;
  highlightedTitle?: string;
  description?: string;
};

export default function SimpleHero({ title, highlightedTitle = '', description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.' }: SimpleHero) {
  return (
    <>
      <div className="flex h-[400px] w-full items-center justify-center bg-neutral-silver">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            {title}{' '}
            <span className="text-brand-primary">{highlightedTitle}</span>
          </h2>

          <p className="text-neutral-grey">
            {description}
          </p>
          
        </div>
      </div>
    </>
  );
}
