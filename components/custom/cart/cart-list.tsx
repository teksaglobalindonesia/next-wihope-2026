'use client';

import Link from 'next/link';
import CartCard from './cart-card';
import { useCartStore } from '@/stores/use-cart-store';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Trash2, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function CartList() {
  const { cart, getTotalPrice, clearCart } = useCartStore();

  const handleRemoveAll = () => {
    clearCart();
    toast.success("Every added product has been removed from cart!");
  }

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <>
      <div className="flex w-full flex-col justify-center items-center gap-2 bg-neutral-white mb-6">
        <div className="grid grid-cols-1 w-full max-w-7xl gap-6 px-6">
          {cart.map((item) => (
            <CartCard key={item.id} product={item.product} />
          ))}
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-6 text-neutral-l-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>

            <p className="text-lg">
              No products were added to the cart.{' '}
              <Link href="/product" className="text-brand-primary">
                Add Products...
              </Link>
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full max-w-6xl py-2 px-4 bg-neutral-white rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <p className="mt-4 text-[28px] font-bold leading-[36px] text-neutral-d-grey">
              Cart Total: {formatterUSD.format(getTotalPrice())}
            </p>
          
          <div className="flex gap-2">
            {/* Remove all */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="default"
                  className=" text-red-400 hover:bg-red-50 hover:text-red-500 flex items-center"
                >
                  <Trash2 className="!size-6" />
                  Remove All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Remove All Product
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove every product from your cart?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleRemoveAll}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Complete Purchase */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="default"
                  className=" text-green-400 hover:bg-green-50 hover:text-green-500 flex items-center"
                >
                  <CheckCheck className="!size-6" />
                  Complete Purchase
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Complete Purchase
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to complete your purchase of {formatterUSD.format(getTotalPrice())}?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleRemoveAll}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Purchase
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
            
          </div>
          
        )}
      </div>
    </>
  );
}
