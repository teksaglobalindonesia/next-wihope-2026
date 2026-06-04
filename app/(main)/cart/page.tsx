import CardList from "@/components/custom/cart/cart-list";
import SimpleHero from "@/components/custom/simple-hero";

export default function CartPage() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <SimpleHero title="Cart"/>
        <CardList/>
      </div>
    </>
  );
}
