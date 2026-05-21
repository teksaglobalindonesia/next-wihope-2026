"use client";

import { useState } from "react";

type CardProps = {
  item: {
    image: string;
    title: string;
    category: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    price: number;
  };
};

export default function Card({ item }: CardProps) {
  const [expanded, setExpanded] = useState(false);

  function toggleDesc() {
    setExpanded(!expanded);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

      <div className="bg-gray-50 flex items-center justify-center h-44 p-6">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-32 object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">

        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 border border-gray-200 rounded-full px-2 py-0.5 w-fit">
          {item.category}
        </span>

        <h2 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
          {item.title}
        </h2>

        <p
          className={`text-xs text-gray-400 leading-relaxed ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {item.description}
        </p>

        <button
          onClick={toggleDesc}
          className="text-xs text-blue-500 hover:text-blue-700 text-left transition"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>

            <span className="font-medium text-gray-600">
              {item.rating.rate}
            </span>
          </span>

          <span>
            {item.rating.count} reviews
          </span>
        </div>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1">

          <span className="text-lg font-bold text-gray-900">
            ${item.price}
          </span>

          <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all">
            Buy
          </button>

        </div>
      </div>
    </div>
  );
}