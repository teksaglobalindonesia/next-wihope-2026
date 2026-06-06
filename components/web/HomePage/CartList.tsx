'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/use-cart-store';
import Button from './perButtonan/Button';

export default function CartList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useCartStore((state) => state.items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex justify-center font-inter">
      <div className="w-[1215px] flex flex-col gap-[16px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex h-[240px] justify-between rounded-[16px] border-[1px] border-neutral-grey px-[16px] py-[16px]"
          >
            <div className="flex h-[200px] w-[200px] justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full"
              />
            </div>

            <div className="flex w-[959px] flex-col justify-between">
              <div className="flex h-[140px] flex-col justify-between">
                <p className="line-clamp-1 text-[28px] font-bold leading-[36px] text-neutral-d_grey">
                  {item.title}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    className="h-[52px] w-[52px] rounded-full bg-neutral-l_grey text-neutral-white"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span className="text-[28px] font-bold leading-[36px] text-neutral-black">{item.quantity}</span>

                  <button
                    className="h-[52px] w-[52px] rounded-full bg-neutral-l_grey text-neutral-white"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <p className="text-[28px] font-bold leading-[36px] text-brand-primary">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <Button
                variant="primary"
                className="h-[52px] w-[203px] text-[16px] !bg-action-error"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </Button>
            </div>
          </div>
        ))}
        <p className="text-[28px] font-bold leading-[36px] text-neutral-black">Total: ${totalPrice}</p>
      </div>
    </div>
  );
}
