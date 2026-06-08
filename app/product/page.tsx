'use client';
import ProductPage from '@/components/custom/product';
import { useEffect, useState } from 'react';

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
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const products: Product[] = await res.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return <ProductPage products={products} />;
}