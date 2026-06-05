'use client';

import Image from 'next/image';
import { useCartStore } from '@/stores/use-cart-store';

export default function CartContent() {
  const { cart, removeFromCart, updateQuantity } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    updateQuantity: state.updateQuantity,
  }));

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id: number) => {
    const item = cart.find((p) => p.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decreaseQuantity = (id: number) => {
    const item = cart.find((p) => p.id === id);
    if (item) updateQuantity(id, Math.max(1, item.quantity - 1));
  };

  return (
    <section className="bg-neutral-white min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl flex flex-col gap-4">

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M6 6h4.5l6 21h19.5l4.5-15H15" stroke="#ABBED1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="40" r="2.5" fill="#ABBED1"/>
              <circle cx="33" cy="40" r="2.5" fill="#ABBED1"/>
            </svg>
            <p className="font-inter text-[16px] text-neutral-grey">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-neutral-grey-blue bg-neutral-white p-4 transition-all duration-200 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-xl bg-neutral-silver self-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 w-full">
                  {/* Title + Remove */}
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-inter text-[14px] font-semibold leading-snug text-neutral-d-grey line-clamp-2 flex-1">
                      {item.title}
                    </h2>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-neutral-l-grey hover:text-action-error hover:bg-red-50 transition-all"
                      aria-label="Remove item"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 3h10M5 3V2h4v1M3.5 3l.5 9h6l.5-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Price per item */}
                  <p className="text-[12px] text-neutral-l-grey">
                    ${item.price.toFixed(2)} / item
                  </p>

                  {/* Qty + Subtotal */}
                  <div className="flex items-center justify-between mt-1">
                    {/* Qty */}
                    <div className="flex items-center gap-1 rounded-lg border border-neutral-grey-blue bg-neutral-silver px-2 py-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-7 h-7 flex items-center justify-center text-[16px] text-neutral-grey hover:text-neutral-black transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-[14px] font-semibold text-neutral-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-7 h-7 flex items-center justify-center text-[16px] text-neutral-grey hover:text-neutral-black transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="font-inter text-[20px] font-bold text-primary-brand-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className="flex items-center justify-between rounded-2xl border border-neutral-grey-blue bg-neutral-silver px-6 py-4">
              <span className="font-inter text-[14px] font-medium text-neutral-grey">
                Total ({cart.length} item{cart.length !== 1 ? 's' : ''})
              </span>
              <span className="font-inter text-[22px] font-bold text-neutral-d-grey">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </>
        )}

      </div>
    </section>
  );
}