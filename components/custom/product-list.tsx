'use client';
import { useEffect, useState } from 'react';
import Button from '../Function/button';
import { useCartStore } from '@/stores/use-cart-store';
import { useRouter } from 'next/navigation';

export default function ProductList() {
  const [count, setCount] = useState<{ [key: number]: number }>({});
  const [Product, setProduct] = useState<any[]>([]);
  const addToCart = useCartStore((state) => state.addToCart);

  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const [addedButton, setAddedButton] = useState<string | null>(null);

  const handleAddToCart = async (data: any) => {
    const id = data.id.toString();

    setLoadingButton(id);

    await new Promise((resolve) => setTimeout(resolve, 800));

    addToCart({
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity: count[data.id] ?? 1
    });

    setLoadingButton(null);

    setAddedButton(id);

    setTimeout(() => {
      setAddedButton(null);
    }, 2000);
  };

  const handleTambah = (id: number) => {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const handleKurang = (id: number) => {
    setCount((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const Data = await response.json();
        setProduct(Data);
      } catch (error) {
        console.error('Data mu error mas', error);
      }
    })();
  }, []);

  return (
    <div className="mt-[40px] w-full bg-white px-[50px] pb-[16px] font-inter">
      <div className="grid grid-cols-3 gap-[16px]">
        {Product.map((data: any) => (
          <div
            className="border-nutral-grey flex h-[586px] flex-col justify-center gap-[16px] overflow-hidden rounded-[16px] border bg-white p-[16px]"
            key={data.id}
          >
            <div className="flex h-[286px] w-full items-center justify-center">
              <img
                src={`${data.image}`}
                alt={data.title}
                className="max-h-full max-w-full"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[8px]">
              <p className="line-clamp-2 text-[28px] font-bold leading-[35px] text-neutral-d_grey">
                {data.title}
              </p>
              <p className="mt-auto line-clamp-3 text-[14px] leading-[20px] text-neutral-grey">
                {data.description}
              </p>
              <p className="text-[28px] font-bold text-brand-primary">
                ${data.price}
              </p>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex h-[52px] w-[134px] items-center justify-between">
                <div
                  className="flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-neutral-l_grey text-white"
                  onClick={() => handleKurang(data.id)}
                >
                  <p>-</p>
                </div>
                <p className="text-[28px] font-bold text-neutral-black">
                  {count[data.id] || 1}
                </p>
                <div
                  className="flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-neutral-l_grey text-white"
                  onClick={() => handleTambah(data.id)}
                >
                  <p>+</p>
                </div>
              </div>
              <Button
                variant="Primary"
                className="h-[52px] w-[153px] rounded-[4px]"
                onClick={() => handleAddToCart(data)}
                loading={loadingButton === data.id.toString()}
                disabled={loadingButton === data.id.toString()}
              >
                {addedButton === data.id.toString() ? '✓ Added' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
