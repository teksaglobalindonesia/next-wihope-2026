"use client";

import { useState, useEffect } from "react";
import CardProducts from "./CardProducts";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const handleFilter = () => {
    const result = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.price.toString().includes(query)
    );
    setFiltered(result);
  };

  const handleSortASC = () => {
    const sorted = [...filtered].sort((a, b) => a.price - b.price);
    setFiltered(sorted);
  };

  const handleSortDESC = () => {
    const sorted = [...filtered].sort((a, b) => b.price - a.price);
    setFiltered(sorted);
  };

  return (
    <div className="p-[20px] bg-gray-100 h-screen">
      <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search from title, category, and kinda specific price LOL..."
            className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-all"
          />
          <button
            onClick={handleFilter}
            className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-xl hover:bg-white hover:text-black transition-all"
          >
            Cari
          </button>
          <button
            onClick={handleSortASC}
            className="px-4 py-2 text-sm font-medium border bg-blue-200 border-gray-200 rounded-xl hover:bg-gray-100 transition-all"
          >
            Sort ASC Price ↑
          </button>
          <button
            onClick={handleSortDESC}
            className="px-4 py-2 text-sm font-medium border bg-blue-200 border-gray-200 rounded-xl hover:bg-gray-100 transition-all"
          >
            Sort DESC Price ↓
          </button>
        </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {filtered.map((item) => (
          <CardProducts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};