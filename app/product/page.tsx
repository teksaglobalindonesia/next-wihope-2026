import ProductPage from '@/components/custom/product';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
};

export default async function Page() {
  const res = await fetch('https://fakestoreapi.com/products', 
  );
  const products: Product[] = await res.json();

  return <ProductPage products={products} />;
}