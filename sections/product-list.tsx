"use client"

import { useEffect, useState } from "react";
import Card from "@/components/custom/Card";
import SearchFilter from "@/components/custom/SearchFilter";
import { Product } from "@/types/product";

export default function ProductListSection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                
                if (!response.ok) {
                throw new Error("Failed to fetch data");
                }
                
                const result = await response.json();
                setProducts(result);
                setFilteredProducts(result);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
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

            {
                // Loading process
                isLoading ? (
                    <div className="flex justify-center items-center my-12">
                        <p className="text-blue-600 font-bold text-lg animate-pulse">Memuat Produk...</p>
                    </div>
                ) :

                // Checks if filtered products is empty
                filteredProducts.length === 0 ? (
                    <div className="flex justify-center items-center my-12">
                        <p className="text-blue-600 font-bold text-lg animate-pulse">Produk tidak ditemukan... 😐</p>
                    </div>
                ) : 

                // Main content
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-fit mx-auto p-4">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                )
            }
        </>
    )
}