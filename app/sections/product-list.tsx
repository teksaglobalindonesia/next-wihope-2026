'use client';

import { useState, useEffect } from 'react';
import Card from '@/app/components/custom/card';
type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductListSection({
  products
}: {
  products: Product[];
}) {
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const [filterType, setFilterType] = useState('title');

  function sortASC() {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);

    setFilteredProducts(sorted);
  }

  function sortDESC() {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);

    setFilteredProducts(sorted);
  }

  function handleFilter() {
    const value = searchTitle.toLowerCase();

    const filtered = products.filter((product) => {
      if (filterType === 'all') {
        return (
          product.title.toLowerCase().includes(value) ||
          product.category.toLowerCase().includes(value) ||
          product.price.toString().includes(value)
        );
      }

      if (filterType === 'title') {
        return product.title.toLowerCase().includes(value);
      }

      if (filterType === 'category') {
        return product.category.toLowerCase().includes(value);
      }

      if (filterType === 'price') {
        return product.price.toString().includes(value);
      }

      return true;
    });

    setFilteredProducts(filtered);
  }
  return (
    <>
      {/* SEARCH + FILTER UI (TETAP) */}
      <div className="mx-2 mb-6 flex flex-col gap-4 ">
        <div className="flex items-center gap-3">
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M16 10.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search Product..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleFilter();
              }}
              className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleFilter}
            className="min-w-[150px] rounded-xl border border-blue-300 bg-white px-5 py-2 text-gray-700 transition hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="min-w-[150px] rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
          </select>

          <button
            onClick={sortASC}
            className=" flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2 text-gray-700 transition hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.22 2.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v7.69a.75.75 0 0 1-1.5 0V5.06l-.72.72A.75.75 0 0 1 .22 4.72zM7 12.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75-4a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5zm0-4.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <button
            onClick={sortDESC}
            className=" flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2 text-gray-700 transition hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.22 13.28a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.25a.75.75 0 0 0-1.5 0v7.69l-.72-.72a.75.75 0 1 0-1.06 1.06zM7 3.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7 3.25m.75 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 4.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mx-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h2 className="text-2xl font-bold text-gray-500">
                Product Tidak Ditemukan
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Coba cari dengan keyword lain
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
