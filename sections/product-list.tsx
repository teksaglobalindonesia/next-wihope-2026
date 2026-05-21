"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/custom/card";

interface ProductListProps {
  products: any[];
}

export default function ProductList({ products }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = () => {
    const query = searchQuery.toLowerCase();
    const result = products.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchCategory = item.category.toLowerCase().includes(query);
      const matchPrice = item.price.toString().includes(query);
      return matchTitle || matchCategory || matchPrice;
    });
    setFilteredProducts(result);
  };

  const handleSortAsc = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const handleSortDesc = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 items-center mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 w-full max-w-xs text-black"
        />

        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
        >
          Cari
        </button>

        <button
          onClick={handleSortAsc}
          className="bg-slate-700 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-lg transition-all"
        >
          Sort ASC Price ↑
        </button>

        <button
          onClick={handleSortDesc}
          className="bg-slate-700 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-lg transition-all"
        >
          Sort DESC Price ↓
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}