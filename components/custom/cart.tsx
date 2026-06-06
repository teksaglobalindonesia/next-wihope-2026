'use client';
import { useEffect, useState } from 'react';
import Button from '../Function/button';
import { useCartStore } from '@/stores/use-cart-store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const { increaseQuantity, decreaseQuantity, removeCart} = useCartStore();

  const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

  if (cart.length === 0) {
    return (
      <div className="my-[40px] text-center">
        <p className='text-[16px] font-inter'>--- Your cart is empty ---</p>
      </div>
    );
  }

  return (
    <div className="mt-[40px] w-full bg-white px-[50px] pb-[16px] font-inter">
      <div className="flex flex-col items-center gap-[16px]">
        {cart.map((item) => (
          <div
            className="flex h-[240px] w-[1215px] gap-[24px] overflow-hidden rounded-[16px] border border-neutral-grey bg-white p-[16px]"
            key={item.id}
          >
            <div className="flex size-[200px] shrink-0 items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                quality={100}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[2px]">
                <p className="line-clamp-1 text-[28px] font-bold text-neutral-d_grey">
                  {item.title}
                </p>
                <div className="flex h-[52px] w-[138px] items-center justify-between">
                  <div className="flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-neutral-l_grey text-white" onClick={() => decreaseQuantity(item.id)}>
                    <p>-</p>
                  </div>
                  <p className="text-[28px] font-bold text-neutral-black">
                    {item.quantity}
                  </p>
                  <div className="flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-neutral-l_grey text-white" onClick={() => increaseQuantity(item.id)}>
                    <p>+</p>
                  </div>
                </div>
                <p className="text-[28px] font-bold text-brand-primary">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="h-[52px] w-[203px] rounded-[4px] bg-action-error text-white hover:bg-red-700 transition-all ease-in-out duration-300" onClick={() => removeCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-[16px] text-[28px] font-bold text-neutral-d_grey">
        Cart Total: ${totalPrice.toFixed(2)}
      </p>
    </div>
  );
}
