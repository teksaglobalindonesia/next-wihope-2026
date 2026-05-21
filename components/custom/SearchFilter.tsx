"use client"

import { useState } from "react";

type SearchFilterProps = {
  onFilterChange: (query: string, filterType: string, sortType: "asc" | "desc" | null) => void;
}

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
    const [query, setQuery] = useState("");
    const [filterType, setFilterType] = useState("title");

    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-white mb-4 w-full border border-slate-200">
                <div className="flex justify-between items-center gap-6">
                    <div className="relative group w-full">
                        <input
                            className="w-full pl-[45px] py-2 px-3 border border-blue-400 rounded-xl shadow-md text-base text-slate-800 transition duration-200 hover:ring-1 hover:ring-blue-500 focus:outline-none"
                            type="text" 
                            value={query}
                            placeholder={   filterType === "title"    ? "Search by title..." :
                                            filterType === "category" ? "Search by category..." :
                                            filterType === "price"    ? "Enter a maximum price..." : "Something went wrong..."}
                            onChange={(e) => setQuery(e.target.value)}/>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[22px] absolute inset-y-2.5 left-3 text-slate-500 transition duration-200 group-hover:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    <button 
                        className="bg-white border border-blue-400 shadow-md py-2 text-lg px-3 rounded-lg text-slate-500 font-semibold transition duration-200 hover:text-slate-800 hover:ring-1 hover:border-blue-500"
                        onClick={() => onFilterChange(query, filterType, null)}>Search</button>
                </div>
                
                <div className="flex justify-between items-center gap-6">
                    <select 
                        value={filterType}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setFilterType(e.target.value);
                            setQuery(""); 
                        }}
                        className="bg-white border border-blue-400 shadow-md text-lg w-[50%] py-2 px-3 rounded-lg text-slate-500 font-semibold transition duration-200 hover:text-slate-800 hover:ring-1 hover:border-blue-500 focus:outline-none">

                        <option value="title">Title</option>
                        <option value="category">Category</option>
                        <option value="price">Maximum Price</option>
                    </select>

                    <div className="flex gap-4">
                        <button 
                            className="flex justify-center gap-2 bg-white border border-red-500 shadow-md text-lg py-2 px-3 rounded-lg text-slate-500 font-semibold transition duration-200 hover:ring-1 hover:ring-red-500 hover:text-slate-800 hover:border-red-600"
                            onClick={() => onFilterChange(query, filterType, "asc")}>
                            Sort 
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h7m-7 6h7m-7 6h9m2-9l3-3l3 3m-3-3v12"></path>
                            </svg>
                        </button>

                        <button 
                            className="flex justify-center gap-2 bg-white border border-green-500 shadow-md text-lg py-2 px-3 rounded-lg text-slate-500 font-semibold transition duration-200 hover:ring-1 hover:ring-green-500 hover:text-slate-800 hover:border-green-600"
                            onClick={() => onFilterChange(query, filterType, "desc")}>
                            Sort 
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h9m-9 6h7m-7 6h7m4-3l3 3l3-3m-3-9v12"></path>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}