'use client';

import { useCartStore } from "@/stores/use-cart-stores";
import { useEffect, useState } from "react";
import { CustButton } from "./CustButton";

export default function CartPage() {
    const { cartItems, addToCart, totalQuantity, removeItem } = useCartStore();

    const [hasMounted, setHasMounted] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ id: number; title: string } | null>(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const triggerRemoveConfirmation = (id: number, title: string) => {
        setSelectedProduct({ id, title });
        setIsModalOpen(true);
    };

    const confirmRemove = () => {
        if (selectedProduct) {
            removeItem(selectedProduct.id);
            setIsModalOpen(false);
            setSelectedProduct(null);
        }
    };

    if (!hasMounted) {
        return null;
    }

    if (cartItems.length === 0) {
        return (
            <div className="w-full h-auto flex items-center justify-center  mt-[120px] mb-4 text-center font-semibold text-red-500">
                Keranjang belanja Anda kosong.
            </div>
        );
    }
    
return (
    <div className="w-full max-w-6xl h-auto mx-auto my-[84px] p-4 font-inter">
        {/* Informasi */}
        <div className="mb-6 flex justify-between items-center border-b pb-4">
            <h1 className="text-2xl font-bold text-slate-800">Keranjang Belanja</h1>
            <p className="text-sm text-slate-500">Total: <span className="font-semibold text-slate-800">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> Barang</p>
        </div>

        <div className="w-full flex flex-col gap-6">
            {cartItems.map((item) => (
                <div 
                    key={item.product.id} 
                    className="flex items-center gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm w-full h-[240px]"
                >

                    <div className="w-[180px] h-full flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-2 shrink-0">
                        <img 
                            src={item.product.image} 
                            alt={item.product.title} 
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-between flex-1 h-full py-1">
                        {/* Judul Produk */}
                        <div>
                            <h2 className="font-bold text-xl text-slate-800 line-clamp-1">
                                {item.product.title}
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <CustButton variant={'Quantity'} size={'Round'} 
                            onClick={() => addToCart(item.product, -1)}
                            disabled={item.quantity <= 1}>-</CustButton>
                            
                            <span className="font-bold text-lg w-6 text-center text-slate-800">
                                {item.quantity}
                            </span>
                            
                            <CustButton variant={'Quantity'} size={'Round'} 
                                onClick={() => addToCart(item.product, 1)}
                                className="w-10 h-10 rounded-full bg-slate-400 text-white font-bold flex items-center justify-center text-xl hover:bg-slate-500 transition-all"
                            >
                                +
                            </CustButton>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-green-600">
                                ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                        </div>

                        <div>
                            <CustButton variant={'Danger'} size={'long'} onClick={() => triggerRemoveConfirmation(item.product.id, item.product.title)}>
                                Remove from Cart
                            </CustButton>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full mt-2 font-bold text-xl leading-[36px] text-[#4D4D4D] ">
                <h1>Total Price: ${cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)}</h1>
            </div>
        </div>

        {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white border border-slate-100 w-full max-w-md rounded-2xl p-6 shadow-xl transform transition-all scale-100 flex flex-col gap-4">
                        
                        {/* Judul & Deskripsi Alert */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Remove Item from Cart?</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                            Are you sure you want to remove? <span className="block font-medium text-slate-800">&quot;{selectedProduct?.title}&quot;</span></p>
                        </div>

                        {/* Aksi Tombol (Batal vs Konfirmasi) */}
                        <div className="flex justify-end gap-3 mt-2">
                            <CustButton 
                                variant={'secondary2'}
                                size={'long'}
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 h-[40px] text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all rounded-xl"
                            >
                                Cancel
                            </CustButton>
                            <CustButton
                                variant={'Danger'}
                                size={'long'}
                                onClick={confirmRemove}
                                className="rounded-xl"
                            >
                                Remove
                            </CustButton>
                        </div>

                    </div>
                </div>
            )}

    </div>
);
}