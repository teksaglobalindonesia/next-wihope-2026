import React from "react";

interface ProductItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface CardProps {
  item: ProductItem;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="border border-black cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-200 border-white hover:border-slate-700 rounded-xl p-4 shadow-sm bg-white">
      <div>
        <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4 rounded-lg bg-slate-50 p-2">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
      <p className="font-bold text-base line-clamp-2 mb-1">{item.title}</p>
      <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
        {item.category}
      </p>
      <p className="text-blue-600 font-semibold mb-2">${item.price}</p>
      <div className="text-sm text-amber-500 font-medium">
        ⭐ {item.rating?.rate} ({item.rating?.count} ulasan)
      </div>
      <button className="bg-white text-green-400 px-5 py-2 my-4 rounded-2xl font-semibold hover:bg-green-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
        + Add to Cart
      </button>
    </div>
  );
}