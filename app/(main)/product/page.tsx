import ProductList from "@/components/custom/product/product-list";
import SimpleHero from "@/components/custom/simple-hero";

export default function ProductPage() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <SimpleHero title="Product"/>
        <ProductList/>
      </div>
    </>
  );
}