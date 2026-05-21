import ProductListSection from "./sections/product-list";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teksa Digital</h1>

      <ProductListSection products={products} />
    </div>
  );
}