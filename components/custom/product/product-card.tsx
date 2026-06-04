'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Product } from '@/types/type';
import { useCartStore } from '@/stores/use-cart-store';
import { toast } from 'sonner';

type ProductCard = {
  product: Product;
};

export default function ProductCard({ product }: ProductCard) {
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isInCart = isMounted && cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added a product to your cart!`, {
      description: `${product.title}`,
    });
  };

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-slate-50">
        <div className="relative h-[80%] w-[80%]">
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {product.category}
        </span>

        <h3 className="line-clamp-3 min-h-[48px] text-base font-semibold leading-tight text-slate-800">
          {product.title}
        </h3>

        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
          <span className="flex items-center text-amber-500">
            ★{' '}
            <span className="ml-1 font-semibold text-slate-700">
              {product.rating.rate}
            </span>
          </span>
          <span className="text-slate-300">•</span>
          <span>{product.rating.count} Reviews</span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
          {product.description}
        </p>

        <span className="text-lg font-bold text-slate-900">
          ${product.price}
        </span>

        <div className="mt-auto flex flex-col gap-3 pt-1">
          <div className="flex items-center justify-between border-y border-slate-50 py-2">
            <span className="text-xs font-semibold uppercase tracking-tight text-slate-500">
              Quantity
            </span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 rounded-full border-slate-200"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <Minus className="size-3" />
              </Button>
              <span className="min-w-4 text-center text-sm font-bold text-slate-700">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 rounded-full border-slate-200"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Plus className="size-3" />
              </Button>
            </div>
          </div>

          <Button
            variant="standardSecondary"
            size="small"
            className="w-full"
            disabled={isInCart}
            onClick={handleAddToCart}
          >
            {isInCart ? (
              'Added to Cart'
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
