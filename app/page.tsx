"use client";

import React, { useState, useEffect } from "react";
import ProductList from "@/sections/product-list";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8 p-6">
      <ProductList products={products} />
    </div>
  );
}