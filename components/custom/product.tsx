'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';
import { useCartStore } from '@/stores/use-cart-store';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
};

type Toast = { id: number; text: string };

export default function ProductPage({ products }: { products: Product[] }) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const init: Record<number, number> = {};
    products.forEach((p) => (init[p.id] = 1));
    setQuantities(init);
  }, [products]);

  const changeQty = (id: number, delta: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] ?? 1) + delta) }));
  };

  const showToast = (text: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, text }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2800);
  };

  const handleAdd = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantities[product.id] ?? 1,
    });

    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500);
    showToast(`${product.title.slice(0, 32)}… added`);
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="w-full bg-neutral-silver">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 px-36 py-24 text-center">
          <h1 className="font-inter text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Our Products
          </h1>
          <p className="text-[16px] leading-6 text-neutral-grey">
            Discover our curated collection of quality products, from everyday essentials to premium picks — all in one place.
          </p>
        </div>
      </section>

      {/* Grid */}
      <main className="bg-neutral-silver px-5 py-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const qty = quantities[product.id] ?? 1;
            const isAdded = added[product.id];

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-neutral-white border border-neutral-grey-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden bg-neutral-silver">
                  <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  {/* Rating badge */}
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-neutral-white/90 px-2 py-1 backdrop-blur-sm">
                    <span className="text-[11px] text-action-warning">★</span>
                    <span className="text-[11px] font-semibold text-neutral-d-grey">{product.rating.rate}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-4 gap-2">

                  {/* Category pill */}
                  <span className="w-fit rounded-full bg-tint-tint-5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-shade-shade-2">
                    {product.category}
                  </span>

                  {/* Title */}
                  <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-neutral-d-grey">
                    {product.title}
                  </p>

                  {/* Description */}
                  <p className="line-clamp-2 text-[12px] leading-relaxed text-neutral-grey">
                    {product.description}
                  </p>

                  {/* Reviews count */}
                  <p className="text-[11px] text-neutral-l-grey">{product.rating.count} reviews</p>

                  {/* Divider */}
                  <div className="mt-auto border-t border-neutral-grey-blue pt-3">
                    {/* Price + Qty */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-inter text-[24px] font-bold text-primary-brand-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1 rounded-lg border border-neutral-grey-blue bg-neutral-silver px-2 py-1">
                        <button
                          onClick={() => changeQty(product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[15px] text-neutral-grey hover:text-neutral-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-[13px] font-semibold text-neutral-black">
                          {qty}
                        </span>
                        <button
                          onClick={() => changeQty(product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[15px] text-neutral-grey hover:text-neutral-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={isAdded}
                      className={`group/btn relative w-full overflow-hidden rounded-xl py-2.5 text-[13px] font-semibold transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 ${
                        isAdded
                          ? 'bg-action-success text-neutral-white'
                          : 'bg-primary-brand-primary text-neutral-white hover:bg-shade-shade-1'
                      }`}
                    >
                      {!isAdded && (
                        <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover/btn:translate-x-full" />
                      )}
                      {isAdded ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Added to cart!
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 1.5h1.5l1.8 6.5h6.4l1.3-4.5H4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="6" cy="12" r="0.9" fill="white" />
                            <circle cx="10" cy="12" r="0.9" fill="white" />
                          </svg>
                          Add to cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />

      {/* Toast */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex min-w-[220px] items-center gap-2 rounded-xl border border-neutral-grey-blue bg-neutral-white px-4 py-3 text-[12px] text-neutral-d-grey shadow-md"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary-brand-primary" />
            {toast.text}
          </div>
        ))}
      </div>
    </>
  );
}