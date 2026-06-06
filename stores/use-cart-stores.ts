import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

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

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    cartItems: CartItem[];
    totalQuantity: number;
    addToCart: (product: Product, qty: number) => void;
    removeItem: (productId: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cartItems: [],           
            totalQuantity: 0,

            addToCart: (product: Product, qty: number) => set((state) => {
                const existingIndex = state.cartItems.findIndex(item => item.product.id === product.id);
                let updatedCart = [...state.cartItems];

                if (existingIndex > -1) {
                    // Jika barang sudah ada, jumlahkan kuantitasnya
                    updatedCart[existingIndex].quantity += qty;
                } else {
                    // Jika barang baru, masukkan ke array
                    updatedCart.push({ product, quantity: qty });
                }

                return { 
                    cartItems: updatedCart, 
                    totalQuantity: state.totalQuantity + qty 
                };
            }),

            removeItem: (productId: number) => set((state) => {
                const itemToRemove = state.cartItems.find(item => item.product.id === productId);
                const updatedCart = state.cartItems.filter(item => item.product.id !== productId);
                
                return { 
                    cartItems: updatedCart, 
                    totalQuantity: state.totalQuantity - (itemToRemove?.quantity || 0) 
                };
            }),

            clearCart: () => set({ cartItems: [], totalQuantity: 0 }),
        }),
        {
            name: 'cart-storage',
        }
    )
);