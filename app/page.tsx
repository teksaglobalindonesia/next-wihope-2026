import ProductListSection from "./sections/product-list";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <ProductListSection products={products} />
    </main>
  );
}