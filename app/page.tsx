import ProductListSection from "@/sections/product-list";

async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products"
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