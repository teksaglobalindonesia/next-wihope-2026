import { Product } from '@/types/type';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { toast } from 'sonner';

type CartCard = {
  product: Product;
};

export default function CartCard({ product }: CartCard) {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  // Find current item in store
  const quantity = cart.find((item) => item.id === product.id)?.quantity || 0;
  const totalPrice = product.price * quantity;

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    toast.success(`${product.title} has been removed from cart!`);
  };

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <>
      <div className="group mb-4 flex w-full overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="relative flex aspect-square size-30 shrink-0 items-center justify-center overflow-hidden bg-slate-50">
          <div className="relative h-[70%] w-[70%]">
            <Image
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              src={product.image}
              alt={product.title}
              fill
              sizes="120px"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="line-clamp-2 text-2xl font-semibold leading-tight text-slate-800">
                {product.title}
              </h3>
              <span className="text-3xl font-bold text-slate-900">
                {formatterUSD.format(totalPrice)}
              </span>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <Trash2 className="!size-6" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Remove Item
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove {product.title} from your cart?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleRemoveFromCart}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
          </div>

          <div className="flex items-center justify-between border-t border-slate-50 pt-6">
            <span className="text-sm font-semibold uppercase tracking-tight text-slate-500">
              Quantity
            </span>
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-slate-200"
                disabled={quantity <= 1}
                onClick={() => updateQuantity(product.id, quantity - 1)}
              >
                <Minus className="size-4" />
              </Button>
              <span className="min-w-6 text-center text-xl font-bold text-slate-700">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-slate-200"
                onClick={() => updateQuantity(product.id, quantity + 1)}
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
