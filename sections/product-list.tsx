"use client"

import { useEffect, useState } from "react";
import Card from "@/components/custom/Card";
import SearchFilter from "@/components/custom/SearchFilter";
import { Product } from "@/types/product";

export default function ProductListSection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");

            if(!response.ok) {
                throw new Error("Failed to fetch data dari API");
            }

            const result = await response.json();
            setProducts(result);
            setFilteredProducts(result);
        }

        fetchProducts();
    }, []);

    const handleSearchAndSort = (currentQuery: string, currentFilter: string, sortType: "asc" | "desc" | null) => {
        let filterResult = [...products];

        // Filter Search
        if (currentQuery.trim() !== "") {
            if (currentFilter === "title") {
                filterResult = filterResult.filter((p) => p.title.toLowerCase().includes(currentQuery.toLowerCase()));
            } else if (currentFilter === "category") {
                filterResult = filterResult.filter((p) => p.category.toLowerCase().includes(currentQuery.toLowerCase()));
            } else if (currentFilter === "price") {
                filterResult = filterResult.filter((p) => p.price <= Number(currentQuery));
            }
        }

        // Sort (Ascending / Descending)
        if (sortType) {
            filterResult.sort((a, b) => {
                let valueA = a[currentFilter as keyof Product];
                let valueB = b[currentFilter as keyof Product];

                if (typeof valueA === "string" && typeof valueB === "string") {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }

                if (sortType === "asc") return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
                return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
            });
        }

        setFilteredProducts(filterResult);
    };

    return (
        <>
            <SearchFilter onFilterChange={handleSearchAndSort} />
            {filteredProducts.length === 0 ? (
                <p className="text-slate-500 font-bold text-xl w-fit mx-auto my-6">Produk tidak ditemukan 🥲</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-fit mx-auto p-4">
                    {filteredProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    )
}