import ProductList from '@/sections/product-list';

export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store'
    });

    const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      cache: 'no-store'
    });
    console.log('Response 2:', response2);

    if (!response.ok) {
      throw new Error('Failed to fetch data dari API');
    }

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
