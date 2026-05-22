'use client';
import { useState, useEffect } from 'react';
import ProductCard from './FunctionProductsCard';

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  function handleFilter() {
    const hasilFilter = products.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toString().includes(search)
    );

    setFilteredProducts(hasilFilter);
  }

  function sortASC() {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);

    setFilteredProducts(sorted);
  }

  function sortDESC() {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);

    setFilteredProducts(sorted);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-10 text-center text-4xl font-bold">Product List</h1>

      <div className="mb-[10px] flex justify-center gap-4">
        <input
          type="text"
          placeholder="Cari title, category, atau price..."
          className="w-full rounded-xl border border-gray-300 p-3 transition-all duration-300 ease-in-out hover:ring-1 hover:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleFilter}
          className="min-w-[100px] rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-white hover:bg-none hover:text-black hover:ring-1 hover:ring-black"
        >
          Cari
        </button>
      </div>

      <div className="mb-10 flex justify-center gap-4">
        <button
          onClick={sortASC}
          className="w-full rounded-xl border border-blue-400 bg-white px-6 py-3 font-medium transition-all ease-in-out hover:ring-1 hover:ring-blue-500"
        >
          ↑ Price
        </button>

        <button
          onClick={sortDESC}
          className="w-full rounded-xl border border-blue-400 bg-white px-6 py-3 font-medium transition-all ease-in-out hover:ring-1 hover:ring-blue-500"
        >
          ↓ Price
        </button>
      </div>

      <div className="grid gap-6 max-[550px]:grid-cols-1 min-[550px]:grid-cols-2  min-[768px]:grid-cols-3 ">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
