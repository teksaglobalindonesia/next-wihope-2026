'use client';

import { useEffect, useState } from 'react';

import Header from '@/components/web/HomePage/Header&Footer/header';
import Footer from '@/components/web/HomePage/Header&Footer/Footer';
import MiniHero from '@/components/web/HomePage/Header&Footer/MiniHero';
import { useCartStore } from '@/stores/use-cart-store';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const resetCart = useCartStore((state) => state.resetCart);

  if (!mounted) return null;

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="">
      <Header />
      <div className="mt-[84px]"></div>
      <MiniHero Title="Cart" />
      <p>Cart ({totalItems})</p>
      <p>Total: ${totalPrice}</p>;
      <button onClick={resetCart}>Reset Cart</button>
      <Footer />
    </div>
  );
}
