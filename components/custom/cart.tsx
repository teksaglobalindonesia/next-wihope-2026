'use client';
import Link from 'next/link';
import { useCartStore } from '@/stores/use-cart-store';
import Swal from 'sweetalert2'

export default function Cart() {
  const carts = useCartStore((state: any) => state.carts);

  const setCarts = useCartStore((state: any) => state.setCarts);

  const handleIncrease = (id: number) => {
    const updatedCarts = carts.map((item: any) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setCarts(updatedCarts);
  };

  const handleDecrease = (id: number) => {
    const updatedCarts = carts.map((item: any) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1
          }
        : item
    );

    setCarts(updatedCarts);
  };

  const handleRemove = async (id: number) => {
  const result = await Swal.fire({
    title: 'Remove Product?',
    text: 'Are you sure you want to remove this item from cart?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, remove it!',
    cancelButtonText: 'Cancel',
    buttonsStyling: false,
    customClass: {
      confirmButton:
        'bg-brand-primary text-white px-4 py-2 rounded-lg mr-2',
      cancelButton:
        'bg-red-500 text-white px-4 py-2 rounded-lg',
    },
  });

  if (result.isConfirmed) {
    const updatedCarts = carts.filter(
      (item: any) => item.id !== id
    );

    setCarts(updatedCarts);

    Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'Product successfully removed from cart.',
      timer: 1500,
      showConfirmButton: false,
    });
  }
};

  const total = carts.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  if (carts.length === 0) {
  return (
    <div>
      <div className="flex h-[308px] w-full items-center justify-center bg-neutral-silver px-[144px] py-[96px]">
        <div className="flex flex-col items-center gap-[32px]">
          <h1 className="font-inter text-center text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Cart
          </h1>

          <p className="font-inter text-center text-[16px] leading-[24px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="text-8xl"></div>

        <h2 className="text-[24px] font-bold text-neutral-d-grey">
          No Product Yet
        </h2>

        <p className="text-neutral-grey">
          Your cart is empty.
        </p>

        <Link
          href="/product"
          className="rounded-md px-6 py-3 text-brand-primary hover:border hover:opacity-90"
        >
          🛒Add Product
        </Link>
      </div>
    </div>
  );
}

  return (
    <div>
      {/* Hero Section */}
      <div className="flex h-[308px] w-full items-center justify-center bg-neutral-silver px-[144px] py-[96px]">
        <div className="flex flex-col items-center gap-[32px]">
          <h1 className="font-inter text-center text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
            Cart
          </h1>

          <p className="font-inter text-center text-[16px] leading-[24px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum.
          </p>
        </div>
      </div>

      <div className="px-[144px] py-[64px]">
        <div className="flex flex-col gap-4">
            {carts.map((item: any) => (
                <div
  key={item.id}
  className="w-full h-[240px] rounded-2xl border border-gray-300 p-4"> 
  
<div className="flex gap-6">
    <img
  src={item.image}
  alt={item.title}
  className="w-[200px] h-[200px] object-contain"
/>

<div className="flex flex-1 flex-col gap-4">
    <h2 className="text-[18px] font-bold">
  {item.title}
</h2>

<div className="flex items-center gap-2">
    <button
  onClick={() =>
    handleDecrease(item.id)
  }
  className="h-8 w-8 rounded-lg border border-gray-300"
>
  -
</button> 

<span className="font-semibold">
  {item.quantity}
</span>

<button
  onClick={() =>
    handleIncrease(item.id)
  }
  className="h-8 w-8 rounded-lg border border-gray-300"
>
  +
</button>
</div>

<p className="text-[24px] font-bold text-brand-primary">
  $
  {(item.price * item.quantity).toFixed(2)}
</p>

<button
  onClick={() =>
    handleRemove(item.id)
  }
  className="w-fit rounded-lg border border-red-500 px-4 py-2 text-xs font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
>
  Remove from Cart
</button>
</div>
</div>
        </div>
     
      ))}
      </div>

<div className="mt-8">
  <h3 className="text-[20px] font-semibold text-neutral-d-grey">
    Cart Total : ${total.toFixed(2)}
  </h3>

</div>
</div>
     </div>
  );
}    
