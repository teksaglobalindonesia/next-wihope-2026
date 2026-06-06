'use client';

import {useState, useEffect } from 'react';
import { CustButton } from './CustButton';
import { useCartStore } from '@/stores/use-cart-stores';
import { useRouter } from 'next/navigation';


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const { totalQuantity } = useCartStore();
    const [quantity, setQuantity] = useState<Record<number, number>>({});
    const { addToCart } = useCartStore();
    const router = useRouter();

        const handleSubmit = (e: React.FormEvent, item: Product) => {
        e.preventDefault();
        if (!item || !item.title.trim()) return;

        const qty = quantity[item.id] || 1; // Mengambil kuantitas milik ID produk ini
        addToCart(item, qty); // Mengirim data produk yang BENAR ke store
        router.push("/cart");  
    };



        const handlePlus = (id: number) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const handleMinus = (id: number) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1)
        }));
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch ('https://fakestoreapi.com/products');
                const data: Product[] = await response.json();
                console.log('product:', data);
                setProducts(data);
            } catch (error) {
                console.error('Error Fetching Product from async:', error);
            }
        })();
    }, []);


    return (
        <div className="w-full max-w-7xl h-auto mx-auto gap-4 font-inter">  
            <div className="mx-[112.5px] grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {products.map((item) => (
                    <div key={item.id} className="flex flex-col justify-between w-[1,215px] h-[auto] bg-white border border-slate-200 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 hover:border-slate-700 rounded-xl p-4 shadow-sm">
                        
                        <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4 rounded-lg bg-slate-50 p-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <p className="font-bold text-base line-clamp-2 mb-1">{item.title}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{item.description}</p>
                        <p className="text-xl text-brand-primary font-bold mb-2">
                            ${item.price}
                        </p>

                        <div className="w-[303px] h-[52px] gap-4 flex items-center  ">
                        <CustButton variant="Quantity" size="Round" onClick={() => handleMinus(item.id)}>-</CustButton>
                        <p className="text-lg font-bold">{quantity[item.id] || 1}</p>
                        <CustButton variant="Quantity" size="Round" onClick={() => handlePlus(item.id)}>
                            +
                        </CustButton>
                        <form onSubmit={(e) => handleSubmit(e, item)}>
                            <CustButton className="mt-2" type="submit" iconPosition='left' size={'long'}>
                                Add to Cart
                            </CustButton>
                        </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}