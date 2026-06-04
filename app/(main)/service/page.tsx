import Quote from '@/components/custom/service/quote';
import ServiceList from '@/components/custom/service/service-list';
import SimpleHero from '@/components/custom/simple-hero';

export default function ServicePage() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <SimpleHero title="Our" highlightedTitle="Service" />
        <ServiceList />
        <Quote />
      </div>
    </>
  );
}
