"use client";

import { useState } from "react";
import Card from "@/components/custom/card";

interface Product {
  id: string | number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductListSectionProps {
  products: Product[];
}

export default function ProductListSection({ products }: ProductListSectionProps) {

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("title");
  const [filteredProducts, setFilteredProducts] =
    useState(products);

  function filterTitle() {

    const result = products.filter((item) => {

      if (filterType === "title") {
        return item.title
          .toLowerCase()
          .includes(search.toLowerCase());
      }

      if (filterType === "category") {
        return item.category
          .toLowerCase()
          .includes(search.toLowerCase());
      }

      if (filterType === "price") {
        return Math.floor(item.price) === Number(search);
    }

    });

    setFilteredProducts(result);
  }

  function sortAscPrice() {

    const sorted = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );

    setFilteredProducts(sorted);
  }

  function sortDescPrice() {

    const sorted = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );

    setFilteredProducts(sorted);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="text-center mb-8">

        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Modern Products
        </h1>

        <p className="text-gray-400 mt-2 text-base">
          Discover premium collections
        </p>

      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-8 max-w-5xl mx-auto flex items-center gap-3 overflow-x-auto shadow-sm">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] border border-gray-200 px-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-200 px-3 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap"
        >
          <option value="title">Title</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
        </select>

        <button
          onClick={filterTitle}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700"
        >
          Cari
        </button>

        <button
          onClick={sortAscPrice}
          className="bg-emerald-500 text-white px-5 py-2 rounded-xl text-sm font-semibold"
        >
          ↑ ASC Price
        </button>

        <button
          onClick={sortDescPrice}
          className="bg-rose-500 text-white px-5 py-2 rounded-xl text-sm font-semibold"
        >
          ↓ DESC Price
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}

      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-400 mt-12 text-sm">
          No products found.
        </p>
      )}

    </div>
  );
}