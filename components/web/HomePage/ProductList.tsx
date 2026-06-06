'use client';

import { useState, useTransition, useEffect } from 'react';
import Button from './perButtonan/Button';
import { useCartStore } from '@/stores/use-cart-store';
type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: any;
};

export default function ProductList() {
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const addToCart = useCartStore((state: any) => state.addToCart);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setFiltered(data);
      } catch (error) {
        console.error('error datanya mrupy:', error);
      }
    })();
  }, []);

  return (
    <div className="flex justify-center font-inter">
      <div className="grid w-[1215px] grid-cols-3 gap-[16px]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex h-[586px] w-full flex-col justify-between rounded-[16px] border-[1px] border-neutral-grey p-[16px]"
          >
            <div className="flex h-[286px] w-full justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full"
              />
            </div>
            <div className="flex h-[184px] flex-col justify-between">
              <p className="line-clamp-2 h-[72px] text-[28px] font-bold leading-[36px] text-neutral-d_grey">
                {item.title}
              </p>
              <p className="line-clamp-3 leading-[20px] text-neutral-grey">
                {item.description}
              </p>
              <p className="text-[28px] font-bold leading-[36px] text-brand-primary">
                ${item.price}
              </p>
            </div>
            <div className="flex h-[52px] w-[303px] justify-between">
              <div className="flex w-[134px] items-center justify-between">
                <button
                  className="h-[52px] w-[52px] rounded-full bg-neutral-l_grey text-neutral-white"
                  onClick={() =>
                    setCounts((prev) => ({
                      ...prev,
                      [item.id]: Math.max(1, (prev[item.id] ?? 1) - 1)
                    }))
                  }
                >
                  -
                </button>
                <p className="text-[28px] font-bold leading-[36px] text-neutral-black">
                  {counts[item.id] ?? 1}
                </p>
                <button
                  className="h-[52px] w-[52px] rounded-full bg-neutral-l_grey text-neutral-white"
                  onClick={() =>
                    setCounts((prev) => ({
                      ...prev,
                      [item.id]: (prev[item.id] ?? 1) + 1
                    }))
                  }
                >
                  +
                </button>
              </div>
              <Button
                variant="primary"
                className="h-full w-[153px] text-[14px]"
                onClick={() => {
                  addToCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: counts[item.id] ?? 1
                  });
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
