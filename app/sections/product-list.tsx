"use client";

import { useState } from "react";
import Card from "@/components/custom/card";

export default function ProductListSection({ products }: any) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState("");

  function sortASC() {
    setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
  }

  function sortDESC() {
    setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
  }

  function handleSearch() {
    const result = products.filter((p: any) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }

  return (
    <div className="space-y-4">

      {/* SEARCH */}
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch} className="px-4 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>

      {/* SORT */}
      <div className="flex gap-2">
        <button onClick={sortASC} className="px-3 py-2 bg-green-500 text-white rounded">
          ASC
        </button>

        <button onClick={sortDESC} className="px-3 py-2 bg-red-500 text-white rounded">
          DESC
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product: any) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}