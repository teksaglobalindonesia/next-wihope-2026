import ProductListSection from "@/sections/product-list";

async function getProducts() {
  const res = await fetch(
    "https://next-wihope-2026-git-widhi-test-teksa-digitals-projects.vercel.app/products.json"
  );

  return res.json();
}

export default async function Page() {

  const products = await getProducts();

  return (
    <div>
      <ProductListSection products={products} />
    </div>
  );
}