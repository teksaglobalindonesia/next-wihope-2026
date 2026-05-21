import ProductList from '@/sections/product-list';

async function getProducts() {
  try {
    const response = await fetch(
      'https://next-wihope-2026-git-widhi-test-teksa-digitals-projects.vercel.app/products.json',
    );

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <ProductList products={products} />
      </div>
    </>
  );
}
